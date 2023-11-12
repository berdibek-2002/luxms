import { SideBar } from "@/components/ui/side-bar"

const StudentLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-screen bg-gray-300">
      <main className="md:px-20 pt-10 h-full flex">
        <SideBar />
        {children}
      </main>
    </div>
  )
}

export default StudentLayout