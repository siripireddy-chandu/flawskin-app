import React from "react";
import Navbar from "./Navbar";
import "./home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section>
        
          <div className="col-lg-12 col-md-12  pt-4">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="assets\assets\img\scroll1.png"
                    className="d-block w-100 img-fluid"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="assets\assets\img\scroll2.png"
                    className="d-block w-100 img-fluid"
                    alt="Second slide"
                  />
                </div>
                {/* <div className="carousel-item">
                  <img
                    src="assets\assets\img\hiring.png"
                    className="d-block w-100 img-fluid"
                    alt="Third slide"
                  />
                </div> */}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
       
      </section>

      <div className="container p-3  text-white rounded mt-4 ">
        <div className="row gy-2">
          {/* Button 1 */}
          <div className="col-6 col-sm-4 col-md-3">
            <button className="btn btn-light btn-ripple d-flex align-items-center justify-content-between w-100"
            onClick={() => window.location.href = '/Trailsession'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-card-checklist"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
              </svg>
              <span className="ms-2">Trail Session</span>
            </button>
          </div>

          {/* Button 2 */}
          <div className="col-6 col-sm-4 col-md-3">
            <button className="btn btn-light btn-ripple d-flex align-items-center justify-content-between w-100"
            onClick={() => window.location.href = '/Fullbody'}
            >
              <img
                src="assets/assets/img/fullbody.png"
                alt="Button Image"
                style={{ width: "30px", height: "auto" }}
              />

              <span className="ms-2">Full Body</span>
            </button>
          </div>

          {/* Button 3 */}
          <div className="col-6 col-sm-4 col-md-3">
            <button className="btn btn-light btn-ripple d-flex align-items-center justify-content-between w-100"
             onClick={() => window.location.href = '/Face'}
            >
              <img
                src="assets/assets/img/face svg.png"
                alt="Button Image"
                style={{ width: "30px", height: "auto" }}
              />

              <span className="ms-2">Face</span>
            </button>
          </div>

          {/* Button 4 */}
          <div className="col-6 col-sm-4 col-md-3">
            <button className="btn btn-light btn-ripple d-flex align-items-center justify-content-between w-100"
             onClick={() => window.location.href = '/Hands'}
            >
              <img
                src="assets/assets/img/hands.png"
                alt="Button Image"
                style={{ width: "30px", height: "auto" }}
              />

              <span className="ms-2">Hands</span>
            </button>
          </div>

          {/* Button 5 */}
          <div className="col-6 col-sm-4 col-md-3">
            <button className="btn btn-light btn-ripple d-flex align-items-center justify-content-between w-100"
            onClick={() => window.location.href = '/Underarms'}
            >
              <img
                src="assets/assets/img/arm.png"
                alt="Button Image"
                style={{ width: "30px", height: "auto" }}
              />
              <span className="ms-2">Underarms</span>
            </button>
          </div>

          {/* Button 6 */}
          <div className="col-6 col-sm-4 col-md-3">
            <button className="btn btn-light btn-ripple d-flex align-items-center justify-content-between w-100"
            onClick={() => window.location.href = '/Legs'}
            >
              <img
                src="assets/assets/img/legs.png"
                alt="Button Image"
                style={{ width: "30px", height: "auto" }}
              />

              <span className="ms-2">Legs</span>
            </button>
          </div>

          {/* Button 7 */}
          <div className="col-6 col-sm-4 col-md-3">
            <button className="btn btn-light btn-ripple d-flex align-items-center justify-content-between w-100"
            onClick={() => window.location.href = '/Back'}
            >
              <img
                src="assets/assets/img/Back (2).png"
                alt="Button Image"
                style={{ width: "30px", height: "auto" }}
              />
              <span className="ms-2">Back</span>
            </button>
          </div>

          {/* Button 8 */}
          <div className="col-6 col-sm-4 col-md-3">
            <button className="btn btn-light btn-ripple d-flex align-items-center justify-content-between w-100"
            onClick={() => window.location.href = '/Bikini'}
            >
              <img
                src="assets/assets/img/bikini.png"
                alt="Button Image"
                style={{ width: "30px", height: "auto" }}
              />
              <span className="ms-2">Bikini</span>
            </button>
          </div>

          {/* Button 9 */}
          <div className="col-6 col-sm-4 col-md-3">
            <button className="btn btn-light btn-ripple d-flex align-items-center justify-content-between w-100"
            onClick={() => window.location.href = '/ChestAbdomin'}
            >
              <img
                src="assets/assets/img/chest and abdomen.png"
                alt="Button Image"
                style={{ width: "30px", height: "auto" }}
              />
              <span className="ms-2">Chest & Abdomen</span>
            </button>
          </div>

          {/* Button 10 */}
          <div className="col-6 col-sm-4 col-md-3">
            <button className="btn btn-light btn-ripple d-flex align-items-center justify-content-between w-100"
            onClick={() => window.location.href = '/Buttocks'}
            >
              <img
                src="assets/assets/img/buttocks.png"
                alt="Button Image"
                style={{ width: "30px", height: "auto" }}
              />
              <span className="ms-2">Buttocks</span>
            </button>
          </div>

          {/* Button 11 */}
          <div className="col-6 col-sm-4 col-md-3">
            <button className="btn btn-light btn-ripple d-flex align-items-center justify-content-between w-100 margin-left-sm"
            onClick={() => window.location.href = '/Packages'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-box-seam"
                viewBox="0 0 16 16"
              >
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
              </svg>
              <span className="ms-2">Packages</span>
            </button>
          </div>
        </div>
      </div>
<div className="text-center">
      <span className="badge rounded-pill bg-light text-dark border">Home Service Available Across
      Banglore</span>
      </div>

      <div
        className="alert alert-primary d-flex align-items-center mt-3"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16"
          role="img"
          aria-label="Warning:"
        >
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div>
          For services exceeding a distance of 15 kilometers, a travel allowance
          will be added to the base rates of ₹499 and ₹899.
        </div>
      </div>

      <div
        className="container d-flex justify-content-center align-items-center"
        //  style{height: 300px; border: 2px solid #000;">
        style={{ marginTop: "20px" }}
      >
        <img
          src="assets\assets\img\home svg (1).svg"
          alt="SVG Image"
          className="img-fluid"
          width="1200"
          height="1200"
        />
      </div>
      <div className="container">
        <h2 className="text-center p-1">Frequently Asked Questions</h2>
      </div>

      <div className="container mt-3">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                is it is a safe method to treat all body areas ?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                All areas of the body like face, hands, legs, back, chest,
                abdomen, bikini, underarms can be safely treated. The laser hair
                reduction procedure is an effective procedure under the guidance
                of our dermatologists.
              </div>
            </div>
          </div>
          <div className="accordion-item mt-1">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                How many LHR sessions are needed to see results ?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Most of our clients will experience an immense change in
                thickness and growth of hair within 8 to 10 sessions. But,
                depending on the client’s age, hair type, and underlying
                hormonal condition, results may vary.
              </div>
            </div>
          </div>
          <div className="accordion-item mt-1">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                How to get started with the laser hair reduction treatment ?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                You can book an online appointment with flawskin or call our
                office. Our customer care team will schedule an appointment with
                our expert dermatologist at your given convenience and preferred
                time.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 mb-4 mb-md-0 mt-3">
        {/* <div class="container my-5"> */}
        <footer className="text-white text-center text-lg-start bg-dark">
          <div className="container p-4">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">About company</h5>

                <p>
                  Welcome to Flawskin Private Limited! Founded in 2024, Flawskin
                  Private Limited is dedicated to providing top-notch laser hair
                  reduction treatments.
                </p>

                <p>
                  Our mission is to help you achieve smooth, hair-free skin with
                  safe, effective, and cutting-edge technology.
                </p>

                <div className=" mt-4  ">
                  <a
                    type="button"
                    href=""
                    className="btn btn-floating btn-warning btn-lg me-2"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>

                  <a
                    type="button"
                    href="https://maps.app.goo.gl/TPrT9JWRdDFD2Cbx8"
                    className="btn btn-floating btn-warning btn-lg me-2"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                  </a>

                  <a
                    type="button"
                    href="https://www.instagram.com/flawskin_?igsh=Y2l2d3cxZ2J1NXhl"
                    className="btn btn-floating btn-warning btn-lg me-2"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <ul className="fa-ul">
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-home"></i>
                    </span>
                    <span className="ms-2">
                      Bangalore, JP Nagar, 7th Phase, 560078
                    </span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className
                      ="fas fa-envelope"></i>
                    </span>
                    <span className="ms-2">contact@flawskin.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-phone"></i>
                    </span>
                    <span className="ms-2">+91 7892644030</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Opening hours</h5>

                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 10pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 10pm</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </footer>
        {/* </div> */}
      </div>
    </div>
  );
}
