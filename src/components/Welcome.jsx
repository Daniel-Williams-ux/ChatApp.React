import Logo from '../img/react.png';
import GoogleSignin from '../img/google.png';
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to our web chat app</h2>
      <img src={Logo} alt="ReactJs logo" width={50} height={50} />
      <p>Use your Google account to connect with other React developers and start chatting. Sign in now to join the conversation!</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;