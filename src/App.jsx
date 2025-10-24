import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { Main } from "./shared/ui/Main";
import { Chats } from "./features/chats/pages/Chats";

import { Login } from "./features/auth/login/pages/Login";
import { SignUp } from "./features/auth/signup/pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route index element={<Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chats/:id" element={<Chats />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}
