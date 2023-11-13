import { useRef } from "react";
import { Box, Container } from "@mui/material";
import MenuBar from "./components/MenuBar";
import Benefits from "./components/benefits";
import ExpenseManagement from "./components/expenseManagement";
import Footer from "./components/footer";
import Functionalities from "./components/functionalities";
import Help from "./components/help";
import Pricing from "./components/pricing";
import IMAGES from "./assets";
import "./App.css";

function App() {
  const formRef = useRef(null);

  const onTouch = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <header className="App-header">
          <Container disableGutters
          style={{
            maxWidth: '1955px'
          }}
          sx={{
            backgroundImage: { xs: "none", md: `url(${IMAGES.logoHalf})` },
            backgroundRepeat: `no-repeat`,
            backgroundSize: { xs: "0%", sm: "40%", md: "30%" },
          }}>
          <MenuBar />
          <ExpenseManagement onTouch={onTouch} />
          <Benefits />
          <Functionalities />
          <Pricing />
          <div ref={formRef}>
            <Help />
          </div>
          <Footer />
          </Container>
      </header>
    </div>
  );
}

export default App;
