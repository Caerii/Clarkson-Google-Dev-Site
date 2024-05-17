import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Blog from "./Blog";

import MyNavbar from './MyNavbar';

import { Home, About, Members } from "./Pages"

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