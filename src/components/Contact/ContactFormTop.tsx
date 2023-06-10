import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';

const ContactFormTop: React.FC<{ onContactSubmit: () => void }> = ({ onContactSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);


    const handleRecaptcha = (token: string) => {
        setRecaptchaValue(token);
    };

    const reCaptchaKey = process.env.REACT_APP_RECAPTCHA_KEY;
    if (!reCaptchaKey) {
        throw new Error("REACT_APP_RECAPTCHA_KEY environment variable not set");
    }

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
        setRecaptchaValue(null);
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
                'recaptcha_token': recaptchaValue,
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
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
            <div className="contact-top-form-details">
                <form onSubmit={handleSubmit}>
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
                    <div className='name-inputs'>
                        <input
                            type="email"
                            pattern="\S+@\S+\.\S+"
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
                    <textarea
                        className='top-message-input'
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <GoogleReCaptcha onVerify={handleRecaptcha} />
                    <button type="submit" className='top-button'>Submit</button>
                </form>
            </div>

        </GoogleReCaptchaProvider>
    );
};

export default ContactFormTop;