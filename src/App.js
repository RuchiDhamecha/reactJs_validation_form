import logo from './logo.svg';


import React, { useState } from 'react';
import './App.css'; // Assuming you have a separate CSS file named 'Form.css'

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    agreement: false,
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="form-container">
      <h2>-- Form --</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
            />
            I agree to the terms and conditions.
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <p>
            Name: <strong>{submittedData.name}</strong>
          </p>
          <p>
            Email: <strong>{submittedData.email}</strong>
          </p>
          <p>
            Gender: <strong>{submittedData.gender}</strong>
          </p>
          <p>
            Agreement: <strong>{submittedData.agreement ? 'Yes' : 'No'}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
