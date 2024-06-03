import { getAuthToken } from "@/store/slices/auth-slice"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const GuestProvider = () => {
  const token = useSelector(getAuthToken)

  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, render the child routes
    return <Outlet />
  }
  // If authenticated, redirect to the home page
  return <Navigate to="/" replace />
}
GuestProvider.displayName = "GuestProvider"

const ProtectedProvider = () => {
  const token = useSelector(getAuthToken)

  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" replace />
  }

  //If authenticated, render the child routes
  return <Outlet />
}
ProtectedProvider.displayName = "ProtectedProvider"

export { GuestProvider, ProtectedProvider }
