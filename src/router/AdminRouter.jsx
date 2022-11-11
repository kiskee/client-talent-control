import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth, Dashboard } from "../pages/admin";
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
        <Route path='/admin/*' element={loadLayout(AdminLayout,Auth)}/>
    </Routes>
  );
}