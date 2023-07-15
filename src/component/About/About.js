import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, List, ListItem, Paper } from "@mui/material";
import { customers } from "../About/data";
import Carousel from "react-bootstrap/Carousel";

const About = () => {
  const [customer, setCostomer] = React.useState(customers);

  return (
    <>
      <Container>
        {/* About us  */}
        <Grid
          sx={{
            mt: 10,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 600,
            }}
          >
            About us
          </Typography>
        </Grid>
        <Grid container spacing={5} sx={{ py: 5 }}>
          <Grid item md={6} xs={12}>
            {/* Carousel In About Us  */}
            <Carousel>
              <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src="/image/factory.jpg"
                  alt="Factory"
                  style={{ width: 500, height: 360 }}
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100 "
                  src="/image/companyemp1.jpeg"
                  alt="Company Emp"
                  style={{ width: 500, height: 360 }}
                />
              </Carousel.Item>
            </Carousel>
          </Grid>

          {/* About Act  */}
          <Grid item md={6} xs={12} sm={6}>
            <Typography
              variant="h4"
              sx={{
                color: "#FFF",
                fontWeight: 600,
                textAlign: "center",
                alignItems: "center",
              }}
            >
              About ACT
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#E2DCDC",
                fontWeight: 500,
                pt: 2,
              }}
            >
              <strong>Advance CNC Technologies</strong> an ISO 9001-2015
              certified company, established in 2004, located in PCMC,
              Maharashtra, Pune (India)
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#E2DCDC",
                fontWeight: 500,
                py: 1,
              }}
            >
              We engaged in the manufacturing of Nut Runner Systems, Special
              Purpose Machines, Tooling Systems, High Precision Components, Long
              shafts, Crowfoot, Pulleys, Customised Manupulator and much more.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#E2DCDC",
                fontWeight: 500,
                py: 1,
              }}
            >
              We have our own designing set up and our experts engineers develop
              conceptual and detailed designs that ensure that the product
              functions, performs, and fits its purpose. We also work with
              marketers to develop the product concept and specifications to
              meet customer needs.
            </Typography>
          </Grid>
        </Grid>
        {/* about act paragraph  below carousel */}
        <Grid container spacing={2} sx={{ py: 2 }}>
          <Grid item md={12} xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#E2DCDC",
                fontWeight: 500,
                py: 1,
              }}
            >
              We can help, advise, design and manufacture your Special Purpose
              Machine or any other product requirements on aspects of long
              durability, better functionality and lower production cost.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: 500,
                py: 1,
              }}
            >
              Whether you need part or product designed, reverse Engineering or
              prototype, we can fulfill it. We have professional design CAD /
              CAM softwares, i.e. Solid works, Cimatron, DelCam etc. We have
              expertise to compass the development to its destination through
              providing innovative functional and technical support to the
              customer.
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
              experience of 25+ years in the field of engineering & Designing.
              We are serving our clients through first class quality, on time
              delivery, and cost-effective products. Within our machinery asset
              scope, we have a range of Big size turning Centers (Dia 600mm x
              2500mm), Vertical machining Centers, Horizontal machining Centre,
              Turn Mill center, Big Size Band Saw Cutting machine, CNC Gas
              Cutting Machine, Dynamic Balancing Machine, Electrio Discharge
              Machine, Conventional machines set up and calibrated TIG welding
              facility etc. We serve various sectors like Automotive, defense,
              oil & Gas Industry, Mining and earthmoving, rubber and Plastics,
              energy and power sector, textile industry etc.
            </Typography>
          </Grid>
        </Grid>
        {/* vision mission  */}
        <Grid container spacing={2} sx={{ py: 2 }}>
          {/* vision mission img   */}

          <Grid item md={4} xs={12}>
            <img
              style={{ width: "100%", height: "55vh" }}
              src="/image/visionmission1.png"
              alt="Vision-Mission"
            />
          </Grid>

          {/* vision  mission data  */}
          <Grid item md={8} xs={12} sm={6}>
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
                fontWeight: 600,
              }}
            >
              Vision
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: 500,
                py: 1,
              }}
            >
              We aim to produce world class products that attract a customer on
              the basis of our quality service. We are committed to achieve ever
              increasing levels of customer satisfaction through continual
              improvements in the quality and making our products and services
              more cost-effective. Our aim is to be the customer’s first choice
              by implementing best manufacturing practices with engineering and
              designing excellence.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
                fontWeight: 600,
                pt: 2,
              }}
            >
              Mission
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: 500,
                py: 1,
              }}
            >
              We are passionate about our work. We are an innovative, ambitious
              and empowered organization. Our core values are integrity,
              excellence and effectiveness to raise customer satisfaction across
              our business. Proper focus, planning and implementation on each
              particular area, at the same time we have ability to work on
              diversified activities.
            </Typography>
          </Grid>
        </Grid>
        {/* Quality Policy  */}
        <Grid container spacing={2} sx={{ py: 2 }}>
          {/* Quality Policy text  */}

          <Grid item md={8} xs={12} sm={6}>
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
                fontWeight: 600,
              }}
            >
              Quality Policy
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: 500,
                py: 1,
              }}
            >
              We at Advance CNC Technologies are committed to manufacturing and
              supply of quality precision machined metal components & dies,
              molds, patterns, JIGS fixtures & special tooling to meet customer
              satisfaction by on time delivery with competitive price.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: 500,
                py: 1,
              }}
            >
              We will achieve quality, cost effectiveness and customers
              satisfaction by using best practices followed in each process
              improving labor skill and team work, suitable technology, close
              interaction with customers, comply applicable requirements and
              continual improvement in quality management system of ISO
              9001:2015 standards
            </Typography>
          </Grid>

          {/* Quality Policy image  */}

          <Grid item md={4} xs={12}>
            <img
              style={{ width: "100%", height: "45vh" }}
              src="/image/ACT-Values.png"
              alt="ACT-Values"
            />
          </Grid>
        </Grid>
        {/* Health and Safety Policy */}
        <Grid container spacing={2} sx={{ py: 2 }}>
          {/* Health and Safety Policy text  */}
          <Grid item md={8} xs={12} sm={6}>
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
                fontWeight: 600,
              }}
            >
              Health and Safety Policy
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: 500,
                py: 1,
              }}
            >
              Management is firmly committed to a policy enabling all work
              activities to be carried out safely, and with all possible
              measures taken to remove (or at least reduce) risk to the Health,
              Safety, and Welfare of Workers, Contractors, Authorized Visitors,
              and anyone else who may be affected by our operations.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                fontWeight: 500,
                py: 1,
              }}
            >
              We are committed to ensuring we completely with The Work health &
              Safety as per Factory Act 1948, The Work Health and Safety
              Regulation Act 1948, and applicable codes of Practices ISO
              Standard as far as possible. Workers : Each Worker Has An
              Obligation To:
              <List sx={{ listStyleType: "disc", pl: "30px" }}>
                <ListItem sx={{ display: "list-item", color: "#fff", p: 0 }}>
                  Comply with safe work Practices, with the intent of avoiding
                  injury to themselves and other and damage to plant equipment.
                </ListItem>
                <ListItem sx={{ display: "list-item", color: "#fff", p: 0 }}>
                  Wear personal protective equipment & clothing were necessary.
                </ListItem>
                <ListItem sx={{ display: "list-item", color: "#fff", p: 0 }}>
                  Not misuse of interface with anything provided for Health &
                  Safety.
                </ListItem>
                <ListItem sx={{ display: "list-item", color: "#fff", p: 0 }}>
                  Report to all accident & Incident on the job immediately, no
                  matter how trivial.
                </ListItem>
                <ListItem sx={{ display: "list-item", color: "#fff", p: 0 }}>
                  Report all known or observed hazards of there supervisor or
                  manager.
                </ListItem>
              </List>
            </Typography>
          </Grid>

          {/* Health and Safety Policy image */}

          <Grid item md={4} xs={12} sm={6}>
            <img src="/image/health-safety01.png" width="90%" />
            <img src="/image/first-aid1.png" width="90%" />
          </Grid>
        </Grid>

        {/* Some of our esteemed Customers  */}
        <Box>
          <Grid
            sx={{
              mt: 4,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Some of our esteemed Customers
            </Typography>
          </Grid>

          {/* Some of our esteemed Customers image  */}

          <Grid container spacing={2} sx={{ my: 4 }}>
            {Array.isArray(customer) &&
              customer.map((data, i) => (
                <Grid item xs={6} sm={6} md={2} key={data.id + i} sx={{ p: 0 }}>
                  <Paper elevation={4} sx={{ backgroundColor: "#fff" }}>
                    <img
                      style={{ width: "100%", height: 150, padding: "20px" }}
                      src={data.image}
                      alt={data.alt}
                    />
                  </Paper>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default About;
