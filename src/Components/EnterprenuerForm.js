import React from 'react'

const EnterprenuerForm = () => {
  return (
    <form name="EnterprenuerForm" action="/Collaborations" method="POST" data-netlify="true" className='regisForm mont'>
      {/* Hidden input required for Netlify Forms */}
    <input type="hidden" name="form-name" value="EnterprenuerForm" />      
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
        Country:
        <input type="text" name="country" className='inputField' placeholder='Nigeria'/>
    </label>
    </p>
    <p>
    <label>
        Have you run a business before?
        <select name="business_experience" className='inputField' required>
            <option value="">Select One</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
    </label>
    </p>
    <p>
    <label>
        What field are you interested in??
            <input type="checkbox" id='coding' name='field[]' value="coding"/>
            <input type="checkbox" id='writing' name='field[]' value="writing"/>
            <input type="checkbox" id='fashion' name='field[]' value="fashion"/>
            <input type="checkbox" id='farming' name='field[]' value="farming"/>
    </label>
    </p>
    <p>
    <label>
       Do you have prior experience in this (these) field(s)?
        <select name="prior_experience" className='inputField' required>
            <option value="">Select One</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select>
    </label>
    </p>
    <p>
    <label>
        Why do you want to join SUA Business?
        <textarea name="reason" className='inputField' rows="4" required></textarea>
    </label>
    </p>
    <p>
    <label>
        What are your short-term and long-term business goals?
        <textarea name="goals" className='inputField' rows="4" required></textarea>
    </label>
    </p>
      
      <p className='tac'>
        <button type="submit" className='atcBtn'>Send</button>
      </p>
    </form>
  )
};

export default EnterprenuerForm;