import React, { useState } from 'react';
import classes from "./MyButton.module.css"

const MyButton = ({children, ...props}) => {

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <button {...props}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      className={isHover ? `${classes.myBtn} ${classes.active}` : `${classes.myBtn}`}
    >
        {children}
    </button>
  )
}

export default MyButton;