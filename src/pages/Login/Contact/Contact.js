import React from 'react';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import backgroundImg from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div>
            <div className="hero rounded-lg my-10"
                style={{
                    background: `url(${backgroundImg})`,
                    backgroundSize: 'cover'
                }}
            >
                <div className="card  w-full max-w-sm ">
                    <div className="card-body">
                        <h1 className='text-xl text-primary text-center'>Contact Us</h1>
                        <h1 className='text-3xl text-center text-white mb-2'>Stay connected with us</h1>
                        <div className="form-control gap-2">
                            <input type="email" placeholder="Your Email" className="input input-bordered" />
                            <input type="test" placeholder="Subject" className="input input-bordered" />
                            <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                        </div>
                        <div className=" text-center mt-3">
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;