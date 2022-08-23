import { Link } from '@inertiajs/inertia-react';
import React from 'react'

const Welcome = (props) => {
  return (
    <>
      <div className='text-center text-3xl text-red-400 my-10'>{props.title}</div>
      <Link href='/test' >Test</Link>
    </>
  )
}

export default Welcome