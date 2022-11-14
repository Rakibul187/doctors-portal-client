import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppoinment = ({ selectedDate }) => {
    const [appoinmtOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch("AppointmentOption.json")
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold mb-6'>Available Appointment on {format(selectedDate, "PP")}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appoinmtOptions.map(option =>
                        <AppointmentCard
                            key={option._id}
                            appointmentOption={option}
                            setTreatment={setTreatment}
                        ></AppointmentCard>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppoinment;