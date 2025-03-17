import React from 'react';

const VolunteerForm = () => {
  return (
    <form name="VolunteerForm" action="/Collaborations" method="POST" data-netlify="true" className='regisForm mont'>
      {/* Hidden input required for Netlify Forms */}
    <input type="hidden" name="form-name" value="VolunteerForm" />      
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
    <p>
    <label>
        Message:
        <textarea name="message" className='inputField' placeholder="Hi, I'd like to..."required></textarea>
    </label>
    </p>
      
      <p className='tac'>
        <button type="submit" className='atcBtn'>Send</button>
      </p>
    </form>
  );
};

export default VolunteerForm;