import React from "react";
import Navbar from "./Navbar";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <section className="about-us py-5 bg-light">
        <div className="container">
          <h2 className="text-primary mb-4">About Us</h2>

          <p className="text-muted">
            Welcome to Flawskin Private Limited! Founded in 2024, Flawskin
            Private Limited is dedicated to providing top-notch laser hair
            reduction treatments. Our mission is to help you achieve smooth,
            hair-free skin with safe, effective, and cutting-edge technology.
          </p>

          <h2 className="text-primary mb-4">Our Vision</h2>

          <p className="text-muted">
            At Flawskin, we believe that everyone deserves to feel confident in
            their skin. Our vision is to become a leading provider of laser hair
            reduction services, renowned for our commitment to excellence and
            customer satisfaction.
          </p>

          <h2 className="text-primary mb-4">Our Services</h2>

          <p className="text-muted">
            We specialize in laser hair reduction treatments tailored to meet
            the unique needs of each client. Our state-of-the-art technology and
            highly trained professionals ensure that you receive the best care
            possible.
          </p>
        </div>
      </section>

      <section className="team  bg-white">
        <div className="container">
          <h4 className="fw-bold">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 29 29"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                strokeWidth="2"
                d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              />
            </svg>
            Our Team
          </h4>

          <div className="card" >
            <img
              className="card-img w-50 mx-auto mt-3 "
              src="assets\assets\img\therapist-founder.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Bandi Nandhini</h5>
              <p className="card-text">
                A highly talented therapist in Flawskin, with extensive
                experience and a deep understanding of laser hair reduction.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-clipboard-plus-fill"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm4.5 6V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5a.5.5 0 0 1 1 0" />
                </svg>
                Skin Therapist
              </li>
              <li className="list-group-item">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                  />

                  <circle cx="8" cy="5" r="0.5" fill="white">
                    <animate
                      attributeName="opacity"
                      values="0;0.8;0"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="r"
                      values="0.4;0.6;0.4"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  <circle cx="16" cy="6" r="0.5" fill="white">
                    <animate
                      attributeName="opacity"
                      values="0;0.8;0"
                      dur="1.5s"
                      repeatCount="indefinite"
                      begin="0.3s"
                    />
                    <animate
                      attributeName="r"
                      values="0.4;0.7;0.4"
                      dur="1.5s"
                      repeatCount="indefinite"
                      begin="0.3s"
                    />
                  </circle>

                  <circle cx="12" cy="12" r="0.5" fill="white">
                    <animate
                      attributeName="opacity"
                      values="0;0.8;0"
                      dur="1.5s"
                      repeatCount="indefinite"
                      begin="0.6s"
                    />
                    <animate
                      attributeName="r"
                      values="0.4;0.8;0.4"
                      dur="1.5s"
                      repeatCount="indefinite"
                      begin="0.6s"
                    />
                  </circle>

                  <circle cx="18" cy="16" r="0.5" fill="white">
                    <animate
                      attributeName="opacity"
                      values="0;0.8;0"
                      dur="1.5s"
                      repeatCount="indefinite"
                      begin="0.9s"
                    />
                    <animate
                      attributeName="r"
                      values="0.4;0.6;0.4"
                      dur="1.5s"
                      repeatCount="indefinite"
                      begin="0.9s"
                    />
                  </circle>
                </svg>
                5+ years experience
              </li>
            </ul>
            {/* <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
