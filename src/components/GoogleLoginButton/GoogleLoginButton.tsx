// components/GoogleLoginButton.tsx
import { useEffect } from 'react';
import Image from 'next/image';

declare const window: any;

const GoogleLoginButton = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.gapi.load('auth2', () => {
        const auth2 = window.gapi.auth2.init({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          scope: 'profile email',
        });

        auth2.attachClickHandler(
          document.getElementById('google-login-button'),
          {},
          (googleUser: gapi.auth2.GoogleUser) => {
            const id_token = googleUser.getAuthResponse().id_token;
            console.log('Google ID token:', id_token);
            // Send the ID token to your server for authentication.
          },
          (error: { error: string }) => {
            console.log('Error:', error);
          }
        );
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <p className="mb-2 text-gray-600">or login with Google</p>
      <button id="google-login-button" className="...">
        <Image src="google-logo.svg" alt="Google logo" width={32} height={32} />
      </button>
    </div>
  );
};

export default GoogleLoginButton;
