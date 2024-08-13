import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="my-5 py-6">
        <div className="m-8 flex items-center justify-between gap-4 text-4xl">
            <a href="https://www.linkedin.com/in/ashish-sharma-b22b17238/"><FaLinkedin/></a>
            <a href="https://github.com/AshishSharma0007"><FaGithub/></a>
            <a href="https://leetcode.com/u/CSDSA_21B1541032/"><SiLeetcode/></a>
            <a href="https://www.instagram.com/"><FaInstagram/></a>
        </div>
    </nav>
  )
}

export default Navbar
