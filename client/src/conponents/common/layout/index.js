import React from "react"
import "./style.css"

import {Header} from "../header";
import {Footer} from "../footer";

export const Layout = (props) => {
    return (
        <div className="layout">
        <Header></Header>
        <main className="content">
            {props.children}
        </main>
        <Footer></Footer>
        </div>
    )   
}