import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { ProfilePage } from "../pages/ProfilePage";


export const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/profile/:name" element={<ProfilePage/>}/>
            <Route path="/product/:id" element={<ProductPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}