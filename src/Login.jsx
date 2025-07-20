// src/Login.jsx
import { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = isRegistering
        ? await createUserWithEmailAndPassword(auth, email, password)
        : await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-400 px-4 font-vt">
      <div className="border border-green-500 w-full max-w-md">
        {/* Windows XP terminal-style title bar */}
        <div className="flex justify-between items-center bg-black text-green-400 border-b border-green-500 px-2 py-1 text-sm font-bold font-mono">
          <span>C:\WINDOWS\System32\Log_In</span>
          <div className="flex space-x-1">
            <div className="border border-green-500 w-4 h-4 text-center leading-3 cursor-pointer">_</div>
            <div className="border border-green-500 w-4 h-4 text-center leading-3 cursor-pointer">X</div>
          </div>
        </div>

        {/* Terminal output and form */}
        <div className="p-6">
          {/* Fake printed terminal text */}
          <div className="w-full flex justify-center">
			<h1 className="text-green-400 font-mono text-xl text-center blinking-cursor">
				Welcome to AI Terminal
			</h1>
		  </div>

          {user ? (
            <>
              <p className="text-center mb-4 font-sans">Welcome, {user.email}</p>
              <button
                onClick={handleLogout}
                className="hover:bg-green-800 transition duration-300 w-full border border-green-400 py-2 font-sans"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-4 font-sans">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-black border border-green-500 text-green-200 px-4 py-2 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-black border border-green-500 text-green-200 px-4 py-2 focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-black border border-green-500 text-green-300 py-2 hover:bg-green-800 transition duration-300"
                >
                  {isRegistering ? "Sign Up" : "Log In"}
                </button>
              </form>
              <p
                className="mt-4 text-center text-sm text-green-500 cursor-pointer hover:underline font-sans"
                onClick={() => setIsRegistering(!isRegistering)}
              >
                {isRegistering
                  ? "Already have an account? Log in"
                  : "Don’t have an account? Sign up"}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;