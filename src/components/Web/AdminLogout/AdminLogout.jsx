import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { Auth, User } from "../../../api";

const authController = new Auth();
const userController = new User();

export function AdminLogout ()  {
    const { logout } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  useEffect(() => {
    const userName = async () => {
      try {
        let accessToken = authController.getAccessToken();

        const response = await userController.getMe(accessToken);
        delete response.password;

        setUser(response);
      } catch (error) {
        console.error(error);
      }
    };

    userName()
  }, []);

  const onLogout = () => {
    logout();
    navigate("/");
  };



  return (
    <div className="admin__logout">
          <button onClick={onLogout} >Logout</button>
        </div>
  )
}
