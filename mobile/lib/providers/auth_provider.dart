import 'package:flutter/material.dart';
import '../services/auth_service.dart';

class AuthProvider with ChangeNotifier {
  final AuthService _authService = AuthService();
  Map<String, dynamic>? _user;
  bool _isLoading = false;

  Map<String, dynamic>? get user => _user;
  bool get isLoading => _isLoading;
  bool get isAuthenticated => _user != null;

  Future<Map<String, dynamic>> login(String phone, String password) async {
    _isLoading = true;
    notifyListeners();

    final result = await _authService.login(phone, password);
    
    if (result['success']) {
      _user = result['user'];
    }
    
    _isLoading = false;
    notifyListeners();
    return result;
  }

  Future<Map<String, dynamic>> register(String name, String phone, String password) async {
    _isLoading = true;
    notifyListeners();

    final result = await _authService.register(name, phone, password);
    
    if (result['success']) {
      _user = result['user'];
    }

    _isLoading = false;
    notifyListeners();
    return result;
  }

  void logout() {
    _authService.logout();
    _user = null;
    notifyListeners();
  }
}
