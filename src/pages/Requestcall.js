import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

const Requestcall = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    service: "",
    time: "",
    date: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const number = formData.number;
    const numberPattern = /^[6-9]\d{9}$/;
    const dateTime = formData.date;
    const selectedDate = new Date(dateTime);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to 00:00:00 for comparison

    // Validate phone number
    if (!numberPattern.test(number)) {
      Swal.fire({
        icon: "error",
        title: "Invalid phone number",
        text: "Mobile number should start with 6, 7, 8, or 9 and be 10 digits long.",
      });
      setLoading(false);
      return;
    }

    // Validate date
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
    const scriptURL = "https://script.google.com/macros/s/AKfycbyvsMcypP9XB-5uZlFA6CjtMy6KsdR4FwexMKcdmwl0meRun7XTYtjSal43Jxan1V07/exec"; // Replace with your Web App URL
    const form = new FormData();
    form.append("name", formData.name);
    form.append("number", formData.number);
    form.append("email", formData.email);
    form.append("service", formData.service);
    form.append("time",formData.time);
    form.append("date", formData.date);
    

    // Submit the form
    try {
      const response = await fetch(scriptURL, { method: "POST", body: form });
      if (response.ok) {
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
          title: "Our Theripest Will Contact You Soon",
        });

        // Reset the form and navigate to home
        setFormData({
          name: "",
          number: "",
          email: "",
          service: "",
          time: "",
          date: "",
        
        });
        setLoading(false);
        navigate("/home");
      } else {
        throw new Error("Failed to submit the form");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error submitting your form. Please try again.",
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="card p-4">
        <h3 className="text-primary mb-4">Request A Call</h3>
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
              className="form-control"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Choose...</option>
              <option value="Face">Face</option>
              <option value="Neck">Neck</option>
              <option value="Underarms">Underarms</option>
              <option value="Hands">Hands</option>
              <option value="Legs">Legs</option>
              <option value="Back">Back</option>
              <option value="Bikini">Bikini</option>
              <option value="Chest & Abdomen">Chest & Abdomen</option>
              <option value="Buttocks">Buttocks</option>
              <option value="Full Legs + Full Hands + Underarms">
                Full Legs + Full Hands + Underarms
              </option>
              <option value="Full Face + Underarms">Full Face + Underarms</option>
              <option value="Bikini + Buttocks">Bikini + Buttocks</option>
              <option value="Full Face + Bikini">Full Face + Bikini</option>
              <option value="Full Front + Full Back">Full Front + Full Back</option>
              <option value="Full Hands + Underarms">Full Hands + Underarms</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="time">Select Time</label>
            <input
              type="time"
              className="form-control"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
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
          
 
          <button className="col-12 btn btn-primary"
            type="submit"
            
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
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

export default Requestcall;
