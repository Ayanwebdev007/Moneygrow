import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import '../providers/auth_provider.dart';
import 'kyc_screen.dart';

class PlanDetailScreen extends StatefulWidget {
  final dynamic plan;

  const PlanDetailScreen({super.key, required this.plan});

  @override
  State<PlanDetailScreen> createState() => _PlanDetailScreenState();
}

class _PlanDetailScreenState extends State<PlanDetailScreen> {
  @override
  Widget build(BuildContext context) {
    final user = Provider.of<AuthProvider>(context).user;
    final kycStatus = user?['kycStatus'] ?? 'not_started';

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Text(widget.plan['name'], style: GoogleFonts.outfit(fontWeight: FontWeight.bold)),
        elevation: 0,
        backgroundColor: Colors.white,
        foregroundColor: const Color(0xFF0F172A),
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Stack(
              children: [
                Container(
                  height: 250,
                  width: double.infinity,
                  decoration: const BoxDecoration(
                    image: DecorationImage(
                      image: NetworkImage('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'),
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
                Container(
                  height: 250,
                  width: double.infinity,
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [
                        Colors.black.withOpacity(0.4),
                        Colors.transparent,
                        const Color(0xFF10B981).withOpacity(0.2),
                      ],
                      begin: Alignment.topCenter,
                      end: Alignment.bottomCenter,
                    ),
                  ),
                ),
                Positioned(
                  bottom: -30,
                  left: 0,
                  right: 0,
                  child: Center(
                    child: Container(
                      padding: const EdgeInsets.all(24),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        shape: BoxShape.circle,
                        boxShadow: [
                          BoxShadow(
                            color: const Color(0xFF10B981).withOpacity(0.2),
                            blurRadius: 30,
                            spreadRadius: 5,
                          )
                        ],
                      ),
                      child: const Icon(
                        Icons.insights_rounded,
                        size: 60,
                        color: Color(0xFF10B981),
                      ),
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 40),
            Padding(
              padding: const EdgeInsets.all(24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
                        decoration: BoxDecoration(
                          color: const Color(0xFFECFDF5),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: Text(
                          widget.plan['type'].toString().toUpperCase(),
                          style: GoogleFonts.outfit(
                            color: const Color(0xFF047857),
                            fontSize: 12,
                            fontWeight: FontWeight.bold,
                            letterSpacing: 1.2,
                          ),
                        ),
                      ),
                      Text(
                        '${widget.plan['profitPercentage']}% ROI',
                        style: GoogleFonts.outfit(
                          fontSize: 24,
                          color: const Color(0xFF10B981),
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 24),
                  Text(
                    'Plan Highlights',
                    style: GoogleFonts.outfit(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: const Color(0xFF0F172A),
                    ),
                  ),
                  const SizedBox(height: 16),
                  _buildDetailRow(Icons.calendar_today_rounded, 'Duration', '${widget.plan['durationDays']} Days'),
                  _buildDetailRow(Icons.payments_rounded, 'Min Investment', '₹${widget.plan['minAmount']}'),
                  _buildDetailRow(Icons.lock_clock_rounded, 'Lock-in Period', widget.plan['lockInPeriod'] ?? 'N/A'),
                  _buildDetailRow(Icons.account_balance_rounded, 'Payout Frequency', widget.plan['payoutFrequency'] ?? 'N/A'),
                  
                  const SizedBox(height: 32),
                  Text(
                    'Description',
                    style: GoogleFonts.outfit(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: const Color(0xFF0F172A),
                    ),
                  ),
                  const SizedBox(height: 12),
                  Text(
                    widget.plan['description'] ?? 'Exclusive investment plan designed for consistent growth and wealth preservation.',
                    style: GoogleFonts.outfit(
                      fontSize: 15,
                      color: const Color(0xFF64748B),
                      height: 1.6,
                    ),
                  ),
                  
                  const SizedBox(height: 32),
                  Container(
                    padding: const EdgeInsets.all(20),
                    decoration: BoxDecoration(
                      color: const Color(0xFFF8FAFC),
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: const Color(0xFFF1F5F9)),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            const Icon(Icons.gpp_maybe_rounded, color: Color(0xFFE11D48), size: 20),
                            const SizedBox(width: 8),
                            Text(
                              'Risk Disclaimer',
                              style: GoogleFonts.outfit(
                                fontWeight: FontWeight.bold,
                                color: const Color(0xFF0F172A),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 12),
                        Text(
                          widget.plan['riskDisclaimer'] ?? 'Investment in this plan is subject to market risks. Please read documents carefully before investing.',
                          style: GoogleFonts.outfit(
                            color: const Color(0xFF64748B),
                            fontSize: 13,
                            height: 1.5,
                            fontStyle: FontStyle.italic,
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 40),
                  SizedBox(
                    width: double.infinity,
                    height: 60,
                    child: ElevatedButton(
                      onPressed: kycStatus == 'approved' 
                        ? () => ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Plan subscription coming soon!')))
                        : () async {
                            final result = await Navigator.push(
                              context,
                              MaterialPageRoute(builder: (context) => const KYCScreen()),
                            );
                            if (result == true) {
                              if (mounted) {
                                Provider.of<AuthProvider>(context, listen: false).refreshProfile();
                              }
                            }
                          },
                      style: ElevatedButton.styleFrom(
                        backgroundColor: kycStatus == 'approved' ? const Color(0xFF0F172A) : const Color(0xFF10B981),
                        foregroundColor: Colors.white,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(16),
                        ),
                        elevation: 0,
                      ),
                      child: Text(
                        kycStatus == 'approved' ? 'SUBSCRIBE NOW' : 'START KYC',
                        style: GoogleFonts.outfit(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                          letterSpacing: 1.5,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 10),
                  if (kycStatus == 'approved')
                    Center(
                      child: Text(
                        'Verified Account ✅',
                        style: GoogleFonts.outfit(color: const Color(0xFF10B981), fontWeight: FontWeight.bold, fontSize: 13),
                      ),
                    ),
                  const SizedBox(height: 40),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildDetailRow(IconData icon, String label, String value) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 16),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              color: const Color(0xFFF1F5F9),
              borderRadius: BorderRadius.circular(10),
            ),
            child: Icon(icon, color: const Color(0xFF64748B), size: 20),
          ),
          const SizedBox(width: 16),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                label,
                style: GoogleFonts.outfit(
                  fontSize: 12,
                  color: const Color(0xFF64748B),
                  fontWeight: FontWeight.w500,
                ),
              ),
              Text(
                value,
                style: GoogleFonts.outfit(
                  fontSize: 16,
                  color: const Color(0xFF0F172A),
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
