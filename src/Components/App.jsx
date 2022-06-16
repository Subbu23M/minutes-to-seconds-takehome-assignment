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
    return (
    <>
        <div className="user-profile-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        {/* card */}
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
                                        Name
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet.
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
                        {/* end of card */}

                        <div
                            className='d-flex justify-content-center align-items-center mt-4'
                        >
                            <button
                                className='random-user btn btn-primary'
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