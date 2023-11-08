import {useState} from 'react'
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ThemedButton } from '../commons/Button';
import { THEME_SECONDARY_COLOR } from '../constants';

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const registerUser = async(e) => {
        e.preventDefault()
        const {name, email, password} = data;
        try {
            const {data} = await axios.post('/register', {
                name, email, password
            })

            if(data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success('Account registered.');
                navigate('/login');
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = () => {
    // Handle button click event here
        console.log('Button clicked!');
    }

    return (
        <>
        <h1 className="text-3xl mt-10 text-white font-bold mb-4 text-center">Register</h1>
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
            <form onSubmit={registerUser}>
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
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        className={`rounded w-full py-2 px-3 text-gray-700 leading-tight border-2 focus:border-[${THEME_SECONDARY_COLOR}] focus:outline-none`}
                        placeholder="Enter Username"
                        value={data.name}
                        onChange={(e) => setData({...data, name: e.target.value})}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input 
                        type={data.showPassword ? "text" : "password"} 
                        id="password" 
                        className={`rounded w-full py-2 px-3 text-gray-700 leading-tight border-2 focus:border-[${THEME_SECONDARY_COLOR}] focus:outline-none`}
                        placeholder="Enter Password"
                        value={data.password}
                        onChange={(e) => setData({...data, password: e.target.value})}
                    />
                </div>
                <ThemedButton onClick={handleClick} content="Register" />
            </form>
        </div>
        </>
    )
}
