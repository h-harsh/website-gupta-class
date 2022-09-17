import React from 'react'
import Hero from './Hero'
import Courses from './Courses'
import { Instructor } from './Instructor'

function HomePage() {
  return (
    <div>
        <Hero />
        <Courses title={'Featured Courses'} />
        <Instructor title={'Meet your Instructor'} />
    </div>
  )
}

export default HomePage