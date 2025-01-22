import React from 'react'

const Background = ({children}) => {
  return (
    <div className='min-h-screen w-full bg-background text-foreground font-jakarta'>{children}</div>
  )
}

export default Background