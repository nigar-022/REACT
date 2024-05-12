import React , {useState}from 'react';
import Child from './Child';

function Parent(props) {

    const [parentName,setGreetParent] = useState('Parent');

    const greetParent = (childName) => {
        console.log('call')
        alert(`Hello ${parentName} from ${childName}`)
        //console.log(setGreetParent(`Hello ${parentName}`))
    }

    return (
        <div>
            <Child greetHandler={greetParent}/>
        </div>
    );
}

export default Parent;