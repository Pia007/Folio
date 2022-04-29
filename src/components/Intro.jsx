import Particles from 'react-tsparticles';
import Socials from '../components/Socials';

export const Intro = () => {
    
    return (
        <div>  
            <Particles  options={{
                // background: {
                //     color: {
                //         value: '#000000'
                //     }
                // },
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
                }
            }} /> 
            <div style={{ height: '90vh'}}>
                <div className='d-flex justify-content-center align-content-center' style={{maxWidth: '95%', height: '100%', margin: 'auto'}}>
                    <div className='border-0 align-self-center p-auto vertical-align-middle'>
                        <h1 className='sub-text text-center font-weight-bold' style={{fontSize:'86px'}}>
                            Pia Torain
                        </h1>
                        <h3 className='text-center'>Software Developer</h3>
                        <div className='sub-text text-center font-weight-bold mb-3 p-1'>
                            <Socials />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

