import React from "react";
import { useAuth } from "../../../hooks";
import { Link, useLocation } from "react-router-dom";
import { Button } from "semantic-ui-react";
import './AdminMenu.css'

export function AdminMenu() {
    const { pathname } = useLocation();
  const {
    user: { role },
  } = useAuth();
  const isAdmin = role === "admin";
 
  const isCurrentPath = (path) => {
    if (path === pathname) return true;
    return false;
  };

  return (
    <div className="adminButton">
      {isAdmin && (
       <Button
       color='violet'
       as={Link}
       to="/dashboard"
       active={isCurrentPath("/dashboard")}
     >Admin Dashboard</Button>
      )}
    </div>
  );
}
