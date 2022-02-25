import React, {useState, memo} from 'react';
import {useBox} from '@react-three/cannon';

import * as textures from '../textures'

const Cube = ({position, texture, addCube, removeCube}) => {
    const [hover, setHover] = useState(null);
    const [ref] = useBox(() => ({
        type: 'Static',
        position,
    }));

    return (
        <mesh
            castShadow
            ref={ref}
            onPointerMove={(e) => {
                e.stopPropagation();
                setHover(Math.floor(e.faceIndex / 2))
            }}
            onPointerOut={(e) => {
                setHover(null);
            }}
            onClick={(e) => {
                console.log(e)
                e.stopPropagation();
                const clickedFace = Math.floor(e.faceIndex / 2);
                const {x, y, z} = ref.current.position;
                const shouldDelete = e.altKey || e.ctrlKey || e.shiftKey;

                if (clickedFace === 0) {
                    shouldDelete ? removeCube(x, y, z) : addCube(x + 1, y, z)
                    return;
                }
                if (clickedFace === 1) {
                    shouldDelete ? removeCube(x, y, z) : addCube(x - 1, y, z)
                    return;
                }
                if (clickedFace === 2) {
                    shouldDelete ? removeCube(x, y, z) : addCube(x, y + 1, z)
                    return;
                }
                if (clickedFace === 3) {
                    shouldDelete ? removeCube(x, y, z) : addCube(x, y - 1, z)
                    return;
                }
                if (clickedFace === 4) {
                    shouldDelete ? removeCube(x, y, z) : addCube(x, y, z + 1)
                    return;
                }
                if (clickedFace === 5) {
                    shouldDelete ? removeCube(x, y, z) : addCube(x, y, z - 1)
                    return;
                }
            }}
        >
            {[...Array(6)].map((_, index) => (
                <meshStandardMaterial
                    attachArray='material'
                    map={textures[texture]}
                    key={index}
                    color={hover === index ? 'gray' : 'white'}
                    opacity={texture === 'glass' ? 0.7 : 1}
                    transparent={true}
                />
            ))}
            <boxBufferGeometry attach="geometry"/>
        </mesh>
    )

};

function equalProps(prevProps, nextProps) {
    const equalPosition =
        prevProps.position.x === nextProps.position.x &&
        prevProps.position.y === nextProps.position.y &&
        prevProps.position.z === nextProps.position.z;

    return equalPosition && prevProps.texture === nextProps.texture;
}

export default memo(Cube, equalProps);
