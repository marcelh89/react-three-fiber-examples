import React from 'react';
import {Canvas} from '@react-three/fiber'
import {Sky} from '@react-three/drei'
import {Physics} from '@react-three/cannon'
import {nanoid} from 'nanoid';

import {Ground} from './components/Ground';
import {Player} from './components/Player';
import {Cube} from './components/Cube';
import {useStore} from "./hooks/useStore";
import {useInterval} from "./hooks/useInterval";


function App() {

    const [cubes, saveWorld] = useStore((state) => [
        state.cubes,
        state.saveWorld
    ]);

    useInterval(() => {
        saveWorld(cubes)
    }, 10000)


    return (
        <Canvas shadowMap sRGB>
            <Sky sunPosition={[100, 20, 100]}></Sky>
            <ambientLight intensity={0.25}/>
            <pointLight castShadow intentity={0.7} position={[100, 100, 100]}/>
            <Physics gravity={[0, -30, 0]}>
                <Ground position={[0, 0.5, 0]}/>
                <Player position={[0, 3, 10]}/>
                {cubes.map((cube) => (
                    <Cube key={nanoid()} position={cube.pos} texture={cube.texture}/>
                ))}
            </Physics>
        </Canvas>
    )
}

export default App;
