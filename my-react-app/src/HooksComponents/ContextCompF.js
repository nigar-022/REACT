import React from 'react';
import { UserContext,CHannleContex } from './ContextAppComp';

function ComponentF () {

    return(
        <>
        <UserContext.Consumer>

            {
                user => {
                    return (
                        <CHannleContex.Consumer>
                            {
                                channle => {
                                    return (
                                        <div> Use Context Value - {user}, Channle Context Value - {channle}</div>
                                    )
                                }
                            }

                        </CHannleContex.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
       
        </>
    )
}
export default ComponentF