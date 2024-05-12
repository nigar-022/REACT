import React,{useContext} from 'react';
import ComponentF from './ContextCompF';
import { UserContext, CHannleContex } from './ContextAppComp';

function ComponentE () {
    const user = useContext(UserContext);
    const channle = useContext(CHannleContex)
    return(
        <>
        {user} - {channle}
        </>
    )
}
export default ComponentE