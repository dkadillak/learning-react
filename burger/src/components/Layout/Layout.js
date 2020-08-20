import React from "react";

import Aux from "../hoc/Aux";
import ToolBar from "../Navigation/ToolBar/ToolBar";
import classes from "./Layout.css";

const layout = (props) => (
   <Aux>   
       <ToolBar/>
        <div> SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux> 
);


export default layout;