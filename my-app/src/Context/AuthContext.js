import axios from "axios";
import React from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = React.useState({
    isAuth: false,
    token: null,
    username: null,
  });
  const handleLogin = async (payload) => {
    try {
      const res = await axios.post("https://naughty-pear-bream.cyclic.app/user/login", payload);
      if (res.data.token) {
        setAuth({
          isAuth: true,
          token: res.data.token,
          username: res.data.username,
        });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth({
        isAuth: true,
        token: token,
        username: localStorage.getItem("username"),
      });
    }
  }, []);
  const handleLogout = () => {
    setAuth({ isAuth: false, token: null, username: null });
    localStorage.removeItem("token");
    localStorage.removeItem("usename");
  };

  return (
    <AuthContext.Provider value={{ auth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}