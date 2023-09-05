import { useState,useEffect } from 'react';
import axios from 'axios';
import Loader from '../Components/Loader';
import swal from 'sweetalert';
import '../Styling/Main.scss';
import {
    FaEnvelopeOpen,
    FaUser,
    FaCalendarTimes,
    FaMap,
    FaPhone,
    FaLock,
} from 'react-icons/fa';

const App = () => {
    // To store data
    const [randomUserData, setRandomUserData] = useState([]);
    const [title, setTitle] = useState('random user');
    const [value, setValue] = useState('random value');
    const [loading, setIsLoading] = useState(true);

    const baseURL = 'https://randomuser.me/api/';

    // AJAX Life Cycle
    const fetchData = () => {
        // To avoid flashes on screen
        const controller = new AbortController()
        axios
            .get(baseURL,{signal:controller.signal})

            // success
            .then((response) => {
                const result = response.data.results[0];
                // console.log(result);

                const {
                    large: image
                } = result.picture;
                const {
                    first,
                    last
                } = result.name;
                const {
                    phone,
                    email
                } = result;
                const {
                    dob: {
                        age
                    }
                } = result;
                const {
                    street: {
                        number,
                        name
                    }
                } = result.location;
                const {
                    password
                } = result.login;

                // Final Result
                const randomUserDetails = {
                    phone,
                    email,
                    image,
                    password,
                    first,
                    last,
                    age,
                    street: `${number} ${name}`,
                    name: `${first} ${last}`
                }

                // Invoke State functions
                setRandomUserData(randomUserDetails);
                setTitle('name');
                setValue(randomUserData.name);
                setIsLoading(!true);
            })

            // failure
            .catch((error) => {
                swal(error.message);
            })
        return () => controller.abort();
    }

    //Invoke useEffect hook
    useEffect(fetchData, []);

    // Event Handler as calback function
    const handleHover = (e) => {
        if (e.target.classList.contains('icon')) {
            const newValue = e.target.dataset.label
            setTitle(newValue)
            setValue(randomUserData[newValue])
        }
    }

    const finalResult = (
        <div className="card p-3">

            <div className="img1">
                <img 
                    src={randomUserData && randomUserData.image} 
                    alt={randomUserData && randomUserData.name} 
                />
            </div>
            <div className="img2">
                <img 
                    src={randomUserData && randomUserData.image} 
                    alt={randomUserData && randomUserData.name}
                />
            </div>

            <div className="card-body">
                <div className="main-text text-center text-capitalize">
                    <h2>
                        my {title} is 
                    </h2>
                    <p>
                        {value}
                    </p>
                </div>

                <div className="random-user-icons d-flex justify-content-around align-items-center mt-2">
                    <button
                        className='icon'
                        data-label='name'
                        onMouseOver={handleHover}
                    >
                        <FaUser/>
                    </button>
                    <button
                        className='icon'
                        data-label='email'
                        onMouseOver={handleHover}
                        >
                        <FaEnvelopeOpen/>
                    </button>
                    <button
                        className='icon'
                        data-label='age'
                        onMouseOver={handleHover}
                        >
                        <FaCalendarTimes/>
                    </button>
                    <button
                        className='icon'
                        data-label='street'
                        onMouseOver={handleHover}
                        >
                        <FaMap/>
                    </button>
                    <button
                        className='icon'
                        data-label='phone'
                        onMouseOver={handleHover}
                        >
                        <FaPhone/>
                    </button>
                    <button
                        className='icon'
                        data-label='password'
                        onMouseOver={handleHover}
                        >
                        <FaLock/>
                    </button>
                </div>
            </div>
        </div>
    )
    
    return (
    <>
        <div className="user-profile-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">

                        {/* Conditional Rendering - Ternary Operator */}
                        {
                            (loading) ? <Loader/> : finalResult
                        }
                        <div
                            className='d-flex justify-content-center align-items-center mt-4'
                        >
                            <button
                                className='random-user btn btn-primary'
                                onClick={fetchData}
                            >
                                Random User 
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default App;
