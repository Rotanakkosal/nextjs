import { useRouter } from 'next/router'
import React from 'react'

export default function productid() {

     const router = useRouter();

     
     console.log("Path name : ",router.pathname);
     console.log("Router something : ",router.query);
  return (
     <div>
          Hello from dynamic product id :
     </div>

     )
}
