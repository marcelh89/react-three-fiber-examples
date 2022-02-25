import React from 'react';
import {usePlane} from '@react-three/cannon'
import {TextureLoader, RepeatWrapping} from 'three';
import grass from '../images/grass.jpg';

export default function Ground(props) {
    const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0], ...props}));
    const texture = new TextureLoader().load(grass);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(100, 100);
    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[100, 100]}/>
            <meshStandardMaterial map={texture} attach="material"/>
        </mesh>
    );
}