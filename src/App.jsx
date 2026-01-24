import "./styles.css";

import { useEffect, useState } from "react";
import Connect from "./components/Connect"
export default function App(){
    return(
        <>
            <div className="container">
                <h1>Twitter DAPP</h1>
                <Connect />

            </div>
        </>
    )
}