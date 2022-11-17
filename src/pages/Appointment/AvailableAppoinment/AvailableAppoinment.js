import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loader from '../../shared/Loader/Loader';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppoinment = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, "PP")

    const { data: appointmentOptions = [], isLoading, refetch } = useQuery({
        queryKey: ["appoinmentOptions", date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`)
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    // useEffect(() => {
    //     fetch("http://localhost:5000/appoinmentOptions")
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold mb-6'>Available Appointment on {format(selectedDate, "PP")}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option =>
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
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppoinment;