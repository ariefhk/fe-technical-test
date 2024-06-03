import RegisterForm from "@/components/register/register-form"
import AuthLayout from "@/layouts/auth-layout"
import { Link } from "react-router-dom"

export default function RegisterPage() {
  return (
    <AuthLayout>
      <div className="hidden bg-muted lg:block">
        <div className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-balance text-muted-foreground ">
              Enter your data below to register to your account
            </p>
          </div>
          <RegisterForm />
          <div className="mt-4 text-center text-sm">
            Have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
