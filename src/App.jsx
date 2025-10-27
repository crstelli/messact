import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Main } from "./shared/components/Main";
import { Login } from "./features/auth/Login";
import { SignUp } from "./features/auth/Signup";
import { Home } from "./features/home/Home";
import { ChatSection } from "./features/home/ChatSection";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
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
          <Routes>
            <Route index element={<Navigate to="/login" />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/chats" element={<Home />} />
            <Route path="/chats/:id" element={<ChatSection />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
