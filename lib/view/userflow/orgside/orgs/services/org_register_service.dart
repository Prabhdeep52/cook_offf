import 'dart:convert';

import 'package:cook_off/view/userflow/orgside/orgs/services/org_class.dart';
import 'package:http/http.dart' as http;

Future<void> postOrgDataToServer({
  required String name,
  required String type,
  required String description,
  required String location,
  required String lat,
  required String long,
}) async {
  final OrgRegistration = Organization(
      lat: lat,
      long: long,
      name: name,
      description: description,
      location: location,
      OrgType: type);

  final jsonBody = jsonEncode(OrgRegistration.toMap()); // CHECK HERE

  const apiUrl = 'https://cook-zf0x.onrender.com/orgPost';

  final response = await http.post(
    Uri.parse(apiUrl),
    headers: {'Content-Type': 'application/json'},
    body: jsonBody,
  );

  if (response.statusCode == 200) {
    print('Data posted successfully!');
  } else {
    print('Failed to post data: ${response.statusCode}');
  }
}
