import React ,{ useEffect } from 'react'

const guard = (props) => {
  
  return (Wrap) => {
    // useEffect(() => {
    //   console.log('props' ,props)
    // } ,[props])
    return <Wrap />
  }
}

export default guard