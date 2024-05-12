import React from 'react';
import ComponentC from './ContextCompC';

export const UserContext = React.createContext();
export const CHannleContex = React.createContext()

function ComponentApp () {

    return(
        <>
        <UserContext.Provider value={'Nigar'}>
            <CHannleContex.Provider value={'Code'}>
             <ComponentC />

            </CHannleContex.Provider>
        </UserContext.Provider>
        </>
    )
}
export default ComponentApp