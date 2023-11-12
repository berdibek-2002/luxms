import { SignIn } from "@/components/sigin/sign-in";
import { LoginHeader } from "@/components/ui/loginHeader";

export default function Page() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-1/2 h-5/6 bg-white rounded-2xl p-3">
        <LoginHeader />
        <SignIn />
      </div>
    </div>
  )
}