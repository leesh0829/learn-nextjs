'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import sytles from "../styles/navigation.module.css"
//import { useState } from "react";

export default function Navigation() {

    const path = usePathname();
    //const [count, setCount] = useState(0);
    //console.log(path);

    return ( 
        <nav className={sytles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ?  "*" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {path === "/" ? "" : "*"}
                </li>
                {/*<li><button onClick={() => setCount((c) => c + 1)}>{count}</button></li>*/}
            </ul>
        </nav> 
    );
}