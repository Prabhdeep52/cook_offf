import 'package:cook_off/view/auth_screens/orgSide/login_page_org.dart';
import 'package:cook_off/view/userflow/orgside/orgs/homepageorg.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class AuthenticationWrapper extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return StreamBuilder(
      stream: FirebaseAuth.instance.authStateChanges(),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return CircularProgressIndicator();
        } else if (snapshot.hasData) {
          return HomePageOrg();
        } else {
          return LoginPageOrg();
        }
      },
    );
  }
}