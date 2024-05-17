import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import MyNavbar from './MyNavbar';
import MyFooter from "./MyFooter";

import Home from "./pages/Home";
import Members from "./pages/Members";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import Credits from "./pages/Credits";

export default class MyRouter extends React.Component
{
    render() {
        return(
            <BrowserRouter>

                <div className="min-vh-100 d-flex flex-column">

                    <MyNavbar/>

                    <main className="flex-grow-1">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/members" element={<Members/>}/>
                            <Route path="/blog" element={<Blog/>}/>
                            <Route path="/admin" element={<Admin/>}/>
                            <Route path="/credits" element={<Credits/>}/>
                        </Routes>
                    </main>

                    <MyFooter/>

                </div>

            </BrowserRouter>
        )
    }
}