import React from 'react'
import Link from 'next/link'

const cont = () => {
  return (
    <div className='cont'>
        <p className='cont_text'>Start your business journey better with<b> SEVENZON</b> </p>
        <button className='cont_btn'>
        <Link class='name_nav' href="/contact">Connect with us</Link></button>
    </div>
  )
}

export default cont