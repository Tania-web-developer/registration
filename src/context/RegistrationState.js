import { RegistrationContext } from "./RegistrationContext";
import { useState } from 'react';

export default function ServerState(props) {

    const [registration, setRegistration] = useState([]);
   
    return (
        <RegistrationContext.Provider value={{
            
        }}>
            {props.children}
        </RegistrationContext.Provider>
    )

}
