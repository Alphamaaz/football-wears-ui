import React, { useState } from "react";
import "../styles/Support.css";

interface SupportType{
  name:string,
  email:string,
  orderId:string,
  issue:string
}
const Support:React.FC = () => {
  const [formData, setFormData] = useState<SupportType>({
    name: "",
    email: "",
    orderId: "",
    issue: "",
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Support Request Submitted:", formData);
    alert("Thanks for contacting support! We'll get back to you shortly.");
  };

  return (
    <div className="support-wrapper">
      <div className="support-container">
        <h2>Customer Support</h2>
        <p className="support-subtext">
          Need help? Fill in the form and we’ll reach out shortly.
        </p>
        <form onSubmit={handleSubmit} className="support-form">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="orderId">Order ID (optional)</label>
            <input
              type="text"
              name="orderId"
              id="orderId"
              placeholder="#123456"
              value={formData.orderId}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="issue">Describe your issue</label>
            <textarea
              name="issue"
              id="issue"
              placeholder="Explain your issue in detail..."
              value={formData.issue}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="support-btn">
            Submit Support Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
