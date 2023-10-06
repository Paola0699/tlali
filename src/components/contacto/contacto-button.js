import { Button } from '@mui/material'
import { Rufina } from 'next/font/google';
import React from 'react'
const rufina = Rufina({ subsets: ["latin"], weight: "400" });

const ContactoButton = () => {
  return (
    <Button
      style={{ borderColor: "#665959", color: "#665959", marginTop: "2rem", fontFamily:'Rufina' }}
      variant="outlined"
      className={rufina.className}
    >
     Suscríbete
    </Button>
  )
}

export default ContactoButton