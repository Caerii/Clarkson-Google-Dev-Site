import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import MyNavbar from './MyNavbar';

import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import Blog from "./pages/Blog";

export default class MyRouter extends React.Component
{
    render() {
        return(
            <BrowserRouter>
                <MyNavbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/members" element={<Members/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}