import React from 'react';
import img from '../../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ExceptionalDental = () => {
    return (
        <div className='mt-40'>
            <div className="flex flex-col justify-around items-center lg:flex-row">
                <img className='lg:w-[458px] lg:h-[578px]  rounded-lg' src={img} alt='' />
                <div className='lg:w-[497px] lg:h-[347px]'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalDental;