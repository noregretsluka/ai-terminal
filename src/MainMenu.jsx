// src/MainMenu.jsx
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function MainMenu() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // Redirect to login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-400 px-4 font-vt">
      <div className="border border-green-500 w-full max-w-md">

        {/* Windows XP terminal-style title bar */}
        <div className="flex justify-between items-center bg-black text-green-400 border-b border-green-500 px-2 py-1 text-sm font-bold font-mono">
          <span>C:\WINDOWS\System32\Main_Menu</span>
          <div className="flex space-x-1">
            <div className="border border-green-500 w-4 h-4 text-center leading-3 cursor-pointer">_</div>
            <div className="border border-green-500 w-4 h-4 text-center leading-3 cursor-pointer">X</div>
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-6">
          <div className="text-center font-mono text-lg mb-6">
            Select an Option:
          </div>

          <div className="flex flex-col space-y-3 font-sans">
            <Link to="/assistant">
              <button className="w-full border border-green-500 text-green-300 px-4 py-2 hover:bg-green-800 transition">
                Launch AI Assistant
              </button>
            </Link>
            <Link to="/logs">
              <button className="w-full border border-green-500 text-green-300 px-4 py-2 hover:bg-green-800 transition">
                View Logs
              </button>
            </Link>
            <Link to="/settings">
              <button className="w-full border border-green-500 text-green-300 px-4 py-2 hover:bg-green-800 transition">
                System Settings
              </button>
            </Link>
            <Link to="/">
              <button className="w-full border border-green-500 text-green-300 px-4 py-2 mt-4 hover:bg-green-800 transition">
                Log Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;