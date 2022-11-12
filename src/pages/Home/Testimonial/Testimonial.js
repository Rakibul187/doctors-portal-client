import React from 'react';
import icon from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: "Winson Herry",
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: "Winson Herry",
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: "Winson Herry",
            location: 'California',
            img: people3
        },
    ]


    return (
        <section className='my-24'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-xl text-primary font-bold'>Testimonial</h3>
                    <h3 className='text-3xl font-bold'>What Our Patients Says</h3>
                </div>
                <figure>
                    <img className='lg:w-48 w-24' src={icon} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;