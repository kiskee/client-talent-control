import React, { useState } from "react";
import { Tab } from "semantic-ui-react";
//import { RegisterForm } from "../../../components/Admin/Auth";
import {RegisterForm } from '../../components/Admin/Auth'


export function Auth() {
  const [activeIndex, setActiveIndex] = useState(0);

  const openLogin = () => setActiveIndex(0);

  const panes = [
    {
      menuItem: "Entrar",
      render: () => (
        <Tab.Pane>
        <h2>Login</h2>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Nuevo usuario",
      render: () => (
        <Tab.Pane>
          
          <RegisterForm/>
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div>
      

      <Tab
        panes={panes}
        
        activeIndex={activeIndex}
        onTabChange={(_, data) => setActiveIndex(data.activeIndex)}
      />
    </div>
  );
}