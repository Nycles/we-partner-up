import { auth } from "./firebase"

// Sign Up
export const signUp = (email: string, password: string): Promise<any> =>
  auth.createUserWithEmailAndPassword(email, password)

// Send Email Verification
export const sendEmailVerification = (): void | Promise<void> => {
  if (auth.currentUser) auth.currentUser.sendEmailVerification()
}

// Sign Out
export const signOut = (): Promise<void> => auth.signOut()
