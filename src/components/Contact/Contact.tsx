import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Gmaps from '../../assets/Gmaps.png';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';

const Contact: React.FC = () => {
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
        setRecaptchaValue(null);
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
                'recaptcha_token': recaptchaValue, // include the token in your request
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
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
            <div className="Contact">
                <div className="contact-header">
                    <h1>
                        CONTACT <span>US</span>
                    </h1>
                    <p>We would love to hear from you! Send us a message.</p>
                </div>
                <div className="contact-container">
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="name-inputs">
                                <input
                                    className='first-name-input'
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required

                                />
                                <input
                                    className='last-name-input'
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
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
                            <textarea
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                            <GoogleReCaptcha onVerify={handleRecaptcha} />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h2>BRIGHTBRIDGE REALTY</h2>
                        <div className="info-item">
                            <i className="fas fa-envelope"></i>
                            <span>brightbridgeone@gmail.com</span>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-phone"></i>
                            <span>+1 (612) 999-0660</span>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>7900 International Drive Suite 300
                                Bloomington, MN 55425</span>
                        </div>
                        <div className="map-container">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.google.com/maps/place/7900+International+Dr,+Bloomington,+MN+55425/@44.8592112,-93.2285661,17z/data=!3m1!4b1!4m6!3m5!1s0x87f62fab792bc727:0xca4ea7fb039453c3!8m2!3d44.8592112!4d-93.2259912!16s%2Fg%2F11s9jz2456"
                            >
                                <img src={Gmaps} alt="map" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </GoogleReCaptchaProvider>
    );
};

export default Contact;
