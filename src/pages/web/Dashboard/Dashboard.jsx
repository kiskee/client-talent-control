import React from "react";
import { Dashboard as Dash } from '../../../components/Admin/Dashboard'
import { useAuth } from '../../../hooks'
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";


export function Dashboard  () {

  const {
    user: { role },
  } = useAuth();
  const isAdmin = role === "admin";

  console.log(isAdmin)

  return (
    <>
      {isAdmin ? (
        <Dash/>
      ):(
        <>
      <h1>you dont have permits to be here</h1>
      <Button
       color='violet'
       as={Link}
       to="/"
     >Back</Button>
     </>
     )}
      
      
    
  </>
  )
}
