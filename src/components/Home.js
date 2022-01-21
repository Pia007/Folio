import mypic from '../images/mypic.png';
//import { Link } from 'react-router-dom';
import Header from './Header';
// Header should be imported here

const Home = () => {
    return (
        <main>
            <Header />
            <div className="row row-content m-auto my-5">
                <div className="col mx-auto p-0">
                    <img src={mypic} alt=""
                        className="img-fluid rounded-circle mx-auto d-block"
                        style={{ width: '250px', height: '250px' }} 
                    />
                </div>
            </div>
            {/* <div className="row m-auto mt-5">
                <div className="col-md-4 mx-auto p-0 text-center">
                    <h6 className=" text-primary">Hello! </h6>
                    <h1 className="">I'm Pia Torain</h1>
                    <p className="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque id eos consequuntur beatae ducimus totam dicta ratione exercitationem, harum eveniet commodi ab impedit vel molestiae provident quae nam aspernatur quis. Voluptatibus veniam, minima, aspernatur vel nostrum natus repellat eos assumenda consectetur consequuntur expedita, molestiae nemo!</p>
                </div>
            </div>
            <button className='btn btn-primary mx-auto d-block'><Link to="/About">About</Link></button> */}
        </main>
    )
}

export default Home
