import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { WeekDays, Login } from '../pages/web'
import { ClientLayout } from "../layouts";
import { useAuth } from "../hooks";

export function WebRouter  (){
  const { user } = useAuth();
  
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
          
        </>
      )}
    </Routes>
  )
}
