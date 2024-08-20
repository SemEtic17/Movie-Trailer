import {
  Navbar,
  Select,
  DarkThemeToggle,
  TextInput,
  NavbarCollapse,
  NavbarToggle,
  NavbarLink,
} from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";
import {
  slideIn,
  slideDownNav,
  slideInBrandName,
  slideInForm,
  textVariant,
} from "./utils/motion";
import d from "../assets/dark.svg";

export default function Navbarr({ submit, change, sidebardata }) {
  return (
    <motion.div
      className="flex flex-wrap gap-4 p-1 md:w-[1350px]"
      variants={slideDownNav}
      initial="hidden"
      animate="show"
    >
      <Navbar
        className="bg-[#C2C4D2] fixed top-3 w-[96%] shadow-md z-50 gap-9"
        fluid
        rounded
      >
        <Navbar.Brand>
          <img src={d} className="mr-3 h-6 sm:h-9 rounded" alt="MT Logo" />
          <motion.span
            className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
            variants={slideInBrandName}
          >
            {window.innerWidth <= 768 ? "MT" : "Movie Trailer"}
          </motion.span>
        </Navbar.Brand>
        <motion.div variants={slideInForm} className="flex flex-row">
          <form onSubmit={submit} className="flex flex-row space-x-2">
            <Select
              onChange={change}
              value={sidebardata}
              id="category"
              className="rounded-none"
              size="sm"
            >
              <option value="uncategorized">uncategorized</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="animation">Animation</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="romance">Romance</option>
            </Select>
            <TextInput
              type="text"
              placeholder="Search..."
              rightIcon={AiOutlineSearch}
              id="searchTerm"
              onChange={change}
            />
          </form>
        </motion.div>
        <NavbarCollapse>
          <motion.div variants={textVariant()} className="flex flex-row gap-4">
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/about">About</NavbarLink>
          </motion.div>
        </NavbarCollapse>
        <DarkThemeToggle />
        <NavbarToggle />
      </Navbar>
    </motion.div>
  );
}
