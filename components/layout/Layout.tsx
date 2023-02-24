import React, { useState} from 'react';
/* import TopNavbar from  */
/* import Footer from  */

export default function Layout ({children}: {children: React.ReactNode}){
  return (
   <>
   <main>
    {children}
   </main>
   </>
  )
}

