import React, { useState } from "react";
import { Tab } from "semantic-ui-react";
import {RegisterForm, LoginForm } from '../../../components/Admin/Auth'
import "./Auth.css";


export function Auth() {
  const [activeIndex, setActiveIndex] = useState(0);

  const openLogin = () => setActiveIndex(0);

  const panes = [
    {
      menuItem: "Entrar",
      render: () => (
        <Tab.Pane>
        <LoginForm/>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Nuevo usuario",
      render: () => (
        <Tab.Pane>
          
          <RegisterForm openLogin={openLogin}/>
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div className="auth">
      

      <Tab
        panes={panes}
        className="auth__forms"
        activeIndex={activeIndex}
        onTabChange={(_, data) => setActiveIndex(data.activeIndex)}
      />
    </div>
  );
}