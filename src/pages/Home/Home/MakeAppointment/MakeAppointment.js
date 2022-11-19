import React from 'react';
import doctor from '../../../../assets/images/doctor.png'
import appointment from '../../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='mt-60 rounded-lg '>
            <div className="hero">
                <div className="hero-content  flex-col lg:flex-row">
                    <img src={doctor} alt="" className="lg:w-1/2 hidden lg:block md:block -mb-4 -mt-48 rounded-lg " />
                    <div>
                        <h1 className='text-3xl font-bold text-primary '>Appointment</h1>
                        <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;