import React from "react";
import { Logout } from "../../components/Web/Logout";
import { AdminMenu } from '../../components/Web/AdminMenu'
import {useAuth} from '../../hooks'
import './ClientLayaout.css'



export function ClientLayout(props) {
  const { children } = props;
  const {
    user: { role },
  } = useAuth();
  const isAdmin = role === "admin";
//<AdminMenu/>
  return (
    <>
    {isAdmin ?(
      
    <div className="row">
    
    <AdminMenu/>
    { children }
    </div>
    ):(
      <div>
      <Logout/>
      { children }
    </div>)}
    
    

    </>
  );
}