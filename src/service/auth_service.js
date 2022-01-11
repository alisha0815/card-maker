import { getAuth, signInWithPopup } from 'firebase/auth';

class AuthService {
  login(providerName) {
    const auth = getAuth();
    const authProvider = new `${providerName}AuthProvider`();
    return signInWithPopup(auth, authProvider);
  }
}

export default AuthService;
