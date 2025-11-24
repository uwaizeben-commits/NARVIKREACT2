import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-dark pt-5 pb-4' style={{ backgroundColor: 'skyblue' }}>
      <div className='container'>
        <div className='row text-center text-md-start'>

          <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-white'>
            <h5 className='text-uppercase mb-4 fw-bold text-primary'>OVER</h5>
            <p>Your one-stop shop for the latest and greatest in electronics. We are committed to providing high-quality products and excellent customer service.</p>
          </div>

          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
            <h5 className='text-uppercase mb-4 fw-bold text-primary'>Links</h5>
            <p><Link to="/" className='text-dark' style={{ textDecoration: 'none' }}>Home</Link></p>
            <p><Link to="/product" className='text-dark' style={{ textDecoration: 'none' }}>Products</Link></p>
            <p><Link to="/about" className='text-dark' style={{ textDecoration: 'none' }}>About</Link></p>
            <p><Link to="/contact" className='text-dark' style={{ textDecoration: 'none' }}>Contact</Link></p>
          </div>

          <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
            <h5 className='text-uppercase mb-4 fw-bold text-primary '>Contact</h5>
            <p><i className='fa fa-home me-3'></i>New York, NY 10012, US</p>
            <p><i className='fa fa-envelope me-3'></i>info@narvik.com</p>
            <p><i className='fa fa-phone me-3'></i>+ 01 234 567 88</p>
          </div>
        </div>

        <hr className='mb-4' />

        <div className='row align-items-center'>
          <div className='col-md-7 col-lg-8'>
            <p className='text-white'>Copyright ©2025 All rights reserved by:
              <a href="#" style={{textDecoration: 'none'}}>
                <strong className='text-primary'> Narvik</strong>
              </a>
            </p>
          </div>
          <div className='col-md-5 col-lg-4'>
            <div className='text-center text-md-end'>
              <a href="#" className='btn btn-outline-primary me-2'><i className='fa fa-facebook'></i></a>
              <a href="#" className='btn btn-outline-primary me-2'><i className='fa fa-twitter'></i></a>
              <a href="#" className='btn btn-outline-primary me-2'><i className='fa fa-instagram'></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer