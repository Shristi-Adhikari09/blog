import { useState } from "react";
import { removeFromCart, useGetCartDetailByNameQuery } from "../../store/slice/cartSlice";
import { useDispatch } from "react-redux";

export default function CartItem({ cartId }) {
  const [count] = useState(0);

  const { data } = useGetCartDetailByNameQuery(cartId, count);
  const cardData = data?.result;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeFromCart(cartId));
    console.log("Deleting cart item:", cartId);
    // Example: dispatch(removeFromCart(cartId));
    // Or call a delete mutation: deleteCartItem(cartId);
  };

  return (
    <div className="border-2  flex  justify-between gap-3 items-center border-blue-200 shadow-lg mt-3 hover:bg-blue-200 p-4">
        <div>
      <h1 className="text-l">{cardData.title}</h1>
      <p>{cardData.author}</p>

        </div>
        <div>
      <button
        onClick={handleDelete}
        className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
      >
        Delete
      </button>

        </div>
    </div>
  );
}
