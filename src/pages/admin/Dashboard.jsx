import React from 'react'
import { Tab } from "semantic-ui-react";

export function Dashboard  () {
    const panes = [
        {
          menuItem: "bashboard",
          render: () => (
            <Tab.Pane>
           <h1>DASHBOARD</h1>
            </Tab.Pane>
          ),
        }
        ]

  return (
    <div>
      

      <Tab
        panes={panes}
        
      />
    </div>
  )
}

