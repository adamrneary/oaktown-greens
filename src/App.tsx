import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import { FirestoreProvider } from "react-firestore";

import firebase from "./utils/firebase";
import AuthContext, { AuthContextProps } from "./context/AuthContext";
import AppRoutes from "./routes";

function App({ user, signOut, signInWithGoogle }: AuthContextProps) {
  return (
    <AuthContext.Provider value={{ user, signOut, signInWithGoogle }}>
      <FirestoreProvider firebase={firebase}>
        <AppRoutes />
      </FirestoreProvider>
    </AuthContext.Provider>
  );
}

const firebaseAppAuth = firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
