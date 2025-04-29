import React from "react";
import SEO from "./SEO"; // Adjust the import path as necessary

const HomePage = () => {
  return (
    <div>
      <SEO
        title="Biterno - Home"
        description="Welcome to Biterno, your go-to platform for crypto trading."
        keywords="Biterno, Crypto, Trading"
        canonical="https://www.biterno.com"
      />
      <h1>Welcome to Biterno</h1>
      <p>Your platform for crypto trading.</p>
    </div>
  );
};

export default HomePage;
