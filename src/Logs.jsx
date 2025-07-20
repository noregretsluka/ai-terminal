// src/Logs.jsx
import { Link } from "react-router-dom";

function Logs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-400 px-4 font-vt">
      <div className="border border-green-500 w-full max-w-md p-6">
        <div className="text-center mb-6">
          <h1 className="text-xl font-mono">System Logs</h1>
        </div>

        {/* Your log display content goes here */}

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-block bg-black border border-green-500 text-green-300 px-4 py-2 hover:bg-green-800 transition duration-300 font-sans"
          >
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Logs;