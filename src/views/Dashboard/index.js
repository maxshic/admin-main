import React ,{ useEffect } from 'react'

const Dashboard = ({ title }) => {

  useEffect(() => {
    console.log('aaaa' ,title)
  } ,[])

  return(
    <div>
      Dashboard
        Dashboard
        Dashboard
        Dashboard
        Dashboard
    </div>
  )
}

export default Dashboard