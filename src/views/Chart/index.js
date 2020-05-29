import React ,{ useState } from 'react'
import { Button } from 'antd'

const View = () => {

  const [visible ,setVisible] = useState(false)

  const btnClick = () => {
    setVisible(!visible)
  }

  return(
    <div>
      {visible ? 1:2}
      <Button onClick={() => btnClick()} >button</Button>
    </div>
  )
}

export default View