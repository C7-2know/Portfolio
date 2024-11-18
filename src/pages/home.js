import React from 'react';
import '../App.css';
const Home=()=>{
    return(
        <div className='container row flex-wrap p-5 align-items-center'>
            <div className="col col-6 d-flex flex-column align-items-center ">
                <h1>Betelhem</h1>
                <h1>Yimam</h1>
                <p>Full stack Developer</p>
                <div className='d-flex gap-4 mt-3'>
                    <button className='btn text-white border'>Resume</button>
                    <button className='btn text-white border'>contact me</button>
                </div>
            </div>
            <div className="col col-6">
                <img className="w-100 h-100 rounded" src="img2.jpg"/>
            </div>
        </div>
    )
}
export default Home;