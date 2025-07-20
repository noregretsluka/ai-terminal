// src/settings.jsx
import { Link } from "react-router-dom";

function Settings() {
  return (
    <div className="min-h-screen bg-black text-green-400 px-4 font-vt flex items-center justify-center">
      <div className="border border-green-500 w-full max-w-md">
        {/* Terminal-style title bar */}
        <div className="flex justify-between items-center bg-black text-green-400 border-b border-green-500 px-2 py-1 text-sm font-bold font-mono">
          <span>C:\WINDOWS\System32\System_Settings</span>
          <div className="flex space-x-1">
            <div className="border border-green-500 w-4 h-4 text-center leading-3 cursor-pointer">_</div>
            <div className="border border-green-500 w-4 h-4 text-center leading-3 cursor-pointer">X</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h2 className="text-lg font-sans text-center">System Settings</h2>

          {/* Example setting */}
          <div className="flex justify-between items-center font-sans">
            <label htmlFor="darkMode">Dark Mode</label>
            <input type="checkbox" id="darkMode" className="form-checkbox text-green-500" />
          </div>

          {/* Add more settings here */}

          {/* Back button */}
          <Link to="/menu">
            <button className="mt-4 border border-green-500 text-green-300 hover:bg-green-800 transition px-4 py-2 w-full font-sans">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Settings;