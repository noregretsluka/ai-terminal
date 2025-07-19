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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-sm">
        {user ? (
          <>
            <p className="text-center mb-4 text-lg">Welcome, {user.email}</p>
            <button
              onClick={handleLogout}
              className="w-full py-2 bg-red-600 rounded-md hover:bg-red-700 transition duration-300"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-6 text-center">
              {isRegistering ? "Register" : "Log In"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
              >
                {isRegistering ? "Sign Up" : "Log In"}
              </button>
            </form>
            <p
              className="mt-4 text-sm text-center text-gray-400 cursor-pointer hover:underline"
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