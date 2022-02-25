import React from 'react';
import {Canvas} from '@react-three/fiber'
import {Sky} from '@react-three/drei'
import {Physics} from '@react-three/cannon'

import './index.css'
import Ground from './components/Ground';
import Player from './components/Player';

function App() {
    return <Canvas shadowMap sRGB>
        <Sky sunPosition={[100, 20, 100]}></Sky>
        <ambientLight intensity={0.25}/>
        <pointLight castShadow intensitiv={0.7} position={[100, 100, 100]}/>
        <Physics gravity={[0, -30, 0]}>
            <Ground position={[0, 0.5, 0]}/>
            <Player position={[0, 3, 10]}/>
        </Physics>


    </Canvas>;
}

export default App;
