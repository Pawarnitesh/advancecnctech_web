import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box, Card, Paper } from "@mui/material";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { gallery, productInfo } from "./Data";

const Products = () => {
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = useState([]);

  const handleClickOpen = (data) => {
    setProduct([data]);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ p: 8, mx: 4 }}>
        {/* our product title  */}
        <Grid
          sx={{
            my: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Our Products
          </Typography>
        </Grid>

        {/* get information from data.js  map into card*/}
        {Array.isArray(productInfo) &&
          productInfo.map((data, i) => (
            <Grid
              container
              spacing={2}
              sx={{ py: 2, backgroundColor: "#33373e" }}
            >
              <Grid
                item
                md={4}
                xs={12}
                sx={{ p: 0, backgroundColor: "#33373e" }}
                key={data.id + i}
              >
                <Card
                  onClick={() => handleClickOpen(data)}
                  sx={{ backgroundColor: "#33373e" }}
                >
                  <Paper elevation={2} sx={{ backgroundColor: "#33373e" }}>
                    <img
                      style={{
                        width: "100%",
                        height: 250,
                        paddingTop: "10px",
                      }}
                      src={data.image}
                    />
                    <Grid
                      sx={{
                        p: 2,
                        backgroundColor: "#1769aa",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          color: "#fff",
                          cursor: "pointer",
                        }}
                      >
                        {data.title1}
                      </Typography>
                    </Grid>
                  </Paper>
                </Card>
              </Grid>

              <Grid item md={8} xs={12} sm={12}>
                <Card
                  sx={{
                    position: "relative",
                    height: 315,
                    backgroundColor: "#33373e",
                  }}
                >
                  <Grid sx={{ p: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#fff",
                        fontWeight: 600,
                      }}
                    >
                      {data.title2}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ pt: 2, color: "#fff" }}
                    >
                      {data.para1}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ pt: 2, color: "#fff" }}
                    >
                      {data.para2}
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{
                      p: 2,
                      width: "100%",
                      backgroundColor: "#1769aa",
                      textAlign: "center",
                      position: "absolute",
                      bottom: 0,
                    }}
                  >
                    <Button
                      className="btn"
                      variant="outlined"
                      sx={{
                        fontWeight: 500,
                        color: "#fff",
                        backgroundColor: "#1769aa",
                        borderRadius: 1,
                      }}
                      onClick={() => handleClickOpen(data)}
                    >
                      View {data.title2}
                    </Button>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          ))}
      </Box>
      {/* get information from data.js  map into  details card*/}

      <Box>
        {Array.isArray(product) &&
          product.map((data, i) => (
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {data.title1}
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Grid sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: "#000",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    {data.title2}
                  </Typography>
                </Grid>

                <Grid container spacing={4} sx={{}}>
                  {data.images.map((image, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      sx={{
                        p: 0,
                      }}
                    >
                      <img
                        style={{
                          width: "105%",
                          height: 250,
                        }}
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                      />
                    </Grid>
                  ))}
                </Grid>
              </DialogContent>
            </Dialog>
          ))}
      </Box>
    </>
  );
};

export default Products;
