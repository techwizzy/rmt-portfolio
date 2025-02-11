import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Speech = () => {
  return (
    <div className='bubbleContainer'>
      <div className="bubble">
        <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                500,
                'We produce food for Mice', // initially rendered starting point
                1000,
                'We produce food for Hamsters',
                1000,
                'We produce food for Guinea Pigs',
                1000,
                'We produce food for Chinchillas',
                500,
                ]}
                speed={50}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
            />
      </div>
      <img src="/man.png" alt="" />
    </div>
  )
}

export default Speech