// import {
//   createStyles,
//   Header,
//   Menu,
//   Group,
//   Center,
//   Burger,
//   Container,
// } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import { IconChevronDown } from "@tabler/icons";
// import Link from "next/link";

// const useStyles = createStyles((theme) => ({
//   header: {
//     backgroundColor: theme.fn.variant({
//       variant: "filled",
//       color: theme.primaryColor,
//     }).background,
//     borderBottom: 0,
//   },

//   inner: {
//     height: 56,
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },

//   links: {
//     [theme.fn.smallerThan("sm")]: {
//       display: "none",
//     },
//   },

//   burger: {
//     [theme.fn.largerThan("sm")]: {
//       display: "none",
//     },
//   },

//   link: {
//     display: "block",
//     lineHeight: 1,
//     padding: "8px 12px",
//     borderRadius: theme.radius.sm,
//     textDecoration: "none",
//     color: theme.white,
//     fontSize: theme.fontSizes.sm,
//     fontWeight: 500,

//     "&:hover": {
//       backgroundColor: theme.fn.lighten(
//         theme.fn.variant({ variant: "filled", color: theme.primaryColor })
//           .background,
//         0.1
//       ),
//     },
//   },

//   linkLabel: {
//     marginRight: 5,
//   },
// }));

// interface HeaderSearchProps {
//   links: {
//     link: string;
//     label: string;
//     links: { link: string; label: string }[];
//   }[];
// }
// const links = [
//   { link: "/", label: "Home" },
//   { link: "string", label: "About" },
//   { link: "/faqs", label: "FAQs" },
//   { link: "/contact", label: "Contact Us" },
// ];
// export function Navbar() {
//   const [opened, { toggle }] = useDisclosure(false);
//   const { classes } = useStyles();

//   const items = links.map((link) => {
//     const menuItems = link.links?.map((item) => (
//       <Menu.Item key={item.link}>{item.label}</Menu.Item>
//     ));

//     if (menuItems) {
//       return (
//         <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
//           <Menu.Target>
//             <Link
//               href={link.link}
//               className={classes.link}
//               // onClick={(event) => event.preventDefault()}
//             >
//               <Center>
//                 <span className={classes.linkLabel}>{link.label}</span>
//                 <IconChevronDown size={12} stroke={1.5} />
//               </Center>
//             </Link>
//           </Menu.Target>
//           <Menu.Dropdown>{menuItems}</Menu.Dropdown>
//         </Menu>
//       );
//     }

//     return (
//       <Link key={link.label} href={link.link} passHref>
//         <a className={classes.link} >
//           {link.label}
//         </a>
//       </Link>
//     );
//   });

//   return (
//     <Header height={56} className={classes.header} mb={120}>
//       <Container>
//         <div className={classes.inner}>
//           <h2>Gupta Classes</h2>
//           <Group spacing={5} className={classes.links}>
//             {items}
//           </Group>
//           <Burger
//             opened={opened}
//             onClick={toggle}
//             className={classes.burger}
//             size="sm"
//             color="#fff"
//           />
//         </div>
//       </Container>
//     </Header>
//   );
// }


// const MobileMenu = () => {
//   return(
//     <div>

//     </div>
//   )
// }

import { useEffect, useState } from "react";
import Link from "next/link";
export function Navbar({ hidemenu = false }) {
  const [color, setColor] = useState("fff");
  const [navClass, setNavClass] = useState("navbar");

  const addClassOnScroll = () => {
    if (window.scrollY > 20) {
      setNavClass("navbar bg-nav");
      setColor("#000");
    } else {
      setNavClass("navbar");
      setColor("#000");
    }
  };
  useEffect(() => {
    window.onscroll = () => {
      // addClassOnScroll();
    };
  }, []);

  const [hamburgerStyles, setHamburgerStyles] = useState(
    "hamburger-menu pointer"
  );
  const [menuStyles, setMenuStyles] = useState("menu hide-menu");

  const hamburgerClickHandler = () => {
    if (hamburgerStyles.includes("click")) {
      setHamburgerStyles("hamburger-menu pointer");
      setMenuStyles("menu hide-menu");
    } else {
      setHamburgerStyles("hamburger-menu pointer click");
      setMenuStyles("menu show-menu");
    }
  };

  const menuHandler = () => {
    setHamburgerStyles("hamburger-menu pointer");
    setMenuStyles("menu hide-menu");
  };

  return (
    <div className={navClass}>
      <Link href="/">
       <h2 >Gupta Classes</h2>
      
      </Link>

      <div
        className={menuStyles}
        style={{ color }}
        onClick={menuHandler}
        id="menu"
      >
        {!hidemenu && (
          <Link href="/">
            <p className="menu__item menu__item--plain">Home</p>
          </Link>
        )}
        <Link href="/faqs">
          <p className="menu__item menu__item--plain">FAQs</p>
        </Link>
        <Link href="/contact">
          <p className="menu__item menu__item--plain">Contact</p>
        </Link>
        <Link href="/register">
          <div className="bottom-stick-button">
            {/* <PrimaryButton
              text={isMobile ? "Register Your Interest" : "Register Now"}
              onClick={() => window.fbq("track", "Register_init")}
            /> */}
          </div>
        </Link>
      </div>
      <div
        className={hamburgerStyles}
        onClick={hamburgerClickHandler}
        id="menu-open-button"
        role="button"
      >
        <span
          style={{
            backgroundColor: menuStyles === "menu hide-menu" ? color : "#fff",
          }}
          className="hamburger-menu-line"
        ></span>
        <span
          style={{
            backgroundColor: menuStyles === "menu hide-menu" ? color : "#fff",
          }}
          className="hamburger-menu-line"
        ></span>
        <span
          style={{
            backgroundColor: menuStyles === "menu hide-menu" ? color : "#fff",
          }}
          className="hamburger-menu-line"
        ></span>
      </div>
    </div>
  );
}

export default Navbar;
