import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const InfoCards = () => {
    const infos = [
        {
            id: 1,
            name: "Opening hours",
            description: "Open 9.00 am to 5.00 Pm everyday",
            icon: clock,
            bgClass: 'bg-primary bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: "Visit our locations",
            description: "Tajmahal Road, Mohammadpur, Dhaka",
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: "Contact us now",
            description: "Whats App: 016XXXXXX, Mobile: 015XXXXXXXX",
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                infos.map(info => <InfoCard
                    key={info.id}
                    info={info}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;