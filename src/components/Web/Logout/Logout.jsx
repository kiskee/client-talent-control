import React, { useState, useEffect } from "react";
import { Button, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { Auth } from "../../../api";
import { User } from "../../../api";

const authController = new Auth();
const userController = new User();

export function Logout() {
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
    <Button icon basic color="red" onClick={onLogout}>
      <Icon name="power off" /> {user.email}
    </Button>
  );
}
