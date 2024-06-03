import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import useInput from "@/hooks/use-input"
import { useLoginMutation } from "@/store/api-slices/auth-api-slice"
import { setToken } from "@/store/slices/auth-slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function LoginForm() {
  const [login] = useLoginMutation()
  const [username, onUsernameChange] = useInput("")
  const [password, onPasswordChange] = useInput("")
  const navigate = useNavigate()
  const { toast } = useToast()
  const dispatch = useDispatch()

  const onLogin = async (e) => {
    e.preventDefault()
    try {
      const userToken = await login({ username, password }).unwrap()
      dispatch(setToken(userToken))
      toast({
        title: "Berhasil Login!",
        description: `Selamat, Anda berhasil login`,
      })
      navigate("/")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Gagal Login!",
        description: `Tolong periksa akun Anda`,
      })
    }
  }
  return (
    <form onSubmit={onLogin} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Username</Label>
        <Input
          value={username}
          onChange={onUsernameChange}
          id="email"
          type="text"
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
        Login
      </Button>
    </form>
  )
}
