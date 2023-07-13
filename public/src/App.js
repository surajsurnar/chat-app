import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Header from "./header/Header"
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { IoMdAdd } from "react-icons/io";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Hearder" element={<Header />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
