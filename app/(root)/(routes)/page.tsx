import Link from "next/link"

const RootPage = () => {
  return (
    <div className='w-56 bg-white m-auto rounded-xl py-5 px-3'>
      <button className="w-full px-3 py-5 bg-blue-950 rounded-xl text-white"><Link href="/sign-in">Sign in</Link></button>
    </div>
  )
}

export default RootPage