import React, { useState } from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <div>
            <AppointmentHeader
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentHeader>
            <AvailableAppoinment
                selectedDate={selectedDate}
            ></AvailableAppoinment>
        </div>
    );
};

export default Appointment;