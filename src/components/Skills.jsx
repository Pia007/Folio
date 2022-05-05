import React from 'react';
import { Row } from 'reactstrap';
import { SkillItem } from './Items';
import htmlLogo from '../images/h5.svg';
import cssLogo from '../images/css3.svg';
import jsLogo from '../images/javascript.png';
import bootstrapLogo from '../images/bootstrap.svg';
import reactLogo from '../images/react.png';
import nodeLogo from '../images/node.png';
import reduxLogo from '../images/red.svg';
import rnLogo from '../images/rn.png';
import mongoLogo from '../images/mongodb.svg';
import expressLogo from '../images/express.png';
import sassLogo from '../images/sass.png';
import vsLogo from '../images/vsc.png';
import jqLogo from '../images/jq.png';
import gitLogo from '../images/git.png';
import w3Logo from '../images/w3.png';
import rwdLogo from '../images/rwd.png';
import githubLogo from '../images/gh.png';
import npmLogo from '../images/npm.png';
import restLogo from '../images/rest.svg';
import yarnLogo from '../images/yarn.png';

// import gitLogo from '../images/git-icon.png';

function Skills(props) {
    return (
        <div className='p-0 px-0'>
            <div className='text-center'><h2>Skills</h2></div>
            <Row className='my-3 p-0 row-content'>
                <SkillItem 
                    name='HTML5' 
                    logo={htmlLogo}  
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='CSS3'
                    logo={cssLogo}
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='JavaScript'
                    logo={jsLogo}
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='Bootstrap'
                    logo={bootstrapLogo}
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='Sass'
                    logo={sassLogo}
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='jQuery'
                    logo={jqLogo}
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='React'
                    logo={reactLogo}
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='Redux'
                    logo={reduxLogo}
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='React Native'
                    logo={rnLogo}
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='NodeJs'
                    logo={nodeLogo}
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='Express'
                    logo={expressLogo}
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='MongoDB'
                    logo={mongoLogo}
                    logoStyle='skill-one'
                />
                
                <SkillItem
                    name='VS Code'
                    logo={vsLogo}
                    logoStyle='skill-two'
                />
                <SkillItem
                    name='Git'
                    logo={gitLogo}
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='W3'
                    logo={w3Logo}
                    logoStyle='skill-two'
                />
                <SkillItem
                    name='RWD'
                    logo={rwdLogo}
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='Github'
                    logo={githubLogo}
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='NPM'
                    logo={npmLogo}
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='RESTful APIs'
                    logo={restLogo}
                    logoStyle='skill-one'
                />
                <SkillItem
                    name='Yarn'
                    logo={yarnLogo}
                    logoStyle='skill-one'
                />
            </Row> 
        </div>
    );
}

export default Skills;