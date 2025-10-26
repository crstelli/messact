import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { Main } from "./components/Main";
import { Home } from "./features/home/Home";
import { ChatSection } from "./features/home/ChatSection";

import { Login } from "./features/auth/Login";
import { SignUp } from "./features/auth/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route index element={<Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/chats" element={<Home />} />
          <Route path="chats/:id" element={<ChatSection />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}
