import React from 'react';

function ListRendering(props) {

     const names = ['Bob','Gomu','Peach'];

    // const products = [
    //     { title: 'Cabbage', id: 1 },
    //     { title: 'Garlic', id: 2 },
    //     { title: 'Apple', id: 3 },
    //   ];

    // const productList = products.map(product => <li key={product.id}>{product.title}</li>)  

    //Index as a key

    const nameList = names.map((name,index) => <h1>{index}.{name}</h1>)
    return (
        <div>
          
            {/* <ul>{productList}</ul> */}

            {nameList}
            
        </div>
    );
}

export default ListRendering;