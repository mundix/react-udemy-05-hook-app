import React from 'react';


// export const  Small = ({value}) => {
//     console.log('Me volvi a llamar :( ');
//     return (
//         <small>{value}</small>
//     )
// };

// Esta es otra forma de usar memo, con React.memo(fn())  o memo ( fn())
// ( pone toda la funcion o funcion de flecha dentro del parentesis)
// import React,  {memo} from 'react';
// export const  Small = memo(({value}) => {
//     console.log('Me volvi a llamar :( ');
//     return (
//         <small>{value}</small>
//     )
// });
// Cualqueira de las dos formas es valida 
export const  Small = React.memo(({value}) => {
    console.log('Me volvi a llamar :( ');
    return (
        <small>{value}</small>
    )
});
