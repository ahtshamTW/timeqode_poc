import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Stack,
  Box,
  Grid,
  Typography,
  Checkbox,
} from "@mui/material";

const Functionalities = () => {
  return (
    <Box
      py={10}
      bgcolor={"white"}
      sx={{
        width: "100%",
        height: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Grid container direction="row">
          <Grid direction={"column"} item lg={4}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Functionalities;
