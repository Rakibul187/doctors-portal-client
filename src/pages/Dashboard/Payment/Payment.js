import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../shared/Loader/Loader';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const booking = useLoaderData()
    const navigation = useNavigation()
    const { price, appointmentDate, slot, treatment } = booking

    if (navigation.state === "loading") {
        return <Loader></Loader>
    }

    const stripePromise = loadStripe(process.env.REACT_APP_STRPE_PK);
    return (
        <div>
            <div className='mt-4'>
                <p className='text-3xl'>Payment for {treatment}</p>
                <p className='text-xl'>Please payment <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            </div>
            <div className="w-96 my-10">
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking}
                    ></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;