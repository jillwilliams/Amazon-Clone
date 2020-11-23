export const initialState = {
    basket: [],
    user: null
};
// create a Selector: tallies up all the amounts in the basket and calls it amount
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            };
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            // this will only find the first match and return it to you..only cuts out the first of any repetitive items and leaves the rest of the repeating items
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn("Can't remove product (id: ${action.id}) as it is not in the basket!");
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }   
            default: 
                return state;
    }
};

export default reducer;