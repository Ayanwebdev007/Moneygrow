import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../services/auth_service.dart';

class KYCScreen extends StatefulWidget {
  const KYCScreen({super.key});

  @override
  State<KYCScreen> createState() => _KYCScreenState();
}

class _KYCScreenState extends State<KYCScreen> {
  final _formKey = GlobalKey<FormState>();
  final _authService = AuthService();
  bool _isLoading = false;

  final _fullNameController = TextEditingController();
  final _panController = TextEditingController();
  final _aadhaarController = TextEditingController();
  final _dobController = TextEditingController();

  Future<void> _submitKYC() async {
    if (!_formKey.currentState!.validate()) return;

    setState(() => _isLoading = true);

    final kycData = {
      'fullName': _fullNameController.text.trim(),
      'panNumber': _panController.text.trim().toUpperCase(),
      'aadhaarNumber': _aadhaarController.text.trim(),
      'dob': _dobController.text.trim(),
    };

    final result = await _authService.submitKYC(kycData);

    setState(() => _isLoading = false);

    if (result['success']) {
      if (mounted) {
        showDialog(
          context: context,
          barrierDismissible: false,
          builder: (context) => AlertDialog(
            title: const Icon(Icons.check_circle, color: Color(0xFF10B981), size: 60),
            content: Text(
              'KYC Verification Successful!',
              textAlign: TextAlign.center,
              style: GoogleFonts.outfit(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            actions: [
              TextButton(
                onPressed: () {
                  Navigator.pop(context); // Close dialog
                  Navigator.pop(context, true); // Return to detail screen with success
                },
                child: Text('CONTINUE', style: GoogleFonts.outfit(fontWeight: FontWeight.bold)),
              ),
            ],
          ),
        );
      }
    } else {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(result['error']), backgroundColor: Colors.red),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Text('Account Verification', style: GoogleFonts.outfit(fontWeight: FontWeight.bold)),
        elevation: 0,
        backgroundColor: Colors.white,
        foregroundColor: const Color(0xFF0F172A),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Complete Your KYC',
                style: GoogleFonts.outfit(fontSize: 24, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 8),
              Text(
                'Please provide your details for PAN and Aadhaar verification. This is required to start investing.',
                style: GoogleFonts.outfit(color: const Color(0xFF64748B), fontSize: 14),
              ),
              const SizedBox(height: 32),
              
              _buildTextField(
                controller: _fullNameController,
                label: 'Full Name (as per ID)',
                icon: Icons.person_outline,
                validator: (v) => v!.isEmpty ? 'Enter your full name' : null,
              ),
              const SizedBox(height: 20),
              
              _buildTextField(
                controller: _panController,
                label: 'PAN Number',
                icon: Icons.badge_outlined,
                hint: 'ABCDE1234F',
                textCapitalization: TextCapitalization.characters,
                validator: (v) {
                  if (v!.isEmpty) return 'Enter PAN number';
                  if (!RegExp(r'^[A-Z]{5}[0-9]{4}[A-Z]{1}$').hasMatch(v.toUpperCase())) {
                    return 'Invalid PAN format';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 20),
              
              _buildTextField(
                controller: _aadhaarController,
                label: 'Aadhaar Number',
                icon: Icons.fingerprint_outlined,
                hint: '12-digit number',
                keyboardType: TextInputType.number,
                validator: (v) {
                  if (v!.isEmpty) return 'Enter Aadhaar number';
                  if (v.length != 12 || !RegExp(r'^[0-9]+$').hasMatch(v)) {
                    return 'Must be 12 digits';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 20),
              
              _buildTextField(
                controller: _dobController,
                label: 'Date of Birth',
                icon: Icons.calendar_month_outlined,
                hint: 'DD-MM-YYYY',
                validator: (v) => v!.isEmpty ? 'Enter your DOB' : null,
              ),
              
              const SizedBox(height: 48),
              
              SizedBox(
                width: double.infinity,
                height: 60,
                child: ElevatedButton(
                  onPressed: _isLoading ? null : _submitKYC,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF10B981),
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    elevation: 0,
                  ),
                  child: _isLoading 
                    ? const CircularProgressIndicator(color: Colors.white)
                    : Text(
                        'VERIFY & CONTINUE',
                        style: GoogleFonts.outfit(fontSize: 16, fontWeight: FontWeight.bold, letterSpacing: 1.2),
                      ),
                ),
              ),
              const SizedBox(height: 20),
              Center(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Icon(Icons.lock_outline, size: 14, color: Color(0xFF64748B)),
                    const SizedBox(width: 4),
                    Text(
                      'Your data is securely encrypted',
                      style: GoogleFonts.outfit(color: const Color(0xFF64748B), fontSize: 12),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildTextField({
    required TextEditingController controller,
    required String label,
    required IconData icon,
    String? hint,
    TextInputType? keyboardType,
    TextCapitalization textCapitalization = TextCapitalization.none,
    String? Function(String?)? validator,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: GoogleFonts.outfit(fontSize: 13, fontWeight: FontWeight.w600, color: const Color(0xFF0F172A)),
        ),
        const SizedBox(height: 8),
        TextFormField(
          controller: controller,
          keyboardType: keyboardType,
          textCapitalization: textCapitalization,
          validator: validator,
          style: GoogleFonts.outfit(fontSize: 16),
          decoration: InputDecoration(
            hintText: hint,
            prefixIcon: Icon(icon, color: const Color(0xFF64748B), size: 20),
            filled: true,
            fillColor: const Color(0xFFF8FAFC),
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(12),
              borderSide: const BorderSide(color: Color(0xFFF1F5F9)),
            ),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(12),
              borderSide: const BorderSide(color: Color(0xFFF1F5F9)),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(12),
              borderSide: const BorderSide(color: Color(0xFF10B981), width: 1.5),
            ),
            errorBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(12),
              borderSide: const BorderSide(color: Colors.red, width: 1),
            ),
            contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
          ),
        ),
      ],
    );
  }
}
