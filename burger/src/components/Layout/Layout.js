import React from "react";

import Aux from "../hoc/Aux";
import ToolBar from "../Navigation/ToolBar/ToolBar";
import classes from "./Layout.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = (props) => (
   <Aux>   
       <ToolBar/>
       <SideDrawer/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux> 
);


export default layout;