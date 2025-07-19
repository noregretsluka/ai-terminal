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
      <div className="border border-green-500 w-full max-w-md rounded-none shadow-lg">
        {/* XP-style title bar */}
        <div className="flex items-center justify-between bg-black text-green-400 border-b border-green-500 px-3 py-1 text-sm font-mono">
          <span className="tracking-wide">C:\WINDOWS\System32\Log_In</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 border border-green-500 flex items-center justify-center text-xs cursor-pointer">_</div>
            <div className="w-4 h-4 border border-green-500 flex items-center justify-center text-xs cursor-pointer">X</div>
          </div>
        </div>

        <div className="p-6">
          {user ? (
            <>
              <p className="text-center mb-4">Welcome, {user.email}</p>
              <button
                onClick={handleLogout}
                className="w-full border border-green-500 py-2 hover:bg-green-800 transition"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl text-center mb-6 font-mono">Log In</h2>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black border border-green-500 text-green-200 px-3 py-2 focus:outline-none font-mono"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black border border-green-500 text-green-200 px-3 py-2 focus:outline-none font-mono"
                  required
                />
                <button
                  type="submit"
                  className="border border-green-500 py-2 hover:bg-green-700 font-mono"
                >
                  {isRegistering ? "Sign Up" : "Log In"}
                </button>
              </form>
              <p
                className="mt-4 text-center text-sm text-green-500 cursor-pointer hover:underline font-mono"
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