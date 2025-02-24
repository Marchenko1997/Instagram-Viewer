import { createContext, useState, useContext } from "react";

const UsernameContext = createContext();

export const UsernameProvider = ({ children }) => {
  const [username, setUsername] = useState(""); // ❌ Убедись, что username не пустой

  console.log("🌍 Текущий username в Context:", username); // ✅ Логируем username

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
};

export const useUsername = () => useContext(UsernameContext);
