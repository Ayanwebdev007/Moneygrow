import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class PlanService {
  final String baseUrl = 'https://money-grow-bloom.onrender.com/api';
  final _storage = const FlutterSecureStorage();

  Future<List<dynamic>> fetchPlans() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/plans'));
      if (response.statusCode == 200) {
        return json.decode(response.body);
      } else {
        throw Exception('Failed to load plans');
      }
    } catch (e) {
      throw Exception('Connection error: $e');
    }
  }
}
