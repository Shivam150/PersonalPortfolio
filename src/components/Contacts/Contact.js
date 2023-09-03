// import React, { useState } from "react";
import '../../styles/Contact.css';

function Contact() {
    return (
        <section className="contact">
            <div className="email">
                <h1>Contact me</h1>
                <p>Do not hesitate to connect with me</p>
                <h3>Email:</h3>
                <a href="mailto:shivamsingh3754966@gmail.com">
                    <i className="fas fa-envelope"></i>shivamsingh3754966@gmail.com
                </a>
                <h4>Phone No:</h4>
                <span>+91 6387433923</span>
            </div>
        </section>
    );
}

export default Contact;
