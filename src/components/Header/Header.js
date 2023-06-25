import { useEffect, useState } from "react";
import "./Header.scss";
import axios from "axios";

const Header = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [username, setUsername] = useState("");
  const [mode, setMode] = useState("");
  const [dayDiff, setDayDiff] = useState(0);

  // Today
  const Today = new Date();

  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/user/1"
      );
      const { user_name, mode, updated_at } = response.data;
      setUserInfo(response.data);
      setUsername(user_name);
      setMode(mode);
      const dayDifference = Math.ceil((Today.getTime() - new Date(updated_at).getTime()) /
      (1000 * 60 * 60 * 24));
      setDayDiff(dayDifference);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <header className="header">
      <h1 className="header__title">WELCOME BACK, {username}</h1>
      <h2 className="header__subtitle">You're {dayDiff} days into {mode}.</h2>
    </header>
  );
};

export default Header;
