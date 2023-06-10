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
            service_id: process.env.REACT_APP_SERVICE_ID,
            template_id: process.env.REACT_APP_TEMPLATE_ID_M,
            user_id: process.env.REACT_APP_USER_ID,
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
                alert('Thanks for your contact. You can use the mortgage calculator now');
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            alert('Oops... ' + JSON.stringify(error));
        }
    };


    return (

        <div className="contact-form-details">
            <form onSubmit={handleSubmit}>
                <div className="contact-header-form" >
                    <p>Add your contact information to access our Mortgage Calculator</p>
                </div>
                <div className="name-inputs">
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className='email-phone-inputs'>
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>


    );
};

export default ContactForm;