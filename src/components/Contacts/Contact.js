import React from 'react';

function Contact() {
  const handleSendEmail = (e) => {
    e.preventDefault();
    // Handle sending email logic here
    console.log('Send email logic');
  };

  return (
    <section className="contact">
        <h2>Contact</h2>
      {/* <form className="form" onSubmit={handleSignUp}>
        <label>Full Name: </label>
        <input type="text" required name="name" placeholder="Enter your full name" /><br />
        <label>Email: </label>
        <input type="email" required name="email" placeholder="Enter your email" /><br />
        <label>Password: </label>
        <input type="password" required name="password" placeholder="Enter your Password" /> <br />
        <button type="submit">Sign Up</button>
      </form> */}

      <form className="form" onSubmit={handleSendEmail}>
        <label>Full Name: </label>
        <input type="text" required name="fullName" placeholder="Enter your full name" /><br />
        <label>Email: </label>
        <input type="email" required name="email" placeholder="Enter your email" /><br />
        <label>Mobile No: </label>
        <input type="tel" required name="mobileNo" placeholder="Enter your mobile number" /><br />
        <label>Subject: </label>
        <input type="text" required name="subject" placeholder="Enter the email subject" /><br />
        <label>Message: </label>
        <textarea required name="message" placeholder="Type your message here"></textarea><br />
        <button type="submit">Send Email</button>
      </form>
    </section>
  );
}

export default Contact;
