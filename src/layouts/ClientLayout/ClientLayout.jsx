import React from "react";
import { Logout } from "../../components/Web/Logout";
import { AdminMenu } from '../../components/Web/AdminMenu'



export function ClientLayout(props) {
  const { children } = props;

  return (
    <div >
      <Logout/>
      <AdminMenu/>
      { children }
    </div>
  );
}