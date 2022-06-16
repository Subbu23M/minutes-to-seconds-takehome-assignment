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
    // To store array of objects
    const[randomUserData,setRandomUserData] = useState([]);
    const[title,setTitle] = useState('');
    const[value,setValue] = useState('');
    const[loading,setIsLoading] = useState(true);

    const baseURL = 'https://randomuser.me/api/';

    // AJAX Life Cycle
    const fetchData = () => {
        axios
            .get(baseURL)

            // success
            .then((response) => {
                const result = response.data.results;
                console.log(result);

                // Invoke State function
                setRandomUserData(result);
                setIsLoading(!true);
            })

            // failure
            .catch((error) => {
                swal(error.message);
            })
    }

    //Invoke useEffect hook
    useEffect(fetchData,[]); 

    // Event Handler as calback function
    const handleClick = ()=>{
        const randomIndex = Math.floor(Math.random() * randomUserData.length);

        const randomUserProfile = randomUserData[randomIndex];
        console.log(randomUserProfile);
    }

    const finalResult = (
        <div className="card p-3">

            <div className="img1">
                <img 
                    src="https://randomuser.me/api/portraits/med/men/72.jpg" 
                    alt="user" 
                />
            </div>
            <div className="img2">
                <img 
                    src="https://randomuser.me/api/portraits/med/men/72.jpg" 
                    alt="user" 
                />
            </div>

            <div className="card-body">
                <div className="main-text text-center">
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {value}
                    </p>
                </div>

                <div className="random-user-icons d-flex justify-content-around align-items-center mt-2">
                    <button
                        className='icon'
                    >
                        <FaUser/>
                    </button>
                    <button
                        className='icon'
                        >
                        <FaEnvelopeOpen/>
                    </button>
                    <button
                        className='icon'
                        >
                        <FaCalendarTimes/>
                    </button>
                    <button
                        className='icon'
                        >
                        <FaMap/>
                    </button>
                    <button
                        className='icon'
                        >
                        <FaPhone/>
                    </button>
                    <button
                        className='icon'
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
                        {/* Child Component Instance */}
                        {
                            (loading) ? <Loader/> : finalResult
                        }
                        <div
                            className='d-flex justify-content-center align-items-center mt-4'
                        >
                            <button
                                className='random-user btn btn-primary'
                                onClick={handleClick}
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