import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import './Preloader.css'

const Preloader = () => {
  return (
    <div className='preLoader'>
        <Player
        autoplay
        loop
        src="https://lottie.host/deceadd7-07f2-4c70-a1db-76f18be73fd7/Wq12ZJlIkT.json"
        style={{ height: '300px', width: '300px' }}
        >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
        <p className='para'><span style={{fontWeight:500}}>Loading...  </span>Sit back and have a virtual coffee ☕</p>
    </div>
  )
}

export default Preloader
