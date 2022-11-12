import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../infoCards/InfoCards';
import ExceptionalDental from './ExceptionalDental/ExceptionalDental';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
        </div>
    );
};

export default Home;