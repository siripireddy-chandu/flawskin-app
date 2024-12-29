import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [serviceOptions, setServiceOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwL6z5OQSsHc-Uak3jsjJNBcWcQWZdmwFZiOcmIadYu2JGNiqGuchl1Si2xS_NW_ibD/exec";
  const serviceType = location.state?.serviceType || "Trailsession";
  useEffect(() => {
    let options = [];
    if (serviceType === "Trailsession") {
      options = ["Trail-Session [ Underarms ]"];
    } else if (serviceType === "Fullbody") {
      options = [
        "Full Body 5 Body Parts",
        "Full Body 5 Body Parts sessions - 3",
        "Full Body 5 Body Parts sessions - 6",
        "Full Body 8 Body Parts",
        "Full Body 8 Body Parts sessions - 3",
        "Full Body 8 Body Parts sessions - 6",
      ];
    } else if (serviceType === "Face") {
      options = [
        "Upper Lip",
        "Chin",
        "Upper Neck",
        "Side Lock",
        "Cheeks",
        "Full Face",
      ];
    } else if (serviceType === "Underarms") {
      options = ["Underarms"];
    } else if (serviceType === "Hands") {
      options = ["Hands"];
    } else if (serviceType === "Legs") {
      options = ["Legs"];
    } else if (serviceType === "Back") {
      options = ["Back"];
    } else if (serviceType === "Bikini") {
      options = ["Bikini"];
    } else if (serviceType === "ChestAbdomin") {
      options = ["Chest & Abdomin"];
    } else if (serviceType === "Buttocks") {
      options = ["Buttocks"];
    } else if (serviceType === "Packages") {
      options = [
        "Full Legs + Hands + Underarms",
        "Full Legs + Underarms + Bikini",
        "Full Face + Underarms",
        "Bikini + Buttocks",
        "Full Face + Bikini",
        "Full Front + Full Back",
        "Full Hands + Underarms",
        "Full Hands + Full Legs",
      ];
    }

    setServiceOptions(options);
  }, [serviceType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // Validation logic (as described previously)
    const number = formData.number;
    const numberPattern = /^[6-9]\d{9}$/;
    const dateTime = formData.date;
    const selectedDate = new Date(dateTime);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to 00:00:00 for comparison

    if (!numberPattern.test(number)) {
      Swal.fire({
        icon: "error",
        title: "Invalid phone number",
        text: "Mobile number should start with 6, 7, 8, or 9 and be 10 digits long.",
      });
      setLoading(false);
      return;
    }

    if (selectedDate < today) {
      Swal.fire({
        icon: "error",
        title: "Invalid date",
        text: "The date and time cannot be earlier than today's date.",
      });
      setLoading(false);
      return;
    }

    // Prepare form data for submission
    const form = new FormData();
    form.append("name", formData.name);
    form.append("number", formData.number);
    form.append("email", formData.email);
    form.append("services", formData.service); // Change 'service' to 'services'
    form.append("Date Time", `${formData.date} ${formData.time}`); // Combine date and time
    form.append("location", formData.message); // Change 'message' to 'location'

    // Submit the form
    fetch(scriptURL, { method: "POST", body: form })
      .then((response) => {
        // Show success Toast
        Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        }).fire({
          icon: "success",
          title: "Your order has been confirmed!",
        });

        setLoading(false);

        // Reset the form and navigate to home
        setFormData({
          name: "",
          number: "",
          email: "",
          service: "",
          date: "",
          message: "",
        });

        navigate("/home");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "There was an error submitting your form. Please try again.",
        });
        setLoading(false);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="card p-4">
        <h3 className="text-primary mb-4">Pay On Service</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="number" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="service" className="form-label">
              Select Service
            </label>
            <select
              className="form-select"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Choose...</option>
              {serviceOptions.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Select Time</label>
            <input
              type="time"
              className="form-control"
              id="time"
              name="time" // Add this
              value={formData.time} // Add this
              onChange={handleChange} // Add this
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Location
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Share Your Exact Location along with the pincode and door number"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary me-2"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/home")}
          >
            Back
          </button>
        </form>
      </div>

      {/* Loading Spinner - SVG */}
      {loading && (
        <div
          className="loading-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
          }}
        >
          <svg
            version="1.1"
            id="L5"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            xmlSpace="preserve"
            style={{
              width: "50px",
              height: "50px",
            }}
          >
            <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 15 ; 0 -15; 0 15"
                repeatCount="indefinite"
                begin="0.1"
              />
            </circle>
            <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 10 ; 0 -10; 0 10"
                repeatCount="indefinite"
                begin="0.2"
              />
            </circle>
            <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.3"
              />
            </circle>
          </svg>
        </div>
      )}
    </div>
  );
};

export default FormPage;



