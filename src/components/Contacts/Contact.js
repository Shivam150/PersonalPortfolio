import React, { useState } from "react";
import '../../styles/Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    //     if (!name || !email || !message){
    //         alert('Please fill out all fields');
    //         return;
    //         };
    //     fetch('/api',{
    //      method: 'POST',
    //     body : JSON.stringify({
    //      name , email, message
    //      })
    //     }).then(res =>{
    //      console.log("Success");
    //     window.location='/contact'
    // });
};

// function handleChangeName(event) {
//         event.persist();//this is to prevent the value of input field changing after submiting form
//         event.persist();
//         setName((prevState)=> prevState=event.target.value);

// }

// function handleChangeEmail(event) {
//             event.persist();
//             setEmail((prevState)= prevState+event.target.value );
                                
// }

// function handleChangeMessage(event) {
//             event.persist();
//             setMessage((prevState)=>{
//             let newMessage = prevState + event.target.value ;
                                        
//             return  newMessage});
// }
                                        
        // You can implement the code to send the message to the owner's email or server here
        

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
            <div className="contact-form">
                <h2 className="msg">Send a Message</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group1">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group2">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group3">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <dev className="button">
                    <button type="submit">Submit</button>
                    </dev>
                </form>
            </div>
        </section>
    );
}

export default Contact;
