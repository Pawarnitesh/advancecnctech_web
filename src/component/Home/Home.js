import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Modal,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { NavLink as NLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { info, products } from "./data";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import VerifiedIcon from "@mui/icons-material/Verified";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slide from "./Slide";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
// port
import DriveEtaRoundedIcon from "@mui/icons-material/DriveEtaRounded";
import FactoryIcon from "@mui/icons-material/Factory";
import OilBarrelIcon from "@mui/icons-material/OilBarrel";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

const NavLink = styled(NLink)`
  text-decoration: none;
  color: #fff;
  margin-left: 10px;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  px: 4,
  backgroundColor: "#fff",
};

const customTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      contrastText: "#fff",
    },
  },
});
// card hover style
const StyledCard = styled(Card)`
  ${({ theme }) => `
    cursor: pointer;
    background-color: "#fff";
    boxShadow: "0 2px 3px 1px #0008";
    transition: ${theme.transitions.create(["background-color", "transform"], {
      duration: theme.transitions.duration.standard,
    })};
    &:hover {
      background-color: "red";
      transform: scale(1.1);
     box-shadow: "0 2px 3px 1px #e0e0e0";
    }
    `}
`;

//
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
//
const Home = () => {
  const [product, setProduct] = useState(products);
  const [open, setOpen] = React.useState(false);
  const [cardView, setCardView] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClickOpen = (data) => {
    setCardView([data]);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Container>
        <Box sx={{ mt: 5 }}>
          {/* slogen and carosual  */}
          <Grid container sx={{ px: 5 }}>
            {/* slogen  */}
            <Grid item md={6} xs={12} sm={12} sx={{ mt: 5 }}>
              <Typography
                variant="h3"
                sx={{
                  padding: "40px",
                  color: "#00509e ",
                  fontWeight: 1000,
                }}
              >
                <strong style={{ color: "#fff" }}>
                  {" "}
                  'Quality
                  <br></br> meets{" "}
                </strong>
                <br></br>
                <strong>Excellence</strong>'
              </Typography>
            </Grid>
            {/* carosual slide from slide component  */}

            <Grid
              item
              md={6}
              xs={12}
              sm={12}
              className="logo"
              sx={{
                p: 5,
                mt: 3,
                width: "100%",
                height: "50%",
                boxSizing: "border-box",
              }}
            >
              {/* carosual start  */}
              <Slide />
              {/* carosual end  */}
            </Grid>
          </Grid>
        </Box>

        {/* Advance CNC Technologies (ACT) */}
        <Grid sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Advance CNC Technologies (ACT)
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              py: 1,
              color: "#e0e0e0",
              fontWeight: 500,
            }}
          >
            We are an ISO 9001:2015 company engaged in the manufacturing of High
            Precision Components, Long Shafts, Crowfoot, Pulleys, Complex Parts,
            Customised Manipulators, Nut Runners, Special Purpose Machines and
            Tooling systems etc. We have our own designing set up, we develop
            conceptual and detailed designs that ensure a product functions,
            performs, and fits its purpose.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              py: 1,
              color: "#fff",
              fontWeight: 500,
            }}
          >
            We are committed to achieve ever increasing levels of customer
            satisfaction through continual improvements in the quality, cost of
            our products and services.
          </Typography>

          <Button
            variant="contained"
            sx={{
              "&:hover": {
                backgroundColor: "orange",
              },
            }}
          >
            <Link href="/about" sx={{ color: "#fff" }}>
              Read More About Us
              <IconButton
                sx={{
                  color: "#fff",
                }}
              >
                <ArrowRightAltIcon />
              </IconButton>
            </Link>
          </Button>
        </Grid>
        {/* Our Portfolio */}

        {/* portfolio card  */}

        <Box sx={{ position: "relative" }}>
          <Typography variant="h4" sx={{ color: "#fff", textAlign: "center" }}>
            Our Portfolio
          </Typography>
          <Typography sx={{ color: "#fff", textAlign: "center" }}>
            Our clientele is spread across industries including but not limited
            to Automobiles, Defence, Oil and Gas, Mining and Textile...
          </Typography>
          <Grid container spacing={2} sx={{ my: 4, px: 4 }}>
            <Grid item xs={6} sm={6} md={3} sx={{ p: 0 }}>
              <Grid sx={{ textAlign: "center" }}>
                <IconButton sx={{ p: 1 }}>
                  <DriveEtaRoundedIcon
                    sx={{
                      fontSize: "70px",
                      backgroundColor: "#00509e",
                      borderRadius: "100px",
                      p: 2,
                      color: "#fff",
                    }}
                  />
                </IconButton>
                <Typography variant="h6" sx={{ color: "#989ca7" }}>
                  Automobiles
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={6} md={3} sx={{ p: 0 }}>
              <Grid sx={{ textAlign: "center" }}>
                <IconButton sx={{ p: 1 }}>
                  <FactoryIcon
                    sx={{
                      fontSize: "70px",
                      backgroundColor: "#00509e",
                      borderRadius: "100px",
                      p: 2,
                      color: "#fff",
                    }}
                  />
                </IconButton>
                <Typography variant="h6" sx={{ color: "#989ca7" }}>
                  Manufacturing
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={6} md={3} sx={{ p: 0 }}>
              <Grid sx={{ textAlign: "center" }}>
                <IconButton sx={{ p: 1 }}>
                  <OilBarrelIcon
                    icon="fa-solid fa-oil-well"
                    sx={{
                      fontSize: "70px",
                      backgroundColor: "#00509e",
                      borderRadius: "100px",
                      p: 2,
                      color: "#fff",
                    }}
                  />
                </IconButton>
                <Typography variant="h6" sx={{ color: "#989ca7" }}>
                  Oil and Gas
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={6} md={3} sx={{ p: 0 }}>
              <Grid sx={{ textAlign: "center" }}>
                <IconButton sx={{ p: 1 }}>
                  <AirplanemodeActiveIcon
                    sx={{
                      fontSize: "70px",
                      backgroundColor: "#00509e",
                      borderRadius: "100px",
                      p: 2,
                      color: "#fff",
                    }}
                  />
                </IconButton>
                <Typography variant="h6" sx={{ color: "#989ca7" }}>
                  Defence
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* What makes us special...  */}
        <Grid container spacing={2} sx={{ py: 5 }}>
          {/* What makes us special... text  */}
          <Grid item md={6} xs={12} sm={6} sx={{ p: 0 }}>
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: 600,
              }}
            >
              What makes us special...
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: 500,
                py: 1,
              }}
            >
              We have our own designing set up and we develop conceptual and
              detailed designs that ensure a product functions, performs, and
              fits its purpose. We also work with marketers to develop the
              product concept and specifications to meet customer needs.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: 500,
                py: 1,
              }}
            >
              We have expertise to compass the development to its destination
              through providing innovative functional and technical support to
              the customer.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: 500,
                py: 1,
              }}
            >
              We are in the automation field with excellent manufacturing
              facilities to deliver high quality and precision. We have
              experience of 25+ years in the field of engineering & designing.
              We are serving our clients through first class quality, on time
              delivery, and cost-effective products.
            </Typography>
          </Grid>
          {/* What makes us special...image  */}
          <Grid item md={6} xs={12} sx={{}}>
            <img
              style={{ width: "100%", height: "60vh" }}
              src="/image/factory.jpg"
              alt="Factory "
            />
          </Grid>
        </Grid>
        {/* We are ISO 9001:2015 certified */}
        <Grid container spacing={2} sx={{ py: 5 }}>
          {/* We are ISO 9001:2015 certified image  */}
          <Grid item md={4} xs={12}>
            <img
              style={{ width: "100%", height: "80vh" }}
              src="/image/certificate.jpg"
              alt="Certification"
            />
          </Grid>

          {/* We are ISO 9001:2015 certified text  */}
          <Grid item md={8} xs={12} sm={6} className="certified">
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: 600,
              }}
            >
              We are ISO 9001:2015 certified
              <VerifiedIcon sx={{ mx: 1, fontSize: 30 }} />
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: 500,
                py: 1,
              }}
            >
              We are delighted to announce that we have obtained ISO 9001:2015
              certification.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: 500,
                py: 1,
              }}
            >
              Advance CNC Technologies underwent the validation process for
              certifying ISO 9001:2015, including: the implementation of the
              quality management framework, the analysis of the management
              system's documents, a pre-audit, the initials determination and
              clearance of non-compliance, all of which are aimed at determining
              corrective steps to eradicate non-compliance under the quality
              management standards.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: 500,
                py: 1,
              }}
            >
              It is an enormous accomplishment, which demonstrates that we
              appreciate the requirements of our customers while working with
              them to provide high quality solutions whilst also constantly
              updating and refining our working methods. Not only does this
              credential predict our consumers' needs, but it also shows our
              commitment to provide all of our current and potential clients
              with high quality goods and services.
            </Typography>
          </Grid>
        </Grid>
        {/* Some of our all time best-selling products...  */}
        <Box>
          {/* Some of our all time best-selling products... title  */}
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Some of our all time best-selling products...
          </Typography>

          {/* Some of our all time best-selling products...  data get from data componenet */}

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {Array.isArray(product) &&
              product.map((data, i) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={data.id + i}
                  sx={{ p: 0 }}
                >
                  <StyledCard
                    sx={{
                      width: "100%",
                      height: "100%",
                      boxSizing: "border-box",
                      boxShadow: "0 2px 3px 2px #465166",
                      "&:hover": {
                        boxShadow: "0 2px 3px 2px #465166",
                      },
                    }}
                  >
                    <Paper elevation={2}>
                      <img
                        style={{
                          width: "100%",
                          height: 250,
                          boxSizing: "border-box",
                        }}
                        src={data?.image}
                        alt={data?.alt}
                      />
                      <Grid
                        sx={{
                          backgroundColor: "#33373e",
                          height: "90%",
                        }}
                      >
                        <Grid sx={{ p: 2 }}>
                          <Typography
                            variant="h5"
                            sx={{ p: 1, fontWeight: 500, color: "#3498DB " }}
                          >
                            {data?.title}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{ p: 1, color: "#fff" }}
                          >
                            {data?.discription}
                          </Typography>
                        </Grid>
                        <Grid sx={{ p: 2 }}>
                          <Link href="/product">
                            <Button
                              variant="contained"
                              sx={{ backgroundColor: "#45B39D " }}
                              onClick={handleOpen}
                            >
                              View All Products <KeyboardArrowRightIcon />
                            </Button>
                          </Link>
                        </Grid>
                      </Grid>
                    </Paper>
                  </StyledCard>
                </Grid>
              ))}
          </Grid>
        </Box>

        {/* Accordion start   */}
        <Grid>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 600,
              textAlign: "center",
              marginTop: "15px",
            }}
          >
            Who We Are...
          </Typography>
        </Grid>
        <Grid sx={{ my: 5 }}>
          <div>
            {/* Accordion 1 */}
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{ backgroundColor: "#33373e", color: "#fff" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "43%", flexShrink: 0, color: "#fff" }}>
                  Best CNC Machining Service Provider in PCMC, Pune
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  By providing CNC machining services, we have established a
                  strong presence in the industry and have become one of the
                  best CNC Machining Service Providers in PCMC Pune. To provide
                  complete satisfaction to our customers, we have experienced
                  personnel and professional expertise. We provide a diverse
                  selection of equipment that enables us to provide a variety of
                  services to our customers. Our team members have these job
                  works with a variety of specifications that are tailored to
                  the needs of the clients. We provide CNC Machining Services
                  along with machined components and CNC machining parts to the
                  different parts of the world.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Accordion 2 */}
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{ backgroundColor: "#33373e", color: "#fff" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "43%", flexShrink: 0, color: "#fff" }}>
                  Best Automation Company in PCMC, Pune
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Company engaged in the manufacturing of customized
                  manipulator, Nut runners, Special Purpose Machines, Tooling
                  systems, high precision components, long shafts, Crowfoot,
                  Pulleys, complex parts etc.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Accordion 3  */}
            {/* <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{ backgroundColor: "#33373e", color: "#fff" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "43%", flexShrink: 0, color: "#fff" }}>
                  Best Nutrunner Machine Assembly Provider in PCMC, Pune
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A nutrunner is a tool that can help you with fastening
                  operations. This is a group of compact, durable assembly tools
                  that can fit into small spaces. Then, they can deliver a
                  highly accurate fastening cycle that can meet your needs.
                </Typography>
              </AccordionDetails>
            </Accordion> */}
            {/* Accordion 4 */}
            {/* <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              sx={{ backgroundColor: "#33373e", color: "#fff" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "40%", flexShrink: 0, color: "#fff" }}>
                  Precision CNC Machining Services in PCMC, Pune
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <strong> Advance CNC Technologies</strong> is a provider of
                  Precision CNC Machining Services in PCMC, Pune. We cater a
                  wide range of services to our prestigious clients.
                </Typography>
                <Typography>
                  The procedure of Precision CNC Machining entails grinding,
                  milling, spinning, and electrical discharge machining, and it
                  is usually carried out with the aid of Computer Numerical
                  Control (CNC) equipment.
                </Typography>
              </AccordionDetails>
            </Accordion> */}
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
