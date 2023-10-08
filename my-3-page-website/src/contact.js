// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div>
      <h1>contact Page</h1>
      <p>Welcome to the contact Page!</p>
      <Link to="/">Home</Link>
      <div class="card text-bg-dark">
  <img src="https://anime-world.in/files/cropped-AWI-SiteTitle.png" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    {/* <h5 class="card-title">Contact Us</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
  </div>
</div>
    </div>
  );
};

export default Contact;
