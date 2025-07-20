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
    <div className="min-h-screen flex items-center justify-center bg-black text-green-400 font-vt">
      <div className="border border-green-500 w-full max-w-md p-6">
        {/* Terminal Title Bar */}
        <div className="flex justify-between items-center border-b border-green-500 px-2 py-1 text-sm font-bold font-mono">
          <span>C:\WINDOWS\System32\Main_Menu</span>
          <div className="flex space-x-1">
            <div className="border border-green-500 w-4 h-4 text-center leading-3">_</div>
            <div className="border border-green-500 w-4 h-4 text-center leading-3">X</div>
          </div>
        </div>

        {/* Menu Buttons */}
        <div className="flex flex-col space-y-4 mt-6">
          <Link to="/assistant" className="bg-black border border-green-500 text-green-300 px-4 py-2 hover:bg-green-800 transition duration-300">
            Launch AI Assistant
          </Link>
          <Link to="/logs" className="bg-black border border-green-500 text-green-300 px-4 py-2 hover:bg-green-800 transition duration-300">
            View Logs
          </Link>
          <Link to="/settings" className="bg-black border border-green-500 text-green-300 px-4 py-2 hover:bg-green-800 transition duration-300">
            System Settings
          </Link>
          <button onClick={handleLogout} className="bg-black border border-green-500 text-green-300 px-4 py-2 hover:bg-green-800 transition duration-300">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;