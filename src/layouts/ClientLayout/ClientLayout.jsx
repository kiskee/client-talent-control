import React from "react";
import { Logout } from "../../components/Web/Logout";



export function ClientLayout(props) {
  const { children } = props;

  return (
    <div >
      <Logout/>
      { children }
    </div>
  );
}