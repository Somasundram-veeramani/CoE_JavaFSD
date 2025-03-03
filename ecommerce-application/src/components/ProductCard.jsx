import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    alert(`product added to cart`);
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ">
      <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
      
      <p className="text-gray-600 mt-2">₹{product.price}</p>
      <button
        onClick={addToCart}
        className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};