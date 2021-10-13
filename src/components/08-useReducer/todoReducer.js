
//si no tengo valor inciial para el state, se incia con un []
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        
        case 'add':
            return [...state, action.payload];
    
        default:
            // El default se  llama cuadno se inicializa 
            return state
    }
}