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

const Help = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

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
          <Grid direction={"column"} item lg={4}>
            <Typography
              fontWeight={900}
              variant="h3"
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
              fontFamily={"Montserrat"}
              color={"#2D4156"}
              textAlign={"left"}
            >
              How can we help?
            </Typography>

            <Typography
              pt={5}
              variant="h5"
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
              fontFamily={"Montserrat"}
              color={"#707070"}
              textAlign={"left"}
            >
              Schedule a meeting, start a project, gain insight or just say
              hello, we’re happy to hear from you!
            </Typography>
          </Grid>
          <Grid item lg={2} />
          <Grid item lg={6}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <TextField
                  type="text"
                  variant="standard"
                  label="Name"
                  placeholder="Your full name"
                  InputLabelProps={{
                    style: {
                      color: "#1388E4",
                    },
                  }}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  fullWidth
                  required
                  focused
                />
                <TextField
                  focused
                  type="text"
                  variant="standard"
                  placeholder="Phone"
                  label="Phone"
                  InputLabelProps={{
                    style: {
                      color: "#1388E4",
                    },
                  }}
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  fullWidth
                  required
                />
              </Stack>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <TextField
                  type="email"
                  variant="standard"
                  placeholder="Full email address"
                  label="Email"
                  InputLabelProps={{
                    style: {
                      color: "#1388E4",
                    },
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  fullWidth
                  required
                  focused
                />
                <TextField
                  type="text"
                  placeholder="Your Company"
                  variant="standard"
                  InputLabelProps={{
                    style: {
                      color: "#1388E4",
                    },
                  }}
                  label="Company"
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                  fullWidth
                  required
                  focused
                />
              </Stack>

              <TextField
                type="text"
                variant="standard"
                InputLabelProps={{
                  style: {
                    color: "#1388E4",
                  },
                }}
                label="Your message"
                placeholder="State your message here."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                fullWidth
                required
                sx={{ mb: 4 }}
                focused
              />

              <Stack direction="row" sx={{ marginBottom: 4 }}>
                <Checkbox required defaultChecked />

                <Typography
                  variant="body2"
                  sx={{
                    alignSelf: "center",
                    textAlign: {
                      xs: "center",
                      sm: "left",
                    },
                  }}
                  fontFamily={"Montserrat"}
                  color={"#2D4156"}
                  textAlign={"left"}
                >
                  I would like to receive news about solutions and future
                  events.
                </Typography>
              </Stack>
              <Button
                style={{
                  backgroundColor: "#1488E4",
                  borderColor: "#0B7AFF",
                  borderWidth: 1,
                  borderRadius: 8,
                  width: 336,
                  height: 53,
                  fontFamily: "Montserrat",
                  fontSize: 24,
                  fontWeight: 400,
                }}
                variant="contained"
                color="secondary"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Help;
