import React from 'react'
import {Routes, Route} from 'react-router-dom'
<<<<<<< HEAD
import { WeekDays, Login } from '../pages/web'
=======
import { WeekDays, Login, Dashboard } from '../pages/web'
>>>>>>> e044aa6894972df8fb921da27c4aa7165bea12f9
import { ClientLayout } from "../layouts";
import { useAuth } from "../hooks";

export function WebRouter  (){
  const { user } = useAuth();
<<<<<<< HEAD
=======
/*
  const {
    user: { role },
  } = useAuth();
  const isAdmin = role === "admin";

  {isAdmin &&(
    <Route path="/dashboard" element={<Dashboard />} />
  )}
  */
>>>>>>> e044aa6894972df8fb921da27c4aa7165bea12f9
  
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>
         {!user ? (
        <Route path="/*" element={<Login />} />
      ) : (
        <>
          {["/", "/home"].map((path) => (
            <Route
              key={path}
              path={path}
              element={loadLayout(ClientLayout, WeekDays)}
            />
          ))}
<<<<<<< HEAD
          
        </>
      )}
=======
          <Route path="/dashboard" element={loadLayout(ClientLayout, Dashboard)} />
          
        </>
      )}
    
>>>>>>> e044aa6894972df8fb921da27c4aa7165bea12f9
    </Routes>
  )
}
