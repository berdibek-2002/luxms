const AdminLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-screen bg-gray-300">
      <main className="md:px-20 py-16  h-full">
        {children}
      </main>
    </div>
  )
}

export default AdminLayout