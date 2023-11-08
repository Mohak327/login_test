import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            try {
                const response = await axios.post('/logout'); // Assuming your server handles POST request for logout
                if (response.data.success) {
                    // Redirect the user to a different page (e.g., homepage)
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error logging out:', error);
            }
        };

        logoutUser();
    }, [navigate]);

    return null;
};

export default Logout;
