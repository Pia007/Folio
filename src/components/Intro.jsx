import Particles from 'react-tsparticles';
import { SocialRow } from './Socials';
export const Intro = () => {
    
    return (
        <div>  
            {/* <Particles  options={{
                fpsLimit: 60,
                
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: false,
                        }
                    },
                    move: {
                        speed: 1,
                        outMode: 'bounce',
                        enable: true,
                        random: false,
                        straight: false,
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                color: {
                    value: '36454F'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#36454F'
                    },
                    polygon: {
                        nb_sides: 8
                    }
                },
                opacity: {
                    value: 0.5,
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        speed: 4,
                        size_min: 0.3
                    }
                } */}
            {/* }} />  */}
            <div >
                <div className='mt-3 d-flex justify-content-center align-content-center' style={{maxWidth: '95%', height: '85vh', margin: 'auto'}}>
                    <div className='border-0 align-self-center p-auto '>
                        <h1 className='m-0 intro-text'>
                            Hi, I'm Pia.
                        </h1>
                        <h2 className='m-0 mt-0 sub-text text-primary'>Junior Software Developer</h2>
                        <p className='mt-0 text'>
                            I love building beautiful, responsive, accessible web apps and all of the challenges that come along with it.<br/>
                        </p>
                        <div className='font-weight-bold mb-3 p-0'>
                            <SocialRow/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

