import React from "react";
import { Link } from "react-router-dom";
import aboutImage from '/src/assets/About Us.jpg';

const About = () => {

  return (

    <div>
      <div className="container py-5 my-5"> 
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1> About Us </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam reiciendis adipisci vitae, repudiandae nemo. </p>
            <Link to='/contact' className='btn btn-primary px-3'>Contact Us</Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src={aboutImage} alt="About Us" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;