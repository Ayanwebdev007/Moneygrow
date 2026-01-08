import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class AuthService {
  // Replace with your actual Render backend URL
  // Points to production backend on Render
  final String baseUrl = 'https://money-grow-bloom.onrender.com/api'; 
  final _storage = const FlutterSecureStorage();

  Future<Map<String, dynamic>> login(String phone, String password) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/auth/investor/login'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'phone': phone, 'password': password}),
      );

      final data = json.decode(response.body);
      if (response.statusCode == 200) {
        await _storage.write(key: 'token', value: data['token']);
        await _storage.write(key: 'user', value: json.encode(data['user']));
        return {'success': true, 'user': data['user']};
      } else {
        return {'success': false, 'error': data['error'] ?? 'Login failed'};
      }
    } catch (e) {
      return {'success': false, 'error': 'Connection error: $e'};
    }
  }

  Future<Map<String, dynamic>> register(String name, String phone, String password) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/auth/investor/register'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'name': name, 'phone': phone, 'password': password}),
      );

      final data = json.decode(response.body);
      if (response.statusCode == 201) {
        await _storage.write(key: 'token', value: data['token']);
        await _storage.write(key: 'user', value: json.encode(data['user']));
        return {'success': true, 'user': data['user']};
      } else {
        return {'success': false, 'error': data['error'] ?? 'Registration failed'};
      }
    } catch (e) {
      return {'success': false, 'error': 'Connection error: $e'};
    }
  }

  Future<void> logout() async {
    await _storage.delete(key: 'token');
    await _storage.delete(key: 'user');
  }

  Future<String?> getToken() async {
    return await _storage.read(key: 'token');
  }
}
