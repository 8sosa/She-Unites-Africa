import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formType, setFormType] = useState('partner');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     phone: '',
//     skills: '',
//     availability: '',
//     message: ''
//   });
//   const [status, setStatus] = useState('');

  // Handle the change between Partner and Volunteer
  const handleTypeChange = (e) => {
    setFormType(e.target.value);
  };

  // Update form state on input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

  // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Select API endpoint and payload based on the form type
//     const url = formType === 'partner' ? '/api/partners' : '/api/volunteers';
//     const payload =
//       formType === 'partner'
//         ? {
//             name: formData.name,
//             email: formData.email,
//             company: formData.company,
//             message: formData.message
//           }
//         : {
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//             skills: formData.skills.split(',').map((s) => s.trim()),
//             availability: formData.availability,
//             message: formData.message
//           };

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setStatus(data.message);
//         // Reset form fields
//         setFormData({
//           name: '',
//           email: '',
//           company: '',
//           phone: '',
//           skills: '',
//           availability: '',
//           message: ''
//         });
//       } else {
//         setStatus('Submission failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setStatus('Submission failed. Please try again.');
//     }
//   };

  return (
    <form 
        // onSubmit={handleSubmit} 
        name="registration" method="POST" netlify
    >
      {/* Hidden input required for Netlify Forms */}
      <input type="hidden" name="form-name" value="registration" />
      
      <h2>Register as {formType === 'partner' ? 'Partner' : 'Volunteer'}</h2>
      
      <p>
        <label>
          Registration Type:
          <select name="registrationType" value={formType} onChange={handleTypeChange}>
            <option value="partner">Partner</option>
            <option value="volunteer">Volunteer</option>
          </select>
        </label>
      </p>
      
      <p>
        <label>
          Your Name: 
          <input type="text" name="name" required />
        </label>
      </p>
      
      <p>
        <label>
          Your Email:
          <input type="email" name="email" required />
        </label>
      </p>
      
      {/* Partner-specific field */}
      {formType === 'partner' && (
        <p>
          <label>
            Company:
            <input type="text" name="company" />
          </label>
        </p>
      )}
      
      {/* Volunteer-specific fields */}
      {formType === 'volunteer' && (
        <>
          <p>
            <label>
              Phone:
              <input type="text" name="phone" />
            </label>
          </p>
          <p>
            <label>
              Skills (comma separated):
              <input type="text" name="skills" />
            </label>
          </p>
          <p>
            <label>
              Availability:
              <input type="text" name="availability" />
            </label>
          </p>
        </>
      )}
      
      <p>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
      </p>
      
      <p>
        <button type="submit">Send</button>
      </p>
      
      {/* {status && <p>{status}</p>} */}
    </form>
  );
};

export default RegistrationForm;