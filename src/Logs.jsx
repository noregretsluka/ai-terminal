// src/Logs.jsx
function Logs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-400 font-mono p-6">
      <div className="w-full max-w-2xl border border-green-500 p-4">
        <h1 className="text-2xl mb-4 border-b border-green-500 pb-2">System Logs</h1>
        <ul className="space-y-2 text-sm">
          <li>[12:01:03] User login detected.</li>
          <li>[12:01:07] Terminal initialized.</li>
          <li>[12:01:10] AI assistant handshake pending...</li>
          {/* You can replace these with dynamic logs later */}
        </ul>
      </div>
    </div>
  );
}

export default Logs;