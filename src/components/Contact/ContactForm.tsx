import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';


const ContactForm: React.FC<{ onContactSubmit: () => void }> = ({ onContactSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Call the sendEmail function
        await sendEmail();

        // Clear the input fields after sending the email
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');


        // Clear the input fields after sending the email
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');

        onContactSubmit();
    };

    const sendEmail = async () => {
        const data = {
            service_id: 'service_241i7lk',
            template_id: 'template_n44i7rm',
            user_id: 'maakvZmBQ2cdSzAF7',
            template_params: {
                'reply_to': email,
                'from_name': `${firstName} ${lastName}`,
                'phoneNumber': phone,
                'message': message,
            },
        };

        try {
            const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 200) {
                alert('Your mail is sent!');
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            alert('Oops... ' + JSON.stringify(error));
        }
    };


    return (
        
                <div className="contact-form">
                    <div className="contact-header" >
                <h1>
                    CONTACT <span>US</span>
                </h1>
                <p>We would love to hear from you! Send us a message.</p>
            </div>
                    <form onSubmit={handleSubmit}>
                        <div className="name-inputs">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
               
           
    );
};

export default ContactForm;