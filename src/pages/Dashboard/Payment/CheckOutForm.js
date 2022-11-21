import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({ booking }) => {
    const { price, email, patient, _id } = booking
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


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
            // console.log('PaymentMethod', paymentMethod);
            setCardError('')
        }
        setProcessing(true)
        setSuccess('')
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email,
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError)
            setProcessing(false)
            return
        }

        if (paymentIntent.status === "succeeded") {
            console.log('caaaaaaard', card)
            setProcessing(false)
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }
            console.log(payment)
            fetch('http://localhost:5000/payments', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess("congrats! Your payment secceded")
                        setTransactionId(paymentIntent.id)
                    }
                })
        }
    }

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
                <button
                    className='btn btn-primary btn-xs mt-4 text-white px-5' type="submit"
                    disabled={!stripe || !clientSecret || processing}
                >
                    Pay
                </button>
                {
                    cardError && <p className='text-red-400'>{cardError.message}</p>
                }
                {
                    success &&
                    <>
                        <p className='text-green-500'>{success}</p>
                        <p>Your TransactionId: <span className='font-bold'>{transactionId}</span></p>
                    </>
                }
            </form>
        </div>
    );
};

export default CheckOutForm;