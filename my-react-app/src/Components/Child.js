import React from 'react';

function Child(props) {
    return (
        <div>
            {/* pass as paramter */}
             <button onClick={() => props.greetHandler('child')}>Greet Parent</button>

             {/* Method  */}
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
        </div>
    );
}

export default Child;