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
      <div className="card rounded-none border border-green-500 w-full max-w-md shadow-lg">
        {/* Windows XP Terminal-style Header */}
        <div className="flex justify-between items-center bg-green-900 text-black font-bold px-2 py-1 text-sm">
          <span className="text-green-100">C:\WINDOWS\System32\Log_In</span>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
            <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
          </div>
        </div>

        <div className="p-6">
          {user ? (
            <>
              <p className="text-center mb-4">Welcome, {user.email}</p>
              <button
                onClick={handleLogout}
                className="hover:bg-green-800 transition duration-300"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <h2 className="text-xl font-mono mb-4 blinking-cursor text-green-300">
                {isRegistering ? "Register" : "Log In"}
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4"
              >
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit" className="hover:bg-green-700">
                  {isRegistering ? "Sign Up" : "Log In"}
                </button>
              </form>
              <p
                className="mt-4 text-center text-sm text-green-500 cursor-pointer hover:underline"
                onClick={() => setIsRegistering(!isRegistering)}
              >
                {isRegistering
                  ? "Already have an account? Log in"
                  : "Don't have an account? Sign up"}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;