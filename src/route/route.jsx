import {
  GuestProvider,
  ProtectedProvider,
} from "@/components/provider/auth-provider"
import HomePage from "@/pages/home-page"
import LoginPage from "@/pages/login-page"
import NotFoundGuestPage from "@/pages/not-found-page"
import RegisterPage from "@/pages/register-page"
import { Route, Routes } from "react-router-dom"

export default function AppRoute() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundGuestPage />} />
      <Route element={<GuestProvider />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectedProvider />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
