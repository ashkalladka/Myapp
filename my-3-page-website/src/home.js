// src/Home.js
import React from 'react';
//import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/#">Anime Villa</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<img src="https://content.jdmagicbox.com/comp/hyderabad/k3/040pxx40.xx40.170209141352.h9k3/catalogue/the-entertainment-store-kphb-colony-hyderabad-toy-shops-2iul49e.jpg?clr=" class="img-fluid" alt="not found"></img>
      {/* <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p> */}
      {/* <Link to="/contact">Contact</Link> */}
      {/* <Link to="/contact">Go to Contact Page</Link> */}
      <footer>
      <p>Company © W3docs. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default Home;
