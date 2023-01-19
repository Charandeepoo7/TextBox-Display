import React from 'react'
import Footer from './Footer'

export const AddTitle = (props) => {
  return (
    <div>
        {
        props.footer.length===0? "No text to display":
        props.footer.map((footer)=>{
            return (<Footer footer={footer} key={footer.title} />)
        })}
      
    </div>
  )
}

export default AddTitle