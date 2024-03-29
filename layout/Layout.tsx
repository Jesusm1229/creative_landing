import Footer from '@components/Footer';
import TopNavBar from '@components/TopNavbar';
import React from 'react';



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNavBar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

