import React, { useState } from 'react';
import Header from '../components/Header';

const Home = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [auditResult, setAuditResult] = useState<string | null>(null);

  const handleAudit = () => {
    // For simplicity, we just return a dummy response
    setAuditResult('This is a dummy audit result for contract ' + contractAddress);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <main className="flex flex-col items-center justify-center w-9/12">
        <input
          type="text"
          placeholder="Enter contract address"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
          className="p-2 border-2 border-gray-300 my-2 w-full"
        />
        <button onClick={handleAudit} className="p-2 bg-blue-500 text-white my-2">
          Start Audit
        </button>
        {auditResult && (
          <div className="mt-5 p-4 border-2 border-gray-300 w-full">
            <h2 className="text-xl mb-2">Audit Result:</h2>
            <p>{auditResult}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;