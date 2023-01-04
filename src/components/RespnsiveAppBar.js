import { NavLink } from "react-router-dom"


const ResponsiveAppBar = () => {
  return (
    <nav className="flex justify-between px-8 py-8 bg-purple-900 text-purple-300">
      <ul className="flex">
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">
          <NavLink to="/">Logo</NavLink> </li>
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">
          <NavLink to="/aboutus">About Us </NavLink></li>
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">
          <NavLink to="explore">Explore </NavLink> </li>
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">
          <NavLink to="create">Create </NavLink></li>
      </ul>
      <ul className="flex">
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">Search</li>
        <li className="px-4 py-2 border-2 border-transparent hover:bg-purple-500 hover:text-purple-200 hover:border-purple-100 hover:rounded-lg">Profile</li>
      </ul>
    </nav>

  )
}
export default ResponsiveAppBar;