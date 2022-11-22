import React from "react";
import { Logout } from "../../components/Web/Logout";
<<<<<<< HEAD
=======
import { AdminMenu } from '../../components/Web/AdminMenu'
>>>>>>> e044aa6894972df8fb921da27c4aa7165bea12f9



export function ClientLayout(props) {
  const { children } = props;

  return (
    <div >
      <Logout/>
<<<<<<< HEAD
=======
      <AdminMenu/>
>>>>>>> e044aa6894972df8fb921da27c4aa7165bea12f9
      { children }
    </div>
  );
}