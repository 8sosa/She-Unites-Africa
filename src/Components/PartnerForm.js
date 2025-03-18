import React from 'react';

const PartnerForm = () => {
  return (
    <form name="PartnerForm" action="/Collaborations" method="POST" data-netlify="true" className='regisForm mont'>
      {/* Hidden input required for Netlify Forms */}
      <input type="hidden" name="form-name" value="PartnerForm" />
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
        Company:
        <input type="text" name="company" className='inputField' placeholder='Joella Inc'/>
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

export default PartnerForm;