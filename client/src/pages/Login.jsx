import {useState} from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { THEME_SECONDARY_COLOR } from '../constants';
import { ThemedButton } from '../commons/Button';

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
        showPassword: false
    });

    const togglePasswordVisibility = () => {
        setData({ ...data, showPassword: !data.showPassword });
    }

    console.log('data', data)

    const loginUser = async (e) => {
        e.preventDefault()
        const {email, password} = data;
        try {
            const {data} = await axios.post('/login', {
                email, password
            });
            if (data.error) {
                toast.error(data.error);
            } else {
                setData({});
                navigate('/dashboard');

            }
        } catch (error) {
            console
        }
    }

    const handleClick = () => {
    // Handle button click event here
        console.log('Button clicked!');
    }

    return (
        <>
        <h1 className="text-3xl mt-10 text-white font-bold mb-4 text-center">Login</h1>
        <div className="max-w-md mx-auto mt-2 p-6 bg-white rounded shadow-md">
            <form onSubmit={loginUser}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className={`rounded w-full py-2 px-3 text-gray-700 leading-tight border-2 focus:border-[${THEME_SECONDARY_COLOR}] focus:outline-none`}
                        placeholder="Enter Email"
                        value={data.email}
                        onChange={(e) => setData({...data, email: e.target.value})}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <div className="relative">
                        <input 
                            type={data.showPassword ? "text" : "password"} 
                            id="password" 
                            className={`rounded w-full py-2 px-3 text-gray-700 leading-tight border-2 focus:border-[${THEME_SECONDARY_COLOR}] focus:outline-none`}
                            placeholder="Enter Password"
                            value={data.password}
                            onChange={(e) => setData({...data, password: e.target.value})}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                            {data.showPassword ? (
                                <AiOutlineEyeInvisible style={{ color: '#777' }} />
                            ) : (
                                <AiOutlineEye style={{ color: '#777' }} />
                            )}
                        </div>
                    </div>
                </div>
                <ThemedButton onClick={handleClick} content="Login" />
            </form>
        </div>
        </>
    )
}
