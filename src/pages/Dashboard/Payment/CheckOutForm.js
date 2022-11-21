import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({ booking }) => {

    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ booking }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [booking]);


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !Elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('error', error);
            setCardError(error)
        } else {
            console.log('PaymentMethod', paymentMethod);
            setCardError('')
        }
    }

    console.log(cardError)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-xs mt-4 text-white px-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                {
                    cardError && <p className='text-red-400'>{cardError.message}</p>
                }
            </form>
        </div>
    );
};

export default CheckOutForm;