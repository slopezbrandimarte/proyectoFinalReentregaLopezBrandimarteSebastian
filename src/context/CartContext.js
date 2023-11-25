import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [...prev, { item, quantity, subtotal: item.precio * quantity }]);
        } else {
            console.error("El producto ya fue agregado");
        }
    };

    const removeItem = (itemId) => {
        console.log('antes de eliminar',cart)
        const cartUpdated = cart.filter((prod) => prod.item.id !== itemId);
        console.log('despues de eliminar',cart)
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.item.id === itemId);
    };

    const totalQuantity = () => {
        return cart.reduce((total, prod) => total + prod.quantity, 0);
    };

    const calculateTotal = () => {
        return cart.reduce((total, prod) => total + prod.subtotal, 0);
    };

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, clearCart, isInCart, calculateTotal, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

