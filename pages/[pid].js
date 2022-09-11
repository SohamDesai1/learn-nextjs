import React from 'react'
import { useRouter } from 'next/router'

const pid = () => {
const router = useRouter();
const no = router.query.pid;
    return (
    <>
     <h1>this is a {no}</h1> 
    </>
  )
}

export default pid
