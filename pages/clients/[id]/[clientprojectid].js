import { useRouter } from 'next/router'
import React from 'react'

export default function clientprojectid() {
     const router = useRouter();

     console.log(
          "Router URL : ",router.query
     )
  return (
    <div>The project page for a specific project for a selected client :</div>
  )
}
