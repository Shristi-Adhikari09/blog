
import {  useSelector } from "react-redux"
import CartItem from "./CartItem";

export default function Cart() {
const products = useSelector((state) =>  state.cart.products);



return(

   <div className="flex flex-col  text-center items-center gap-4">
    <h1 className="bg-blue-200 p-1 mt-4">Cart List</h1>
  {products.map((item) => (
    <div key={item} className="w-full max-w-md">
      <CartItem cartId={item} />
    </div>
  ))}
</div>


);
}