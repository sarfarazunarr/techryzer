import Hero from '@/components/Hero'
import React from 'react'
import ContactForm from './form'
const Contact = () => {
   
  return (
    <section>
        <Hero title='Contact' content='Need Any Service? or help related to our products & services. Just Connect with our team by writing a short message to our team!'  />
        <ContactForm />
        
    </section>
  )
}

export default Contact
