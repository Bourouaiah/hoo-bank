import { navLinks } from '../constants'
import { logo } from '../assets'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

function Navbar({shown, setShown}) {
  return (
    <nav className='flex justify-between items-center sm:px-[50px] mx-auto py-5'>
      <div><img className='w-28' src={logo} /></div>
      <ul className='sm:flex list-none items-center gap-7 hidden'>
        {navLinks.map((item) => {
            return (
              <li className='text-white'><a href={`#${item.id}`}>{item.title}</a></li>
            )
        })}
      </ul>
      { !shown ? <HiOutlineMenuAlt3 onClick={() => setShown(!shown)} className='text-white w-7 h-7 sm:hidden cursor-pointer' /> : 
      <FaTimes onClick={() => setShown(!shown)} className='text-white w-7 h-7 sm:hidden cursor-pointer' />}
    </nav>
  )
}

export default Navbar
