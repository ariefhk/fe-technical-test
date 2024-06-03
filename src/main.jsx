import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import ReduxProvider from "./components/provider/redux-provider.jsx"
import { Toaster } from "./components/ui/toaster.jsx"
import AppRoute from "./route/route.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider>
        <AppRoute />
      </ReduxProvider>
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>,
)
