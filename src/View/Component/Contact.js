import React from 'react';
import ContactForm from './ContactForm';
import Header from './Header';

export default function Contact() {
    return (
        <>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <ContactForm />
                <div>
                    <h2>Contact Us</h2>
                    <p>Company Address: 1234 Job Street, Job City, Job Country</p>
                    <p>Email: contact@jobcompany.com</p>
                </div>
            </div>
        </>
    );
};
