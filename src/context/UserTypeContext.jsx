import React, { createContext, useState, useEffect } from "react";

const UserTypeContext = createContext();

export const UserTypeProvider = ({ children }) => {
  const [userType, setUserType] = useState(() => localStorage.getItem("usertype") || "");

  useEffect(() => {
    const handleStorageChange = () => {
      setUserType(localStorage.getItem("usertype") || "");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserTypeContext.Provider>
  );
};

export const useUserType = () => React.useContext(UserTypeContext);
