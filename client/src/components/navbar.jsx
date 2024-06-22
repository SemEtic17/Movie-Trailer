import { Navbar, Select, DarkThemeToggle, TextInput, NavbarCollapse, NavbarToggle, NavbarLink, } from "flowbite-react";
import { AiOutlineSearch } from 'react-icons/ai';
import d from '../assets/dark.svg';
export default function Navbarr({submit, change, sidebardata}) {
  return (
    <div>
    <Navbar className="bg-[#C2C4D2] fixed top-3 w-[96%] shadow-md z-50" fluid rounded>
      <Navbar.Brand>
        <img src={d} className="mr-3 h-6 sm:h-9 rounded" alt="MT Logo"  />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{window.innerWidth <= 768 ? "MT" : "Movie Trailer"}</span>
      </Navbar.Brand>
<div className='flex flex-row'>
<form onSubmit={submit} className="flex flex-row space-x-2">
      <Select onChange={change} value={sidebardata} id='category' className='rounded-none' size="sm">
      <option value='action'>Action</option>
      <option value='adventure'>Adventure</option>
      <option value='animation'>Animation</option>
      <option value='comedy'>Comedy</option>
      <option value='crime'>Crime</option>
      <option value='fantasy'>Fantasy</option>
      <option value='romance'>Romance</option>
      <option value='uncategorized'>uncategorized</option>
    </Select>
    <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch} id='searchTerm' onChange={change} />
</form>
</div>
<NavbarCollapse>
        <NavbarLink href="">Home</NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
      </NavbarCollapse>
<DarkThemeToggle />
<NavbarToggle/>
    </Navbar>
    </div>
  )
}
