import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import IMAGES from "../../assets";
import "./benefits.css";

const Benefits = () => {
  return (
    <Container maxWidth="100%" disableGutters sx={{ mt: 16}}>
      <Grid container sx={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Grid item xs={12} sm={12} md={6} lg={6}
        sx={{
          order: {
            xs: 1,
            sm: 1,
          },
        }}
        >
          <Typography
            fontWeight={900}
            variant="h3"
            sx={{
              textAlign: {
                xs: "center",
                sm: "right",
              },
              py: {
                xs: '48px',
                sm: '64px'
              },
              px: {
                xs: '0px',
                sm: '96px'
              }
            }}
            fontFamily="Montserrat"
            color="#2D4156"
          >
            Benefits
          </Typography>

        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            order: {
              xs: 2,
              sm: 2,
            },
            // minHeight: {
            //   xs: "360px",
            //   sm: "610px",
            // },
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          
          <div class="dark1" >
            <img src={IMAGES.dark1} />
          </div>
          <div className="text-overlay-dark">
            <Typography
              variant="h3"
              fontSize={{ xs: "20px", sm: "30px" }}
              fontFamily="Montserrat"
              sx={{
                color: "#FFFFFF",
                padding: "8px",
                textAlign: "left",
                zIndex: 1
              }}
            >
              <span style={{ color: "#8570EB" }}>Access</span> from any type of device
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Montserrat"
              fontSize={{ xs: "20px", sm: "30px" }}
              sx={{
                color: "#FFFFFF",
                padding: "8px",
                textAlign: "center",
                zIndex: 1
              }}
            >
              (laptop, tablet, mobile)
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}
          sx={{
            order: {
              xs: 3,
              sm: 3,
            },
            marginTop: {
              xs: "0px", 
              sm: "-500px", 
            },
            // minHeight: {
            //   xs: "360px",
            //   sm: "610px",
            // },
            position: 'relative',
            // position: { xs: "relative", sm: "absolute" },
            // marginTop: { xs: "0px", sm: "200px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div class="light1" >
            <img src={IMAGES.light1} />
          </div>
          <div className="text-overlay-light" >
            <Typography
              variant="h3"
              fontSize={{ xs: "20px", sm: "30px" }}
              fontFamily="Montserrat"
              sx={{
                color: "#2C2C2C",
                padding: "8px",
                textAlign: "right",
                zIndex: 1,
                pr: { xs: '16px', sm: '158px' }
              }}
            >
              <span style={{ color: "#274EF4" }}>Decrease</span> the necessary time for
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Montserrat"
              fontSize={{ xs: "20px", sm: "30px" }}
              sx={{
                color: "#2C2C2C",
                padding: "8px",
                textAlign: "right",
                zIndex: 1,
                pr: { xs: '16px', sm: '158px' }
              }}
            >
              creating an expense report
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            order: {
              xs: 4,
              sm: 4,
            },
            // minHeight: {
            //   xs: "360px",
            //   sm: "610px",
            // },
            // marginBottom: { xs: "0px", sm: "200px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            alignSelf: 'flex-end'
          }}
        >
          <div class="dark1" >
            <img src={IMAGES.dark2} />
          </div>
          <div className="text-overlay-dark">
            <Typography
              variant="h3"
              fontSize={{ xs: "20px", sm: "30px" }}
              fontFamily="Montserrat"
              sx={{
                color: "#FFFFFF",
                padding: "8px",
                textAlign: "left",
                zIndex: 1
              }}
            >
              <span style={{ color: "#E038B8" }}>Electronic</span> archiving documents
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Montserrat"
              fontSize={{ xs: "20px", sm: "30px" }}
              sx={{
                color: "#FFFFFF",
                padding: "8px",
                textAlign: "center",
                zIndex: 1
              }}
            >
              attached to the expense report
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}
        sx={{
          order: {
            xs: 5,
            sm: 5,
          },
          marginTop: {
            xs: "0px", 
            sm: "-500px", 
          },
          // minHeight: {
          //   xs: "360px",
          //   sm: "610px",
          // },
          position: "relative",
          // marginTop: {xs: '0px', sm: '200px'},
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "flex-end",
        }}>
          <div class="light1" >
            <img src={IMAGES.light2} />
          </div>
          <div className="text-overlay-light" >
            <Typography
              variant="h3"
              fontSize={{ xs: "20px", sm: "30px" }}
              fontFamily="Montserrat"
              sx={{
                color: "#2C2C2C",
                padding: "8px",
                textAlign: "right",
                zIndex: 1,
                pr: {xs: '16px', sm: '158px'}
              }}
            >
              <span style={{ color: "#DD2F5D" }}>Reduce</span> the number of printed
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Montserrat"
              fontSize={{ xs: "20px", sm: "30px" }}
              sx={{
                color: "#2C2C2C",
                padding: "8px",
                textAlign: "right",
                zIndex: 1,
                pr: {xs: '16px', sm: '158px'}
              }}
            >
              documents circulating between
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Montserrat"
              fontSize={{ xs: "20px", sm: "30px" }}
              sx={{
                color: "#2C2C2C",
                padding: "8px",
                textAlign: "right",
                zIndex: 1,
                pr: {xs: '16px', sm: '158px'}
              }}
            >
              departments
            </Typography>
          </div>
        </Grid>
        
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            order: {
              xs: 6,
              sm: 6,
            },
            // minHeight: {
            //   xs: "360px",
            //   sm: "610px",
            // },
            position: "relative",
            // marginBottom: { xs: "0px", sm: "200px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            alignSelf: 'flex-end'
          }}
        >
          <div class="dark1" >
            <img src={IMAGES.dark3} />
          </div>
          <div className="text-overlay-dark">
            <Typography
              variant="h3"
              fontSize={{ xs: "20px", sm: "30px" }}
              fontFamily="Montserrat"
              sx={{
                color: "#FFFFFF",
                padding: "8px",
                textAlign: "left",
                zIndex: 1
              }}
            >
              <span style={{ color: "#00E0F7" }}>Simplified</span> administration – Easily
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Montserrat"
              fontSize={{ xs: "20px", sm: "30px" }}
              sx={{
                color: "#FFFFFF",
                padding: "8px",
                textAlign: "center",
                zIndex: 1
              }}
            >
              customizable user profiles and
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Montserrat"
              fontSize={{ xs: "20px", sm: "30px" }}
              sx={{
                color: "#FFFFFF",
                padding: "8px",
                textAlign: "center",
                zIndex: 1
              }}
            >
              approval hierarchies
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}
        sx={{
          order: {
            xs: 7,
            sm: 7,
          },
          marginTop: {
            xs: "0px", 
            sm: "-500px", 
          },
          // minHeight: {
          //   xs: "360px",
          //   sm: "610px",
          // },
          position: "relative",
          // marginBottom: {xs: '0px', sm: '200px'},
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "flex-end",
        }}>
          <div class="light1" >
            <img src={IMAGES.light3} />
          </div>
          <div className="text-overlay-light" >
            <Typography
              variant="h3"
              fontSize={{ xs: "20px", sm: "30px" }}
              fontFamily="Montserrat"
              sx={{
                color: "#2C2C2C",
                padding: "8px",
                textAlign: "right",
                zIndex: 1,
                pr: {xs: '16px', sm: '158px'}
              }}
            >
              <span style={{ color: "#8721F4" }}>Integrated</span> communication between 
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Montserrat"
              fontSize={{ xs: "20px", sm: "30px" }}
              sx={{
                color: "#2C2C2C",
                padding: "8px",
                textAlign: "right",
                zIndex: 1,
                pr: {xs: '16px', sm: '158px'}
              }}
            >
              the users and the financial-
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Montserrat"
              fontSize={{ xs: "20px", sm: "30px" }}
              sx={{
                color: "#2C2C2C",
                padding: "8px",
                textAlign: "right",
                zIndex: 1,
                pr: {xs: '16px', sm: '158px'}
              }}
            >
              accounting department through
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Montserrat"
              fontSize={{ xs: "20px", sm: "30px" }}
              sx={{
                color: "#2C2C2C",
                padding: "8px",
                textAlign: "right",
                zIndex: 1,
                pr: {xs: '16px', sm: '158px'}
              }}
            >
              real-time notifications by email
            </Typography>
          </div>
        </Grid>

        
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            order: {
              xs: 8,
              sm: 8,
            },
            // minHeight: {
            //   xs: "360px",
            //   sm: "610px",
            // },
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div class="dark1" >
            <img src={IMAGES.dark4} />
          </div>
          <div className="text-overlay-dark">
            <Typography
              variant="h3"
              fontSize={{ xs: "20px", sm: "30px" }}
              fontFamily="Montserrat"
              sx={{
                color: "#FFFFFF",
                padding: "8px",
                textAlign: "left",
                zIndex: 1
              }}
            >
              <span style={{ color: "#EB829E" }}>Improve</span> document operation time
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Montserrat"
              fontSize={{ xs: "20px", sm: "30px" }}
              sx={{
                color: "#FFFFFF",
                padding: "8px",
                textAlign: "center",
                zIndex: 1
              }}
            >
              with the integration of the ERP and
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Montserrat"
              fontSize={{ xs: "20px", sm: "30px" }}
              sx={{
                color: "#FFFFFF",
                padding: "8px",
                textAlign: "center",
                zIndex: 1
              }}
            >
              usage of common master files
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}
        sx={{
          order: {
            xs: 9,
            sm: 9,
          },
          marginTop: {
            xs: "0px", 
            sm: "-500px", 
          },
          // minHeight: {
          //   xs: "360px",
          //   sm: "610px",
          // },
          position: "relative",
          // marginBottom: { xs: "0px", sm: "200px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "flex-end",
        }}>
          <div class="light1" >
            <img src={IMAGES.light4} />
          </div>
          <div className="text-overlay-light" >
            <Typography
              variant="h3"
              fontSize={{ xs: "20px", sm: "30px" }}
              fontFamily="Montserrat"
              sx={{
                color: "#2C2C2C",
                padding: "8px",
                textAlign: "right",
                zIndex: 1,
                pr: {xs: '16px', sm: '158px'}
              }}
            >
              <span style={{ color: "#009DAB" }}>Visualization</span> in real time of the report  
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Montserrat"
              fontSize={{ xs: "20px", sm: "30px" }}
              sx={{
                color: "#2C2C2C",
                padding: "8px",
                textAlign: "right",
                zIndex: 1,
                pr: {xs: '16px', sm: '158px'}
              }}
            >
              of advance payments and expense 
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Montserrat"
              fontSize={{ xs: "20px", sm: "30px" }}
              sx={{
                color: "#2C2C2C",
                padding: "8px",
                textAlign: "right",
                zIndex: 1,
                pr: {xs: '16px', sm: '158px'}
              }}
            >
              statements at individual or 
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Montserrat"
              fontSize={{ xs: "20px", sm: "30px" }}
              sx={{
                color: "#2C2C2C",
                padding: "8px",
                textAlign: "right",
                zIndex: 1,
                pr: {xs: '16px', sm: '158px'}
              }}
            >
              centralized level
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            order: {
              xs: 10,
              sm: 10,
            },
            // minHeight: {
            //   xs: "360px",
            //   sm: "610px",
            // },
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div class="dark1" >
            <img src={IMAGES.dark5} />
          </div>
          <div className="text-overlay-dark">
            <Typography
              variant="h3"
              fontSize={{ xs: "20px", sm: "30px" }}
              fontFamily="Montserrat"
              sx={{
                color: "#FFFFFF",
                padding: "8px",
                textAlign: "left",
                zIndex: 1
              }}
            >
              <span style={{ color: "#00E0F7" }}>Elimination</span> of human error
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Benefits;
