// components/GoogleLoginButton.tsx
import { useEffect } from 'react';
import Image from 'next/image';

declare global {
  interface Window {
    google: any;
  }
}

const handleCredentialResponse = (response: any) => {
  const id_token = response.credential;
  console.log('Google ID token:', id_token);
  // Send the ID token to your server for authentication.
};

const GoogleLoginButton = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initGoogleButton = () => {
        if (window.google && window.google.accounts) {
          window.google.accounts.id.initialize({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse,
            auto_select: false,
          });

          window.google.accounts.id.renderButton(
            document.getElementById('google-login-button'),
            {
              theme: 'outline',
              size: 'large',
              locale: 'en',
              text: 'continue_with',
              width: 240,
              height: 50,
            }
          );
        } else {
          setTimeout(initGoogleButton, 100);
        }
      };
      initGoogleButton();
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <p className="mb-2 text-gray-600">or</p>
      <button id="google-login-button" className="...">
        <Image src="google-logo.svg" alt="Google logo" width={32} height={32} />
      </button>
    </div>
  );
};

export default GoogleLoginButton;
