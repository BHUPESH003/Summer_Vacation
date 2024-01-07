import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Social from "./Social"
import ScrollToTop from "./ScrollToTop"

export default function Layout() {
    return (
        <div className="site-wrapper">
        <ScrollToTop/>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Social/>
            <Footer />
        </div>
    )
}