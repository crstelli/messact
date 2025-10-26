import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { Main } from "./components/Main";

import { DesktopHome } from "./features/home/DesktopHome";
import { MobileHome } from "./features/home/MobileHome";

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

          <Route path="/chats" element={<MobileHome />} />
          <Route path="/chats/:id" element={<DesktopHome />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}
