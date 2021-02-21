import { auth } from "./firebase"

// Sign Up
export const signUp = (email: string, password: string) => auth.createUserWithEmailAndPassword(email, password)

// Send Email Verification
export const sendEmailVerification = () => {
  if (auth.currentUser) auth.currentUser.sendEmailVerification()
}

// Sign Out
export const signOut = () => auth.signOut()
