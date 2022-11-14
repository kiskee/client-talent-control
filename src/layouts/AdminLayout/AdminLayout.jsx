import React from "react";
//import { AdminMenu, Logout } from "../../components/Admin/AdminLayout";

export function AdminLayout(props) {
  const { children } = props;

  return (
    <div >
        
        {children}
    </div>
  );
}