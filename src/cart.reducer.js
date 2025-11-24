import { ADD_ITEM, REMOVE_ITEM, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./cart.actions";

const initialState = [];

const handleCart = (state = initialState, action) => {
    const product = action.payload;
    switch (action.type) {
        case ADD_ITEM:
            // Check if product already in cart
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                // Increase the quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }

        case REMOVE_ITEM:
            return state.filter((x) => x.id !== product.id);

        case INCREASE_QUANTITY:
            return state.map((x) =>
                x.id === product.id ? { ...x, qty: x.qty + 1 } : x
            );

        case DECREASE_QUANTITY:
            const exist1 = state.find((x) => x.id === product.id);
            // If quantity is 1, remove it from cart. Otherwise, decrease it.
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }

        default:
            return state;
    }
}

export default handleCart;