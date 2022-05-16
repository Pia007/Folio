import { SocialRow } from './Socials';
import { Fade } from 'react-reveal';

export const Intro = () => {
    
    return (
        <div >
            <div className='d-flex justify-content-center align-content-center' style={{maxWidth: '95%', height: 'auto', margin: 'auto'}}>
                <div className='border-0 align-self-center p-auto '>
                    <Fade bottom delay={1000}>
                        <h1 className='pre-text text-primary'>Hi, my name is </h1>
                    </Fade>
                    <Fade bottom delay={1300}>
                        <h2 className='m-0 intro-text'> Pia Torain.</h2>
                    </Fade>
                    <Fade bottom delay={1500}>
                        <h2 className='m-0 mt-0 sub-text '>Junior Software Developer</h2>
                    </Fade>
                    <Fade bottom delay={1700}>
                        <p className='mt-0 text'>
                            I love building beautiful, responsive, accessible web apps and all of the challenges that come along with it.<br/>
                        </p>
                    </Fade>
                    <Fade bottom delay={1400}>
                        <div className='font-weight-bold mb-3 p-0'>
                            <SocialRow/>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
        
    )
}

