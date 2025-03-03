import { useCart } from '../context/CartContext';

export const Cart = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-gray-800">{item.name}</span>
              <span className="text-gray-600">₹{item.price}</span>
              <button
                onClick={() => removeFromCart(item)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <strong className="text-xl text-gray-800">Total: ₹{totalPrice.toFixed(2)}</strong>
          </div>
        </div>
      )}
    </div>
  );
};