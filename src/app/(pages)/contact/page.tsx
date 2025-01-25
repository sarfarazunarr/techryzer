import Hero from '@/components/Hero'
import React from 'react'
import ContactForm from './form'

export async function generateMetadata() {
  return {
    title: "Contact Us - Techryzer",
    description:
      "Have questions or need assistance? Get in touch with the Techryzer team for prompt support and expert solutions. We're here to help you succeed!",
  };
  
}

const Contact = () => {
   
  return (
    <section>
        <Hero title='Contact' content='Need Any Service? or help related to our products & services. Just Connect with our team by writing a short message to our team!'  />
        <ContactForm />
        
    </section>
  )
}

export default Contact
