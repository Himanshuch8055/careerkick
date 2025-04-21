import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Simulate logout logic (clear tokens, etc.)
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1200);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold text-red-700 mb-4">Logging out...</h1>
      <p className="text-gray-600 text-lg">You are being logged out. See you again soon!</p>
    </div>
  );
};

export default Logout;
