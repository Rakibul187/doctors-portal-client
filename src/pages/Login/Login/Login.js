import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm()

    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div className='h-[400px] flex justify-center mt-10 mb-16'>
            <div className='w-96 p-7'>
                <h1 className='text-xl'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered w-full" {...register("email")} />
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full" {...register("password")} />
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                    </div>
                    <input className='btn btn-accent w-full rounded-xl input-sm' value='login' type="submit" />
                </form>
                <small>New to doctors portal? <Link className='text-secondary' to='/signup'>Create a new account</Link></small>
                <div className="divider">or</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default Login;