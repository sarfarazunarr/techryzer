import React from 'react'
import NewFeatureBanner from '../components/NewFeatureBanner'
import Gradbg from '../components/Gradbg'

const page = () => {
  return (
    <section className='pt-40 pb-28 relative isolate overflow-hidden bg-gray-900'>
    <Gradbg />
    <NewFeatureBanner />
  </section>
  )
}

export default page
