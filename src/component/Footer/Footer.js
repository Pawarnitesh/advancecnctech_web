import React from "react";
import { MDBFooter, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";

// import Chat from "./Chat";

const Footer = () => {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      {/* Follow With Us  */}
      <Grid sx={{ textAlign: "center", my: 3, pt: 2 }}>
        <Typography variant="h4" sx={{ color: "#fff" }}>
          Follow us on social media:
        </Typography>
      </Grid>
      <section className="my-4">
        <MDBBtn
          outline
          color="light"
          floating
          className="m-1"
          target="_blank"
          href="https://www.facebook.com/advancecnctech"
          role="button"
        >
          <MDBIcon fab icon="facebook-f">
            <img src="/image/facebook.png" style={{ width: "40px" }} />
          </MDBIcon>
        </MDBBtn>

        <MDBBtn
          outline
          color="light"
          floating
          className="m-1"
          target="_blank"
          href="https://twitter.com/advancecnctech"
          role="button"
        >
          <MDBIcon fab icon="twitter">
            <img src="/image/twitter.png" style={{ width: "40px" }} />
          </MDBIcon>
        </MDBBtn>

        <MDBBtn
          outline
          color="light"
          className="m-1"
          target="_blank"
          href="https://www.instagram.com/advancecnctech/"
          role="button"
        >
          <MDBIcon fab icon="instagram">
            <img src="/image/instagram.png" style={{ width: "40px" }} />
          </MDBIcon>
        </MDBBtn>

        <MDBBtn
          outline
          color="light"
          floating
          className="m-1"
          target="_blank"
          href="https://www.linkedin.com/company/advancecnctech"
          role="button"
        >
          <MDBIcon fab icon="linkedin-in">
            <img src="/image/linkedin.png" style={{ width: "40px" }} />
          </MDBIcon>
        </MDBBtn>
      </section>

      <Container>
        <hr />
        {/* Work Unit */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* <img src="/image/logo.png" width={"100%"} /> */}
          <Grid item xs={12} sm={12} md={4} sx={{}}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#fff",
              }}
            >
              <strong> Work Unit</strong>
            </Typography>
            <Box sx={{ display: "flex", my: 2 }}>
              <LocationOnRoundedIcon sx={{ color: "blue" }} />

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  color: "#fff",
                }}
              >
                Plot No.13, Gut No. 48/1 A, 48/3-4 and 5 Ambethan Road, Varale,
                Maharashtra 410501.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", my: 2 }}>
              <PhoneIphoneIcon sx={{ color: "blue" }} />

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  color: "#fff",
                  pl: 2,
                }}
              >
                Contact Person: +91 992 100 1303
                <br />
                Contact Person: +91 992 100 8158
              </Typography>
            </Box>
            <a href="tel:+91 992 100 1303" className="btn btn-primary w-100">
              <img src="/image/phone.png " width={"30px"} /> Connect With Us
            </a>

            <Box sx={{ display: "flex", my: 2 }}>
              <EmailIcon sx={{ color: "blue" }} />

              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  color: "#fff",
                  pl: 2,
                }}
              >
                marketing@advancecnctechnologies.com
              </Typography>
            </Box>
            <a
              href="mailto:
                    marketing@advancecnctechnologies.com"
              className="btn btn-warning w-100"
            >
              <img src="/image/gmail.png " width={"30px"} /> Connect With Us
            </a>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Box sx={{}}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Work Unit
              </Typography>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.2379700288684!2d73.78540867356054!3d18.787545260967956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b51f2681f825%3A0xd832d4b9ce2b8cbd!2sAdvance%20CNC%20Technologies%20(ACT)!5e0!3m2!1sen!2sin!4v1685869065628!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{
                  border: 0,
                  // marginLeft: "105px",
                }}
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* copyright  */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Copyright © :
        <a className="text-white" href="">
          Advance CNC Technologies 2021
        </a>
      </div>
    </MDBFooter>
  );
};
export default Footer;
