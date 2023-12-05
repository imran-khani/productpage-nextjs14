import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Home