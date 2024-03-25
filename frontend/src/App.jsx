import React from "react";
import Router from "./router/Router";
import Header from "./components/theme/header/Header";
import Footer from "./components/theme/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
