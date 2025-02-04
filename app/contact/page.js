"use client"
import React from "react";
import Head from "next/head";

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact Us - Your Website</title>
                <meta name="description" content="Get in touch with us for any inquiries or support." />

                {/* Open Graph Meta Tags (for Social Media like WhatsApp, Facebook) */}
                <meta property="og:title" content="Contact Us - Your Website" />
                <meta property="og:description" content="Reach out to us for any inquiries or support." />
                <meta property="og:image" content="/images/contact-og-image.jpg" />
                <meta property="og:url" content="https://yourwebsite.com/contact" />
                <meta property="og:type" content="website" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:title" content="Contact Us - Your Website" />
                <meta name="twitter:description" content="Reach out to us for any inquiries or support." />
                <meta name="twitter:image" content="/images/contact-og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <div>
                Contact Page
            </div>
        </>
    );
};

export default ContactPage;
