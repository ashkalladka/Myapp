// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
      
      <h1>About Page</h1>
      <p>Welcome to the About Page!</p>
      <Link to="/">Home</Link>
      <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="https://media.distractify.com/brand-img/bwzKFiLe_/0x0/naruto-anime-1691092442445.jpg" class="card-img-top" alt="not found"/>
      <div class="card-body">
        <h5 class="card-title">Naruto</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://animegalaxyofficial.com/wp-content/uploads/2021/07/hl7lgksn6aa71.jpg" class="card-img-top" alt="not found"/>
      <div class="card-body">
        <h5 class="card-title">Tokyo Revengers</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://flxt.tmsimg.com/assets/p186423_b_h9_ae.jpg" class="card-img-top" alt="not found"/>
      <div class="card-body">
        <h5 class="card-title">One piece</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://mangainsider.com/wp-content/uploads/2022/01/Death-Note-History-and-Overview.png" class="card-img-top" alt="not found"/>
      <div class="card-body">
        <h5 class="card-title">Death Note</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default About;
