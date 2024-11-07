import Hero from '@/components/Hero'
import React from 'react'
import ContactForm from './form'

export async function generateMetadata() {
  return {
    title: "Contact - Techryzer",
    description: "Need any help or assistance? Just connect with techryzer team and get your problem solved instantly!",
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
