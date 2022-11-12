import React from 'react';
import Contact from '../../Login/Contact/Contact';
import Banner from '../Banner/Banner';
import InfoCards from '../infoCards/InfoCards';
import Testimonial from '../Testimonial/Testimonial';
import ExceptionalDental from './ExceptionalDental/ExceptionalDental';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;