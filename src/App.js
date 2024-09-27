import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import Footer from "./components/Footer";
import PreFooter from "./components/PreFooter";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <Carousel />
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <Card
          title="Sample Product 1"
          image="https://via.placeholder.com/150"
        />
        <Card
          title="Sample Product 2"
          image="https://via.placeholder.com/150"
        />
        <Card
          title="Sample Product 3"
          image="https://via.placeholder.com/150"
        />
        <Card
          title="Sample Product 4"
          image="https://via.placeholder.com/150"
        />
      </div>
      <PreFooter />
      <Footer />
    </div>
  );
};

export default App;
