import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Trailsession() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="container col-xl-9">
        <div className="row  widget-content-area bg-light rounded p-4 mt-4">
          {/* SVG Icon Section */}
          <div className="col-md-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-card-checklist"
              viewBox="0 0 16 16"
            >
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
              <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
            </svg>
          </div>
          {/* Text Content Section */}
          <div className="col-md-11">
            <h5 className="text-primary">Trail Session</h5>
            <h5 className="text-dark text" style={{ fontSize: "14px" }}>
              Get smooth, hair-free skin on your underarms with our safe and
              effective laser hair removal treatments.
            </h5>
            <h5 className="text-primary mt-3">Areas</h5>
            <div className="container col-xl-9">
              <div
                className="row  widget-content-area  rounded p-4 mt-4"
                style={{ backgroundColor: "rgba(211, 211, 211, 0.8)" }}
              >
                <h6>Underarms</h6>
                <p>
                  Cost: <del>₹999</del> ₹499
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    fill="none"
                    viewBox="0 0 16 16"
                    style={{ marginBottom: "4px" }}
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="currentColor"
                      stroke-width="1.5"
                      fill="none"
                    />

                    <line
                      x1="8"
                      y1="8"
                      x2="8"
                      y2="3"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />

                    <line
                      x1="8"
                      y1="8"
                      x2="8"
                      y2="2"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />

                    <line
                      x1="8"
                      y1="8"
                      x2="8"
                      y2="1"
                      stroke="red"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    >
                      <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 8 8"
                        to="360 8 8"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </line>
                  </svg>
                  30 Min
                  <div style={{ float: "right", marginLeft: "10px" }}>
                    <img
                      src="assets\assets\img\UNDERARMS.png"
                      alt="Time icon"
                      style={{
                        width: "50px",
                        borderRadius: "20px",
                      }}
                    />
                  </div>
                </p>

                <p>
                  <i className="fa fa-star"> 5.0</i>
                  <a href="https://www.google.com/search?hl=en-IN&amp;gl=in&amp;q=Flawskin+pvt+Ltd,+2,+Rathnamma+Nilayam+3rd+cross,+9th+Main+Rd,+ramappalayout,+Puttenahalli,+Phase+7,+J.+P.+Nagar,+Bengaluru,+Karnataka+560078&amp;ludocid=13967352830529973394&amp;lsig=AB86z5WMNV4S1Zguvz3Qogsomofj&amp;ibp=gwp%3B0,7&amp;authuser=2&amp;hl=en&amp;gl=IN#lkt=LocalPoiReviews&amp;lpg=cid:CgIgAQ%3D%3D">
                    (154 Reviews)
                  </a>
                </p>

                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Pre & Post Care
                </a>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Pre & Post Care
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <h5 className="modal-body text-bg-primary">Pre-laser care.</h5>

                      <div className="p-2">
                      <p>
                        <svg
                          class="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Avoid waxing or thereading prior to 15 days of service.
                      </p>

                      <p>
                        <svg
                          class="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Avoid micro-needling,peels & bleaching prior to 7 days
                        of service.
                      </p>

                      <p>
                        <svg
                          class="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Avoid the use of medicated creams like retinol &
                        steroids prior to 7 days of service.
                      </p>

                      <p>
                        <svg
                          class="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Avoid the laser treatment of you have any
                        openbwounds,cuts,buruises or skin infections.
                      </p>

                      <h5 className="modal-body text-bg-primary">Post-laser care.</h5>
                      <p>
                        <svg
                          class="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Apply high SPF sunscreens (at leat 50) & keep your skin
                        moisturised.
                      </p>

                      <p>
                        <svg
                          class="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Use gentle skin products & refrain from pucking, waxing
                        or threading.
                      </p>

                      <p>
                        <svg
                          class="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Avoid hot baths,saunas & super sweaty activities for at
                        least 2 days after each session.
                      </p>

                      <div className="modal-footer"></div>
                    </div>
                  </div>
                </div>
                </div>

                <div className="col-6  col-xl-4">
                  <a href="https://pages.razorpay.com/pl_OTd3Q2HpTQkzkY/view">
                    <button className="btn btn-primary btn-ripple">
                      <img
                        src="assets\assets\img\UPI-Black.svg"
                        alt="Button Image"
                        style={{ width: "30px", height: "auto" }}
                      />
                      <span className="ms-1">UPI</span>
                    </button>
                  </a>
                </div>

                {/* Button 2 */}
                <div className="col-6 col-xl-4 ">
                  <button
                    className="btn btn-primary btn-ripple"
                    onClick={() =>
                      navigate("/form", {
                        state: { serviceType: "Trailsession" },
                      })
                    }
                  >
                    <img
                      src="assets/assets/img/cod.png"
                      alt="Button Image"
                      style={{ width: "20px", height: "auto", color: "white" }}
                    />

                    <span className="ms-2">COD</span>
                  </button>
                </div>
                {/* <div class="alert alert-primary  mt-3" role="alert">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                    viewBox="0 0 16 16"
                    role="img"
                    aria-label="Warning:"
                  >
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <div>For Re-shedule the Apoinment Please Contact Us.</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
