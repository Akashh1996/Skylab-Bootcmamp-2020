import React, { useState } from 'react';
import './contact.css';

function Contact () {
  const [valueEmail, setValueEmail] = useState('');

  function goHome () {
    setTimeout(function () { window.location.href = 'http://localhost:3000/'; }, 3000);
  }

  function send (event) {
    event.preventDefault();
    if (valueEmail) {
      document.querySelector('.contact-form').innerHTML = '<p>Thank you for contacting us.</p>';
      goHome();
    }
  }

  return (
        <>
        <div className="contact-form">
            <form action="/action_page.php">
                <label htmlFor="fname">First name:</label> <br />
                <input type="text" id="fname" name="fname" /><br /><br />
                <label htmlFor="lname">Last name:</label> <br />
                <input type="text" id="lname" name="lname" /><br /><br />
                <label htmlFor="mail">E-mail:</label> <br />
                <input type="text" name="mail" value={valueEmail} onChange={(event) => { event.preventDefault(); setValueEmail(event.target.value); }} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" className="email" required></input><br /><br />
                <textarea name="textarea" rows="10" cols="50"></textarea> <br />
                <input type="submit" value="Submit" id= "submit-btn" className="submit-btn" onClick={(event) => send(event)} />
                <input type="reset" value="Clear" className="clear-btn"></input>
            </form>
        </div>
        </>
  );
}
export default Contact;
