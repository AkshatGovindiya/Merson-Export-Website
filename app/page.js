"use client"
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'

import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Document</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato"
        />
        <link rel="stylesheet" href="/style/style.css" />
      </Head>

      <body data-bs-spy="scroll">
        <section id="navbar">
          <div className="container-fluid">
            <nav
              className="navbar navbar-expand-lg opacity-100 fixed-top h-auto"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
            >
              <div className="container-fluid d-flex gap-5">
                <div className="d-flex">
                  <a href="">
                    <img src="images/brixep_logo.webp" className="w-75" alt="Not Found" />
                  </a>
                  <button
                    className="navbar navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Nav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>

                <div className="collapse navbar-collapse" id="Nav">
                  <ul className="navbar-nav d-flex gap-5">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#background-image">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#agent-facility">Quote</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#Why us">Why us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#section-three">What we are</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#deals-in">Deals In</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#vision-section"> Our Skills</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#CONTACT-US"> Contact</a>
                    </li>
                    <li className="nav-item d-flex">
                      <a className="nav-link" href="#"><i className="fa-solid fa-envelope"></i></a>
                      <a className="nav-link" href="#"><i className="fa-solid fa-phone"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </section>

        <main className="main">
          <section id="background-image">
            <div className="container-fluid" data-aos="zoom-out">
              <div className="container_image">
                <div className="bg_color">
                  <section id="background-text">
                    <div className="text d-flex justify-content-center align-items-center">
                      <div className="container">
                        <div className="row">
                          <div
                            data-aos="fade-right"
                            className="col-lg-6 d-flex justify-content-center align-items-center mx-auto my-5 me-lg-0 gap-5 flex-wrap flex-column fw-bold fs-1"
                          >
                            <strong className="text-light text-center">WELCOME TO<br />MERSON EXPORTS</strong>
                            <div className="w-md-50 p-sm-0">
                              <a href="#">READ MORE</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>

          <section id="agent-facility">
            <div className="container-fluid d-flex justify-content-center align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12" data-aos="fade-right">
                    <marquee behavior="" direction="left">
                      <p className="fs-2">We, as Indian exporters and your trusted sourcing agent, facilitate your access to a wide range of incredible Indian products.</p>
                    </marquee>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="section-three">
            <div className="container-fluid" id="whoweare">
              <div className="container my-5">
                <div className="row d-flex justify-content-center align-items-center" data-aos="fade-up">
                  <div className="col-lg-6 col-sm-12 col-md-12 d-flex flex-column gap-5 justify-content-start align-items-start my-sm-5">
                    <h1 className="fs-1 fw-bold">WHAT WE ARE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem maiores modi, exercitationem perferendis quas atque magni sunt illo explicabo, corrupti nobis quia repudiandae ipsam? Ea corrupti deleniti dignissimos accusamus!</p>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="image">
                      <img src="images/bg_image_2.webp" data-aos="fade-up" alt="" className="mt-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="deals-in">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12 my-0 my-sm-5 d-flex justify-content-center" data-aos="fade-up">
                  <h2 className="display-4">DEALS IN</h2>
                </div>
              </div>
              <div className="container my-2">
                <div className="row" data-aos="fade-up">
                  <div className="col-lg-3 my-5 col-sm-12 col-md-12 my-lg-0">
                    <div className="image1">
                      <img src="images/jwellery.webp" alt="" />
                    </div>
                    <a href="#" className="text-decoration-none d-flex flex-column gap-2 mt-3">
                      <h3>Fashion Jewellery</h3>
                      <h3>Read More</h3>
                    </a>
                  </div>
                  <div className="col-lg-3 my-5 col-sm-12 col-md-12 my-lg-0">
                    <div className="image2">
                      <img src="images/image2.webp" alt="" />
                    </div>
                    <a href="#" className="text-decoration-none d-flex flex-column gap-2 mt-3">
                      <h3>Spices</h3>
                      <h3>Read More</h3>
                    </a>
                  </div>
                  <div className="col-lg-3 my-5 col-sm-12 col-md-12 my-lg-0">
                    <div className="image3">
                      <img src="images/image3.webp" alt="Not Found" />
                    </div>
                    <a href="#" className="text-decoration-none d-flex flex-column gap-2 mt-3">
                      <h3>Cereals</h3>
                      <h3>Read More</h3>
                    </a>
                  </div>
                  <div className="col-lg-3 my-5 col-sm-12 col-md-12 my-lg-0">
                    <div className="image4">
                      <img src="images/image4.webp" alt="Not Found" />
                    </div>
                    <a href="#" className="text-decoration-none d-flex flex-column gap-2 mt-3">
                      <h3>Fruits</h3>
                      <h3>Read More</h3>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="section-why-us">
            <div className="container-fluid my-0 my-sm-5">
              <div className="container my-0 my-lg-5">
                <div className="row justify-content-center align-items-center" data-aos="fade-up">
                  <div className="col-lg-6 col-md-12 col-sm-12 my-0 my-lg-5">
                    <img src="images/background_image_3.webp" className="w-100" alt="Not Found" />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column gap-4 my-lg-0 my-5">
                    <h1 className="display-1" id="Why us">WHY US</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio labore, deserunt, sapiente nulla dicta dolores perferendis tempore mollitia dolor distinctio! Soluta, laborum numquam! Ad assumenda incidunt eius libero possimus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolor. Nobis dolor itaque magni, nulla saepe hic earum harum amet expedita reiciendis odit culpa architecto accusamus pariatur numquam voluptas ex?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, in nesciunt illum quasi quod sit maiores praesentium quaerat laborum asperiores! Commodi, illum voluptate eveniet quam quidem nesciunt praesentium beatae ea.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="vision-section">
            <div className="container-fluid">
              <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-12 my-5 my-sm-0 d-flex justify-content-center align-items-center" data-aos="fade-up">
                    <h1 className="display-1">OUR SKILLS</h1>
                  </div>
                </div>
                <div className="row my-lg-5 justify-content-center align-items-center d-flex">
                  <div className="col-lg-6 col-sm-12 col-md-12 d-flex flex-column gap-3">
                    <h2>PRODUCT SOURCING AND PROCUREMENT</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, culpa nesciunt aperiam reprehenderit sint fuga? Non tempore quasi voluptatibus doloremque nemo repellendus pariatur officia. Iusto beatae deserunt sapiente inventore provident.</p>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-md-12 d-flex flex-column gap-3">
                    <h2>SUPPLY CHAIN MANAGEMENT</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, culpa nesciunt aperiam reprehenderit sint fuga? Non tempore quasi voluptatibus doloremque nemo repellendus pariatur officia. Iusto beatae deserunt sapiente inventore provident.</p>
                  </div>
                </div>
                <div className="row my-0 my-lg-5 justify-content-center align-items-center d-flex">
                  <div className="col-lg-6 col-sm-12 col-md-12 d-flex flex-column gap-3">
                    <h2>QUALITY CONTROL AND ASSURANCE</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, culpa nesciunt aperiam reprehenderit sint fuga? Non tempore quasi voluptatibus doloremque nemo repellendus pariatur officia. Iusto beatae deserunt sapiente inventore provident.</p>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-md-12 d-flex flex-column gap-3">
                    <h2>LOGISTICS AND SHIPPING</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, culpa nesciunt aperiam reprehenderit sint fuga? Non tempore quasi voluptatibus doloremque nemo repellendus pariatur officia. Iusto beatae deserunt sapiente inventore provident.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="CONTACT-US">
            <div className="container-fluid my-5" data-aos="fade-up">
              <div className="container my-0 my-sm-5">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <h1 className="display-1 fw-bold">CONTACT US</h1>
                    <div className="d-flex flex-column gap-5">
                      <div className="row">
                        <div className="col-lg-1 col-sm-1 col-md-1">
                          <i className="fa fa-location-arrow" style={{ color: '#F16739' }}></i>
                        </div>
                        <div className="col-lg-11 col-sm-11 col-md-11">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero repellat molestias, dolor dicta animi ducimus unde pariatur quibusdam, earum voluptas eius id. Quidem sed odio inventore at non esse!</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-1 col-sm-1 col-md-1">
                          <i className="fa fa-envelope" style={{ color: '#F16739' }}></i>
                        </div>
                        <div className="col-lg-11 col-sm-11 col-md-11">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero repellat molestias, dolor dicta animi ducimus unde pariatur quibusdam, earum voluptas eius id. Quidem sed odio inventore at non esse!</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-1 col-sm-1 col-md-1">
                          <i className="fa fa-phone" style={{ color: '#F16739' }}></i>
                        </div>
                        <div className="col-lg-11 col-sm-11 col-md-11">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero repellat molestias, dolor dicta animi ducimus unde pariatur quibusdam, earum voluptas eius id. Quidem sed odio inventore at non esse!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 my-5 my-sm-0">
                    <form className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">First Name</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Last Name</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Email</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="john@example.com" />
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="123-45-678" />
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputCity" className="form-label">Message</label>
                        <textarea type="text" className="form-control" id="inputCity" placeholder="Type your message here"></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <img src="images/brixep_logo.webp" alt="Logo Not Found" style={{ width: '60%' }} />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 text-center">
                  <p className="display-7">Terms & Conditions</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 text-end">
                  <i className="fa-brands fa-facebook fa-2xl" style={{ color: '#F16739' }}></i>
                  <i className="fa-brands fa-twitter fa-2xl mx-3" style={{ color: '#F16739' }}></i>
                  <i className="fa-brands fa-instagram fa-2xl" style={{ color: '#F16739' }}></i>
                </div>
              </div>
              <div className="row d-flex justify-content-center align-items-center mt-3">
                <div className="col-lg-12 text-center">
                  <p>&copy; 2024 Brixep. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </body>
    </>
);
}