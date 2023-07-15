import { useState } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Menu, MenuItem, styled } from "@mui/material";
import { NavLink as NLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Squash as Hamburger, Squash } from "hamburger-react";
const NavLink = styled(NLink)`
  text-decoration: none;
  color: #fff;
  margin-left: 10px;
  &:hover {
    color: orange;
  }
`;
const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Box sx={{ flexGrow: 2 }}>
        {/* company name logo  */}

        <AppBar className="nav" position="fixed">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ p: 2 }}>
                <img
                  style={{
                    width: "60px",
                    height: "50px",
                    // position: "absolute",
                  }}
                  src="/image/logob.png"
                />
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  py: 2,
                  px: 10,
                  paddingRight: "20px",
                  fontWeight: 1000,
                  // color: "Highlight",
                  color: "#0A6EBD",

                  // textShadow: "2px 2px 5px rgba(0, 0, 0.5, 1)",
                  display: { xs: "none", md: "flex" },
                }}
              >
                Advance CNC Technologies
              </Typography>
            </Grid>
            {!show ? (
              <IconButton
                size="large"
                color="primary"
                aria-label="menu"
                onClick={handleShow}
              >
                <Squash />
              </IconButton>
            ) : (
              <IconButton
                size="large"
                color="primary"
                aria-label="menu"
                onClick={handleClose}
              >
                <Squash />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        {/* slide bar  menu  */}
        <Offcanvas show={show} onClick={handleClose}>
          <Offcanvas.Body className="menubg" closeButton>
            <Typography variant="h4" sx={{ py: 2, fontWeight: 600 }}>
              <NavLink to="/">Home</NavLink>
            </Typography>
            <Typography variant="h4" sx={{ py: 2, fontWeight: 600 }}>
              <NavLink to="/about">About</NavLink>
            </Typography>
            <Typography variant="h4" sx={{ py: 2, fontWeight: 600 }}>
              <NavLink to="/product">Products</NavLink>
            </Typography>
            <Typography variant="h4" sx={{ py: 2, fontWeight: 600 }}>
              <NavLink to="/facility"> Facilities</NavLink>
            </Typography>
            <Typography variant="h4" sx={{ py: 2, fontWeight: 600 }}>
              <NavLink to="/contact"> Contact</NavLink>
            </Typography>
          </Offcanvas.Body>
        </Offcanvas>
      </Box>
    </>
  );
};

export default Header;
