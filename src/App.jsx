import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Toaster } from "react-hot-toast";

import { UserProvider as UserContext } from "./contexts/UserContext";

import { Main } from "./components/Main";
import { Login } from "./features/auth/Login";
import { SignUp } from "./features/auth/Signup";
import { Home } from "./features/home/Home";
import { ChatSection } from "./features/home/ChatSection";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            backgroundColor: "#334155",
            color: "#e2e8f0",
          },
        }}
      />
      <Main>
        <UserContext>
          <Routes>
            <Route index element={<Navigate to="/login" />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/chats" element={<Home />} />
            <Route path="chats/:id" element={<ChatSection />} />
          </Routes>
        </UserContext>
      </Main>
    </BrowserRouter>
  );
}
