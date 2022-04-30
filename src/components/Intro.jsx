import Particles from 'react-tsparticles';
import Socials from '../components/Socials';

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
                }
            }} />  */}
            <div style={{ height: '90vh'}}>
                <div className='mt-2 d-flex justify-content-center align-content-center' style={{maxWidth: '95%', height: '100%', margin: 'auto'}}>
                    <div className='border-0 align-self-center p-auto '>
                        <h1 className='pre-text text-primary'>Hi, my name is </h1>
                        <h2 className='m-0 font-weight-bold intro-text'>
                            Pia Torain.
                        </h2>
                        <h3 className='m-0 mt-2 sub-text'>I build web applications.</h3>
                        <p className='mt-2 text'>I am a software developer that builds user-friendly, responsive and accessible applications.<br/>
                            Currently, I am looking for new <span className='text-primary'>challenges</span> and <span className='text-primary'>opportunities</span> to  <br/>
                            build beautiful and intuitive applications.<br/>
                        </p>
                        <div className=' mb-3 p-0'>
                            <Socials />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

