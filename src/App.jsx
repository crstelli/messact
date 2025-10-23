import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { Main } from "./shared/ui/Main";

import { Login } from "./features/login/pages/Login";
import { SignUp } from "./features/signup/pages/Signup";
import { Chats } from "./features/chats/pages/Chats";
import { AuthProvider } from "./contexts/auth/AuthProvider";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Main>
          <Routes>
            <Route index element={<Navigate to="/login" />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chats/:id" element={<Chats />} />
          </Routes>
        </Main>
      </AuthProvider>
    </BrowserRouter>
  );
}
