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
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-green-200 px-4">
      <div className="card">
        {user ? (
          <>
            <p className="text-center mb-4">Welcome, {user.email}</p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-green-300">
              {isRegistering ? "Register" : "Log In"}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                className=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">
                {isRegistering ? "Sign Up" : "Log In"}
              </button>
            </form>
            <p
              className="mt-4 text-sm text-center text-green-400 cursor-pointer hover:underline"
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
  );
}

export default Login;