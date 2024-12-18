import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>Students</h1>
        <div>
            <Link href="students/1">Rahul</Link>
            <Link href="students/2">Rahul2</Link>
            <Link href="students/3">Rahul3</Link>
            <Link href="students/4">Rahul4</Link>
            <Link href="students/5">Rahul5</Link>
        </div>
    </div>
  )
}

export default page