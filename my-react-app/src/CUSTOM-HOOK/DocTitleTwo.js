import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle';


function DocTitleTwo() {
    const [count,setCount] = useState(0);

    useDocumentTitle(count);

    return(
        <>
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </>
    )

}

export default DocTitleTwo