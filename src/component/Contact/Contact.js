import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { address, email, mobile } from "./data";
import { Button, CssBaseline, IconButton, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Container } from "@mui/system";
import Link from "@mui/material/Link";
import axios from "axios";

import { useEffect } from "react";

const Contact = (props) => {
  const [details, setDetails] = React.useState(mobile);
  const [data, setData] = React.useState(email);
  const [place, setPlace] = React.useState(address);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let emailObj = {
      name: formData.name,
      email: formData.email,
      subject: "test",
      text: formData.message,
    };
    axios
      .post("https://advancecnctech.vercel.app/send-email", emailObj)
      .then((response) => {
        console.log(response);
      });

    // Handle form submission logic here

    console.log(":Form Data-", formData);
  };

  return (
    <>
      contact page addres mobile
      <Container sx={{ display: "flex", mt: 10 }}>
        <Grid container spacing={2}>
          {Array.isArray(details) &&
            details.map((data, i) => (
              <Grid item xs={12} sm={6} md={4} key={data.id + i}>
                <Typography
                  variant="h6"
                  sx={{ px: 2, fontWeight: 600, color: "#fff" }}
                >
                  {data?.title}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <IconButton sx={{ color: "blue", pt: 0 }}>
                    <Link href="tel:91992 1009258">
                      <PhoneIphoneIcon />
                    </Link>
                  </IconButton>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#465166",
                      fontWeight: 600,
                      py: 1,
                    }}
                  >
                    <a href="tel:+91992 1009258">{data.mobile}</a>
                    <br />
                    <a href="tel: +91 992 100 1303">{data.mobile1}</a>
                  </Typography>
                </Box>
              </Grid>
            ))}

          {Array.isArray(data) &&
            data.map((data, i) => (
              <Grid item xs={12} sm={6} md={4} key={data.id + i}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#fff", pl: 2 }}
                >
                  {data?.title}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <IconButton sx={{ color: "blue", pt: 0 }}>
                    <Link href="mailto:marketing@advancecnctechnologies.com">
                      <EmailIcon />
                    </Link>
                  </IconButton>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#465166", fontWeight: 350, pt: 1 }}
                  >
                    <a href="mailto:marketing@advancecnctechnologies.com">
                      {data.email}
                    </a>
                  </Typography>
                </Box>
              </Grid>
            ))}

          {Array.isArray(place) &&
            place.map((data, i) => (
              <Grid item xs={12} sm={6} md={4} key={data.id + i}>
                <Typography
                  variant="h6"
                  sx={{ px: 2, fontWeight: 600, color: "#fff" }}
                >
                  {data?.title}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <IconButton sx={{ pl: 2, color: "blue" }}>
                    <Link href="https://goo.gl/maps/kgd2Qmijewh2eeKu6">
                      <LocationOnRoundedIcon />
                    </Link>
                  </IconButton>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#fff", fontWeight: 600 }}
                  >
                    {data.address}
                  </Typography>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Container>
      {/* contact Form  */}
      <Container sx={{ mt: 5 }}>
        <Paper elevation={4} sx={{ py: 4, backgroundColor: "#e0e0e0" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{
                  color: "#078dad",
                  fontWeight: 600,
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                Contact Us
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{
                  color: "#078dad",
                  fontWeight: 400,
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Please fill in below information and we will reach out to you.
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              marginTop: 5,
              mx: 5,
              alignItems: "center",
            }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ background: "#e0e0e0" }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <TextField
                    type="text"
                    name="name"
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                    label="Enter your  Name"
                    placeholder="Enter your  Name"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    type="email"
                    name="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    label="Enter your  Email"
                    placeholder="Enter your Email"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    name="mobile"
                    type="mobile"
                    fullWidth
                    value={formData.mobile}
                    onChange={handleChange}
                    defaultValue="+91"
                    label="Enter your Mobile"
                    placeholder="Enter your Mobile"
                  />
                </Grid>
              </Grid>

              <Grid sx={{ my: 5 }}>
                <TextField
                  id="outlined-multiline-static"
                  fullWidth
                  name="message"
                  label="Message"
                  multiline
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </Grid>

              <Button
                variant="text"
                type="submit"
                sx={{
                  backgroundColor: "#2196f3",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "red",
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Contact;
