import { Typography, Grid, Container } from "@mui/material";
import React from "react";
import MachineTable from "./MachineTable";
import Carousel from "react-bootstrap/Carousel";
const Facility = () => {
  return (
    <Container>
      {/* Best in class CNC Machining facilities title */}
      <Grid
        sx={{
          mt: 10,
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: 600,
          }}
        >
          <h1 style={{ color: "#fff" }}>
            Best in class CNC Machining facilities
          </h1>
        </Typography>
      </Grid>
      {/* Best in class CNC Machining facilities cnc  */}
      <Grid container spacing={2} sx={{ py: 5 }}>
        {/* Best in class CNC Machining facilities cnc image */}
        <Grid item md={6} xs={12}>
          <img
            style={{ width: "100%", height: "55vh" }}
            src="/image/CNC-Horizon.png"
            alt="CNC Horizontal"
          />
        </Grid>

        {/* Best in class CNC Machining facilities cnc side text */}
        <Grid item md={6} xs={12} sm={6}>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
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
              color: "#fff",
              fontWeight: 500,
              py: 0,
            }}
          >
            <strong>Advance CNC Technologies </strong> is one of the best CNC
            Machininng Services Providers in Pune.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#fff",
              fontWeight: 500,
              py: 1,
            }}
          >
            We are ISO 9001:2015 Company, engaged in the manufacturing and
            supply of High Precision Machined Metal Components, Dies & Moulds,
            Patterns, Jigs and Fixtures along with Long shafts, Crowfoot,
            Pulleys, Complex Parts, Customised Manupulator, Nut Runner Systems,
            Special Purpose Machines, Tooling Systems and much more.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#fff",
              fontWeight: 500,
              py: 1,
            }}
          >
            We have our own design team, and our professional engineers create
            conceptual and comprehensive prototypes to ensure that the product
            works, behaves, and is appropriate for its intended use. We also
            collaborate with marketers to create product concepts and standards
            that match the needs of customers.
          </Typography>
        </Grid>

        {/* Best in class CNC Machining facilities cnc lower text */}

        <Typography
          variant="subtitle1"
          sx={{
            color: "#fff",
            fontWeight: 500,
            py: 1,
            mx: 2,
          }}
        >
          We are in the automation sector and have outstanding production
          facilities to produce high quality and accuracy. We have over 25 years
          of experience in research and design. We serve our customers by
          providing first-rate goods that are delivered on schedule and at a
          reasonable price. Inside our machinery asset array, we have Big size
          turning Centres (Dia 600mm x 2500mm), Vertical machining Centres,
          Horizontal machining Centre, Turn Mill centre, Big Size Band Saw
          Cutting machine, CNC Gas Cutting Machine, Dynamic Balancing Machine,
          Electro Discharge Machine, Conventional machines set up and calibrated
          TIG welding plant, and so on.
        </Typography>
      </Grid>

      {/* Below are some of our most important CNC machining facilities */}
      <Grid
        sx={{
          mt: 4,
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: 600,
            marginBottom: "30px",
          }}
        >
          <h1 style={{ color: "#fff" }}>
            Below are some of our most important CNC machining facilities
          </h1>
        </Typography>
      </Grid>

      {/* machine table details  */}
      <Grid>
        <MachineTable />
      </Grid>

      {/* cnc truning machine   */}
      <Grid container spacing={2} sx={{ py: 5 }}>
        {/* cnc truning machine  video */}
        <Grid item md={6} xs={12}>
          <iframe
            width="100%"
            height="415"
            src="/image/cncv1.mp4 "
            alt="CNC Turning Machine"
            allow="autoplay"
            mute
            loop
          ></iframe>
        </Grid>

        {/* cnc truning machine side  text */}
        <Grid item md={6} xs={12} sm={6}>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 600,
              textAlign: "center",
              alignItems: "center",
            }}
          >
            CNC Turning Machining Centre
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#fff",
              fontWeight: 500,
              py: 0,
            }}
          >
            CNC machining Center at <strong>Advance CNC Technologies </strong>
            is much superior to manual machining for many reasons:
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#fff",
              fontWeight: 400,
              py: 1,
            }}
          >
            <strong> Improved Accuracy</strong>
            <br></br>
            When a CNC is programmed to complete a job, it produces a clear and
            precise cut that ensures product consistency. It can be done in the
            same way over and over again.
            <br></br>
            <strong> Increased Cost Effectiveness</strong>
            <br></br>Employing an individual to physically machine parts at
            scale is much more costly than making a machine do it because a
            machine does not tyre, does not require meal breaks, and can
            potentially work 24 hours a day, seven days a week.
            <br></br>
            <strong> Super Speed CNC</strong> <br></br>
            turning will produce hundreds of parts per minute while maintaining
            a consistent final result.
          </Typography>
        </Grid>
      </Grid>
      {/* Vertical Machining Centre  */}
      <Grid container spacing={2} sx={{ py: 5 }}>
        {/* Vertical Machining Centre  side text */}
        <Grid item md={6} xs={12} sm={6}>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 600,
              textAlign: "center",
              alignItems: "center",
            }}
          >
            Vertical Machining Centre
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#fff",
              fontWeight: 500,
              py: 0,
            }}
          >
            Vertical machining, also known as milling, removes metal from a
            workpiece using rotary cutters. Vertical machining takes place on a
            vertical machining centre (VMC), which has a vertically oriented
            spindle. Tools hang straight down from the tool holder when using a
            vertically centred spindle, and they often cut over the top of a
            workpiece.<br></br>
            We follow Production-On-Demand manufacturing strategy, all of our
            vertical machining centres have the most advanced milling equipment
            for increasing efficiency and superior precision parts.
          </Typography>
        </Grid>

        {/* Vertical Machining Centre  video */}
        <Grid item md={6} xs={12}>
          <iframe
            width="100%"
            height="415"
            src="/image/vmc.mp4 "
            alt=" Vertical Machining Centre "
            allow="autoplay"
            mute
            looped
          ></iframe>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Facility;
