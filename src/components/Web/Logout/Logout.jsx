import React, { useState } from "react";
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

  const [user, setuser] = useState(second)

  const userName = async () => {
    try {
      let accessToken = authController.getAccessToken()

      console.log(accessToken);

      const response = await userController.getMe(accessToken);
      delete response.password;

      setUser(response);
      setToken(accessToken);
    } catch (error) {
      console.error(error);
    }
  };

  userName()

  const onLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Button icon basic color="red" onClick={onLogout}>
      <Icon name="power off" /> Logout
    </Button>
  );
}