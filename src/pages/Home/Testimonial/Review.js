import React from 'react';

const Review = ({ review }) => {
    const { review: userComment, name, img, location } = review;

    return (
        <div>
            <div className="card  shadow-xl">
                <div className="card-body">
                    <p>{userComment}</p>
                    <div className="card-actions mt-5 ">
                        <div className="avatar">
                            <div className="w-12 rounded-full mr-2 ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='' />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-md font-semibold'>{name}</h3>
                            <h3 className='text-sm '>{location}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;