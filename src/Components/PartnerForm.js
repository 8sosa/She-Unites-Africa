import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formType, setFormType] = useState('partner');

  // Handle the change between Partner and Volunteer
  const handleTypeChange = (e) => {
    setFormType(e.target.value);
  };

  return (
    <form name="registration" action="/Collaborations" method="POST" data-netlify="true" className='regisForm mont'>
      {/* Hidden input required for Netlify Forms */}
      <input type="hidden" name="form-name" value="registration" />
      
      <h2 className='homeSectionTitle mb-4 tac mont'>Register as {formType === 'partner' ? 'Partner' : 'Volunteer'}</h2>
      
      <p>
        <label className='gap-2'>
          Registration Type: 
          <select name="registrationType" value={formType} onChange={handleTypeChange} className='ddown'>
            <option value="partner">Partner</option>
            <option value="volunteer">Volunteer</option>
          </select>
        </label>
      </p>
      
      <p>
        <label>
          Your Name: 
          <input type="text" name="name" className='inputField' placeholder='Jane Joella' required />
        </label>
      </p>
      
      <p>
        <label>
          Your Email:
          <input type="email" name="email" className='inputField' placeholder='JaneJoella@test.com' required />
        </label>
      </p>
      
      {/* Partner-specific field */}
      {formType === 'partner' && (
        <p>
          <label>
            Company:
            <input type="text" name="company" className='inputField' placeholder='Joella Inc'/>
          </label>
        </p>
      )}
      
      {/* Volunteer-specific fields */}
      {formType === 'volunteer' && (
        <>
          <p>
            <label>
              Phone:
              <input type="text" name="phone" className='inputField' placeholder='+23412121212'/>
            </label>
          </p>
          <p>
            <label>
              Skills (comma separated):
              <input type="text" name="skills" className='inputField' placeholder='public speaking, copy writing'/>
            </label>
          </p>
          <p>
            <label>
              Availability:
              <input type="text" name="availability" className='inputField' placeholder='Weekdays'/>
            </label>
          </p>
        </>
      )}
      
      <p>
        <label>
          Message:
          <textarea name="message" className='inputField' placeholder="Hi, I'd like to..."required></textarea>
        </label>
      </p>
      
      <p className='tac'>
        <button type="submit" className='atcBtn'>Send</button>
      </p>
      
      {/* {status && <p>{status}</p>} */}
    </form>
  );
};

export default RegistrationForm;