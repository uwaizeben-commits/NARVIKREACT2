import React from 'react'
import contactImage from '/src/assets/contact_us.png';

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src={contactImage} alt="Contact Us" className="img-fluid" style={{ maxWidth: '300px' }} />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div className="row mb-3">
                                <label htmlFor="exampleForm" className="col-sm-3 col-form-label fw-bold">Full Name</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="exampleForm" placeholder="John Smith"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="exampleFormControlInput1" className="col-sm-3 col-form-label fw-bold">Email</label>
                                <div className="col-sm-9">
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="col-sm-3 col-form-label fw-bold">Message</label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
)
}

export default Contact