import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import useInput from "@/hooks/use-input"
import { useRegisterMutation } from "@/store/api-slices/auth-api-slice"
import { useNavigate } from "react-router-dom"

export default function RegisterForm() {
  const [register] = useRegisterMutation()
  const [username, onUsernameChange] = useInput("")
  const [email, onEmailChange] = useInput("")
  const [password, onPasswordChange] = useInput("")
  const navigate = useNavigate()
  const { toast } = useToast()

  const onRegister = async (e) => {
    e.preventDefault()
    try {
      const userToken = await register({ username, email, password }).unwrap()
      toast({
        title: "Berhasil Register!",
        description: `Selamat, Anda berhasil Register Akun`,
      })
      console.log("regioster: ", userToken)
      navigate("/login")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Gagal Register!",
        description: `Tolong periksa inputan Anda!`,
      })
    }
  }
  return (
    <form onSubmit={onRegister} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Username</Label>
        <Input
          value={username}
          onChange={onUsernameChange}
          id="username"
          type="text"
          placeholder="m@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="m@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
        </div>
        <Input
          id="password"
          type="password"
          required
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  )
}
