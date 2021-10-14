
//si no tengo valor inciial para el state, se incia con un []
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        
        case 'add':
            return [...state, action.payload];
        
        case 'delete':
            return state.filter( todo => todo.id !== action.payload);

        case 'toggle':
            return state.map( (todo, index) => {
                // Devuelve todos los todo, si se da la condicion entonces 
                //  coge todas las propeidades del todo, pero edita el done, y deveuvle el obj todo 
                //con la propiedad modificada
                if( todo.id === action.payload) {
                    return {
                        ...todo, // todas las propiedades 
                        done: !todo.done
                    }
                }else {
                    //Caso contrario , solo devuelve el todo. 
                    return todo;
                }
            });

        default:
            // El default se  llama cuadno se inicializa 
            return state
    }
}