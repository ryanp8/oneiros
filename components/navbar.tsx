import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../public/Fable Mason Logo Compressed.png";
import Link from "next/link";

const pages = ["Home", "Featured", "About Us", "All Releases"];
const redirects = ["/", "/#featured", "/#about", "/releases"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const router = useRouter();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ margin: 0, padding: 1, background: "#000000", width: "100vw" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // background: 'black'
          }}
        >
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Link href="/">
              <Image src={logo} alt="logo" width={70} height={70}></Image>
            </Link>
          </Box>
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Oneiros
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem
                  key={page}
                  // onClick={() => {
                  //   handleCloseNavMenu();
                  //   router.push(`/${redirects[i]}`);
                  // }}
                >
                  <Link key={i} href={redirects[i]} scroll={redirects[i] == '/'}>
                    <Typography
                      textAlign="center"
                      sx={{
                        fontWeight: 300,
                        color: "black",
                        fontFamily: "Merriweather",
                      }}
                    >
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Link href="/">
              <Image src={logo} alt="logo" width={50} height={50}></Image>
            </Link>
          </Box>

          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            Oneiros
          </Typography> */}
          
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page, i) => (
              <Link key={i} href={redirects[i]} scroll={redirects[i] == '/'}>
                <Typography
                  textAlign="center"
                  sx={{ fontWeight: 300 }}
                  color="white"
                  padding={2}
                  fontFamily="Merriweather"
                >
                  {page}
                </Typography>
              </Link>
              // <Button
              //   key={page}
              //   onClick={() => {
              //     handleCloseNavMenu();
              //     router.push(`/${redirects[i]}`);
              //   }}
              //   sx={{
              //     my: 2,
              //     color: "black",
              //     display: "block",
              //     fontWeight: 400,
              //   }}
              // >
              //   {page}
              // </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
