const ResponsiveAppBar = () => {
  return (
    <header className="flex justify-between px-8 py-8 bg-purple-900 text-purple-300">
      <ul className="flex">
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">Logo</li>
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">About Us</li>
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">Explore</li>
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">Create</li>
      </ul>
      <ul className="flex">
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">Search</li>
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">Profile</li>
      </ul>
    </header>

  )
}
export default ResponsiveAppBar;