import React, { use } from 'react'

const page = ({params}) => {
    const {lecture} = use(params)
    console.log(lecture);
    
  return (
    <div>Study lecture : {lecture[0]} : {lecture[1]}</div>
  )
}

export default page