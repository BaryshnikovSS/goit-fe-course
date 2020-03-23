import React from "react";
import Navigation from "./Components/navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import { useRouter } from "./routes";
const App = () => {
  const router = useRouter(false);
  return (
    <Router>
      <Navigation />
      {router}
    </Router>
  );
};

export default App;
