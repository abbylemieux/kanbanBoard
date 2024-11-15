import { JwtPayload } from 'jwt-decode';

// Add type definition for jwtDecode
declare function jwtDecode(token: string): JwtPayload;

class AuthService {
  // Type-casted function for decoding JWT
  jwtDecodeFn = jwtDecode as (token: string) => JwtPayload; 

  // Decodes the JWT token and returns the user profile information
  getProfile() {
    const token = this.getToken();
    return token ? this.jwtDecodeFn(token) : null;
  }

  // Checks if the user is logged in by verifying if a valid token exists
  loggedIn() {
    const token = this.getToken();
    return token ? !this.isTokenExpired(token) : false;
  }

  // Checks if the token is expired by comparing the expiration time to the current time
  isTokenExpired(token: string) {
    try {
      const decoded = this.jwtDecodeFn(token); // Using jwtDecodeFn here
      if (decoded.exp) {
        const currentTime = Date.now() / 1000;
        return decoded.exp < currentTime;
      }
      return false;
    } catch (error) {
      console.error("Failed to decode token:", error);
      return true;
    }
  }

  // Retrieves the token from localStorage
  getToken(): string | null {
    return localStorage.getItem('id_token');
  }

  // Saves the token to localStorage and redirects to the home page
  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Removes the token from localStorage and redirects to the login page
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();
