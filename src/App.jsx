
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    course: "",
    year: "",
    address: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData({ ...formData });
  }

  function handleReset() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      gender: "",
      course: "",
      year: "",
      address: ""
    });

    setSubmittedData(null);
  }

  return (
    <main className="registration-app">
      <header className="hero">
        <div className="brand">
          <div className="brand-logo">SR</div>
          <span>STUDENT SERVICES / REGISTRATION</span>
        </div>

        <div className="hero-content">
          <p className="eyebrow">ACADEMIC SESSION 2026–27</p>
          <h1>Student <em>Registration.</em></h1>
          <p className="hero-description">
            Begin your academic journey. Complete the form
            below to register your student details.
          </p>
        </div>

        <div className="hero-footer">
          <span>LEARN · GROW · ACHIEVE</span>
          <span>REGISTRATION FORM / 001</span>
        </div>
      </header>

      <section className="form-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PERSONAL INFORMATION</p>
            <h2>Registration Details</h2>
          </div>
          <span className="required-note">* Required fields</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="student@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone Number *</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                maxLength={10}
                title="Enter a 10-digit phone number"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="gender">Gender *</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">
                  Prefer not to say
                </option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="course">Course *</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select your course</option>
                <option value="BCA">BCA</option>
                <option value="BCA Honours">BCA Honours</option>
                <option value="BBA">BBA</option>
                <option value="B.Sc. IT">B.Sc. IT</option>
                <option value="MCA">MCA</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="year">Academic Year *</label>
              <select
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              >
                <option value="">Select academic year</option>
                <option value="First Year">First Year</option>
                <option value="Second Year">Second Year</option>
                <option value="Third Year">Third Year</option>
                <option value="Fourth Year">Fourth Year</option>
              </select>
            </div>

            <div className="field full-width">
              <label htmlFor="address">Address *</label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter your complete address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="reset-button"
              onClick={handleReset}>
              Clear Form
            </button>

            <button type="submit" className="submit-button">
              Submit Registration <span>→</span>
            </button>
          </div>
        </form>

        {submittedData && (
          <section className="result-card" aria-live="polite">
            <div className="result-heading">
              <div className="success-mark">✓</div>
              <div>
                <p className="eyebrow">SUBMISSION COMPLETE</p>
                <h2>Registration Summary</h2>
              </div>
            </div>

            <p className="result-description">
              Your form has been submitted successfully.
              Here are the details you entered.
            </p>

            <div className="result-grid">
              <div className="result-item">
                <span>Full Name</span>
                <strong>{submittedData.name}</strong>
              </div>

              <div className="result-item">
                <span>Email Address</span>
                <strong>{submittedData.email}</strong>
              </div>

              <div className="result-item">
                <span>Phone Number</span>
                <strong>{submittedData.phone}</strong>
              </div>

              <div className="result-item">
                <span>Gender</span>
                <strong>{submittedData.gender}</strong>
              </div>

              <div className="result-item">
                <span>Course</span>
                <strong>{submittedData.course}</strong>
              </div>

              <div className="result-item">
                <span>Academic Year</span>
                <strong>{submittedData.year}</strong>
              </div>

              <div className="result-item full-width">
                <span>Address</span>
                <strong>{submittedData.address}</strong>
              </div>
            </div>
          </section>
        )}

        <footer className="page-footer">
          <span>STUDENT SERVICES / REACT PRACTICAL</span>
          <span>ARMY GREEN × IVORY</span>
        </footer>
      </section>
    </main>
  );
}

export default App;
