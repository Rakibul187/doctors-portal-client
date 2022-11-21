import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from '../../shared/Loader/Loader';

const AddDoctor = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const imageHostKey = process.env.REACT_APP_imgbb_key
    const navigate = useNavigate()

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['appointmentSpecialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty')
            const data = await res.json()
            return data
        }
    })

    const handleAddDoctor = data => {
        // console.log(data.image[0])
        const image = data.image[0]
        const formData = new FormData()

        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData.data)
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    console.log(doctor)
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            if (result.acknowledged) {
                                toast.success(`${data.name} added successfully`)
                                navigate('/dashboard/managedoctors')
                            }
                        })
                }
            })
    }

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='w-96 p-7'>
            <h1 className='text-4xl'>Add a Doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Your Name</span></label>
                    <input type="text" className="input input-bordered w-full"
                        {...register("name", { required: "Name is required" })}
                        aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && <p className='text-red-600' >{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email" className="input input-bordered w-full"
                        {...register("email", { required: "Email Address is required" })}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <p className='text-red-600' >{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full  max-w-xs">
                    <label className="label"><span className="label-text">Speciality</span></label>
                    <select
                        {...register('specialty')}
                        className="select input-bordered w-full max-w-xs"
                    >
                        {
                            specialties?.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file" className="input w-full"
                        {...register("image", { required: "Photo is required" })}
                        aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.img && <p className='text-red-600' >{errors.img?.message}</p>}
                </div>
                <input className='btn btn-accent w-full  max-w-xs rounded-xl input-sm mt-2' value='Add Doctor' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;