import React, { Component } from 'react'
import Particles from 'react-tsparticles';
import './ParticleBackground.scss'

export default class ParticleBackground extends Component {

    render() {
        return (
            <div className='ParticleBackground'>
            <Particles
                id="tsparticles"
                options={{
                    fpsLimit: 60,
                    particles: {
                    color: {
                        value: "#ffffff",
                    },
                    move: {
                        direction: "right",
                        enable: true,
                        speed: 5,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: .4,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 30,
                    },
                    },
                }}
                />
            </div>
        )
    }
}
