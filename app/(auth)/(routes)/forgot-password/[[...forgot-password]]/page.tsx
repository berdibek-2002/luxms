import { ForgotPassword } from "@/components/sigin/forgot-password";
import { LoginHeader } from "@/components/ui/loginHeader";

export default function Page() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-1/2 h-5/6 bg-white rounded-2xl p-3">
        <LoginHeader />
        <ForgotPassword />
      </div>
    </div>
  )
}