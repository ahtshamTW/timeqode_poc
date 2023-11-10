import { Box } from "@mui/material";
import "./App.css";
import MenuBar from "./components/MenuBar";
import Benefits from "./components/benefits";
import ExpenseManagement from "./components/expenseManagement";
import Footer from "./components/footer";
import Functionalities from "./components/functionalities";
import Help from "./components/help";
import Pricing from "./components/pricing";
import IMAGES from "./assets";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box
          bgcolor={"#FFFFFF"}
          sx={{
            backgroundImage: { xs: "none", md: `url(${IMAGES.logoHalf})` },
            backgroundRepeat: `no-repeat`,
            backgroundSize: { xs: "0%", sm: "40%", md: "30%" },
          }}
        >
          <MenuBar />
          <ExpenseManagement />
          <Benefits />
          <Functionalities />
          <Pricing />
          <Help />
          <Footer />
        </Box>
      </header>
    </div>
  );
}

export default App;
