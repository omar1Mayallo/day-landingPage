import React, {useEffect, useState} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import {HiOutlineMenu} from "react-icons/hi";
import {MdClose} from "react-icons/md";
import {HeaderStyled} from "./header.styled";
import {Link} from "react-scroll";
const navlinks = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Pricing",
  "Team",
  "Contact",
];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBarScrolled, setNavBarScrolled] = useState(false);
  const handleResize = () => {
    if (window.innerWidth >= 992) {
      setIsOpen(false);
    }
  };
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavBarScrolled(true);
    } else {
      setNavBarScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    //Removing the event listener will make the component more robust, make the app quicker, and reduce memory leaks.
    // -If the computations were more expensive, that'd be wasted CPU time on a component that doesn't exist in the DOM; better to remove the need for the calculations entirely
    // -If the added listener happens to fire extremely rapidly (like scroll), removing the listener could help performance, especially if there are multiple components like these
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });
  return (
    <HeaderStyled className={navBarScrolled ? "active" : ""}>
      <Navbar>
        <Container>
          <Link to="home" smooth>
            <Navbar.Brand>DAY</Navbar.Brand>
          </Link>
          <Nav className={`ms-auto${isOpen ? " nav-links-container" : ""}`}>
            <MdClose
              className="d-block d-lg-none close-icon"
              color="red"
              onClick={() => setIsOpen(!isOpen)}
            />
            {navlinks.map((link, idx) => (
              <Link
                key={idx}
                to={`${link.toLowerCase()}`}
                smooth
                offset={-40}
                duration={250}
                spy
                activeClass="active"
                onClick={() => window.innerWidth <= 992 && setIsOpen(!isOpen)}
              >
                {link}
              </Link>
            ))}
          </Nav>
          <Nav className="ms-auto d-flex d-lg-none">
            <HiOutlineMenu
              className="menu-icon"
              onClick={() => setIsOpen(!isOpen)}
            />
          </Nav>
        </Container>
      </Navbar>
    </HeaderStyled>
  );
};
export default Header;
