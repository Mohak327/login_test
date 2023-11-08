import {useContext} from 'react'
import { UserContext } from '../../context/userContext'
import { capitalizeFirstLetter } from '../utility/stringFunctions';

export default function Dashoard() {
    const {user} = useContext(UserContext);
    const {name} = user || {};
    return (
        <div>
        <h1 className="text-3xl mt-10 text-white font-bold mb-4 text-center">
            {!!user && <h2>Hi {capitalizeFirstLetter(name)}!</h2>}
        </h1>
        </div>
    )
}
