import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const date = format(selectedDate, 'PP')
    const { name, slots } = treatment;


    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;

        console.log(date, slot, name, email, phone)

        const booking = {
            appointmentDate: date,
            treatment: treatment.name,
            patient: name,
            slot,
            email,
            phone
        }
        console.log(booking)
        setTreatment(null)

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
                        <input name='name' type="name" placeholder="Your Name " className="input input-bordered input-sm w-full" />
                        <input name='email' type="email" placeholder="Email Address " className="input input-bordered input-sm w-full" />
                        <input name='phone' type="phone" placeholder="Phone" className="input input-bordered input-sm w-full" />
                        <input type="submit" value='submit' className="btn btn-accent  text-white  w-full" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;