// import 'package:firebase_auth/firebase_auth.dart';
// import 'package:flutter/material.dart';

// class AuthService extends ChangeNotifier{
//   final FirebaseAuth _auth = FirebaseAuth.instance;

  
//   Future<User?> signInWithEmailAndPassword(
//       String email, String password) async {
//     try {
//       final UserCredential userCredential = await _auth
//           .signInWithEmailAndPassword(email: email, password: password);
//       return userCredential.user;
//     } catch (e) {
//       debugPrint("Error signing in: $e");
//       return null;
//     }
//   }

//   Future<User?> registerWithEmailAndPassword(
//       String email, String password) async {
//     try {
//       final UserCredential userCredential = await _auth
//           .createUserWithEmailAndPassword(email: email, password: password);
//       return userCredential.user;
//     } catch (e) {
//       debugPrint("Error registering: $e");
//       return null;
//     }
//   }


//   Future<void> signOut() async {
//     try {
//       await _auth.signOut();
//     } catch (e) {
//       debugPrint("Error signing out: $e");
//     }
//   }

  
//   User? getCurrentUser() {
//     try {
//       return _auth.currentUser;
//     } catch (e) {
//       debugPrint("Error getting current user: $e");
//       return null;
//     }
//   }


//   bool isUserSignedIn() {
//     try {
//       return _auth.currentUser != null;
//     } catch (e) {
//       print("Error checking if user is signed in: $e");
//       return false;
//     }
//   }
// }
