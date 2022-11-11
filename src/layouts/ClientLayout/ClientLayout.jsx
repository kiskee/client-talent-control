import React from "react";

//import { TopBar, Footer } from "../../components/Web";


export function ClientLayout(props) {
  const { children } = props;

  return (
    <div >
      <h2>CLIENT LAYOUT</h2>
      { children }
    </div>
  );
}