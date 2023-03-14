import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components';
import Atom from './Atom';

const Desc = styled.p`
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    top: 200px;
    right: 100px;

    @media screen and (max-width: 768px) {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
`;

const Development = () => {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6} >
                    <Atom />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
            <Desc>
                We design products with a strong focus on both world class design and ensuring
                your project is a market success.
            </Desc>
        </>
    )
}

export default Development