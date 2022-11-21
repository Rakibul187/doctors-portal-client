import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const date = format(selectedDate, 'PP')
    const { name, slots, price } = treatment;
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;

        // console.log(date, slot, name, email, phone)

        const booking = {
            appointmentDate: date,
            treatment: treatment.name,
            patient: name,
            slot,
            email,
            phone,
            price
        }
        // console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Booking Confirmed')
                    console.log(data)
                    setTreatment(null)
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })




    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='mt-6 grid grid-cols-1 gap-2 '>
                        <input type="text" value={date} disabled className="input input-bordered input-sm w-full" />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((time, i) => <option
                                    key={i}
                                    value={time}
                                >{time}</option>)
                            }
                        </select>
                        <input name='name' type="name" defaultValue={user?.displayName} placeholder="Your Name " className="input input-bordered input-sm w-full" readOnly />
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email Address " className="input input-bordered input-sm w-full" readOnly />
                        <input name='phone' type="phone" placeholder="Phone" className="input input-bordered input-sm w-full" />
                        <input type="submit" value='submit' className="btn btn-accent  text-white  w-full" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;