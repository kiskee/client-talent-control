import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth, Dash } from "../pages/admin";
import { useAuth } from "../hooks";
import { AdminLayout } from "../layouts";

export function AdminRouter() {
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
        <Route path="/admin/*" element={<Auth />} />
      ) : (
        <>
          {["/admin", "/admin/users"].map((path) => (
            <Route
              key={path}
              path={path}
              element={loadLayout(AdminLayout, Dash)}
            />
          ))}
          
        </>
      )}
    </Routes>
  );
}