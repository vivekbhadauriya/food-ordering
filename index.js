// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App"
import About from "./src/components/About";
import { createBrowserRouter, RouterProvider } from "react-router";
import ContactUs from "./src/components/ContactUs";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/aboutus", element: <About /> },
    { path:"/contactus", element:  <ContactUs /> },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={router} />)