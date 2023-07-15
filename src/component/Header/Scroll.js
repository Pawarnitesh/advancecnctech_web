import React, { useState } from "react";
import { Button } from "./Styles";
import { Grid } from "@mui/material";

const Scroll = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    // scroll button
    <Grid>
      <Button
        style={{
          position: "fixed",
          width: "100%",
          left: "95%",
          bottom: "40px",
          height: "15px",
          // font-size:" 3rem",
          // z-index:" 1",
          cursor: "pointer",
          color: "green",
        }}
      >
        <img
          className="up"
          src="/image/up.png"
          onClick={scrollToTop}
          width={50}
          style={{
            display: visible ? "inline" : "none",
          }}
        />
      </Button>
    </Grid>
  );
};

export default Scroll;
