import React from 'react'

export const Footer = ({footer}) => {
    return (
      <>
      <div>   
          <h2>{footer.welcome}</h2>
          <h1>{footer.hey} {footer.title}</h1>
          <h1>{footer.no} {footer.regno}</h1>
      </div>
      </>
    )
  }

export default Footer