import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';


function Cart() {
  const cartProducts = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const removeItemFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };
  console.log(removeItemFromCart)
  
  const total = cartProducts.cart.reduce((acc, item) => acc + parseFloat(item.fields.price), 0);

  return (
    <div>
      <div>
       Total: {total}
      </div>
      {cartProducts.cart.map((item: any) => (
        <div
          className=" max-w-sm  bg-white  rounded-lg group "
          key={item.id}
          // onClick={() => {
          //   setSelectedImageName(item.fields.name);
          //   playAudio(item.fields.audio[0].url);
          // }}
        >
          <div className="w-[50%]    ease-in-out duration-500 cursor-pointer hover:drop-shadow-2xl  hover:saturate-200 hover:translate-y-0.5">
            <img
              className="rounded-t-lg "
              src={item.fields.image[0].url}
              width="100%"
              height="100%"
              alt={item.fields.name}
            />
            <div className="  grid justify-items-end	h-5	mr-[10px]   mt-[-30px]  opacity-0 transform group-hover:-translate-y-2  transition duration-700  opacity-100 ">
              <div className="bg-black rounded-full p-3 p-4   opacity-0   ease-in-out duration-500 group-hover:opacity-100  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="white"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 0 1 0 1.971l-11.54 6.347a1.125 1.125 0 0 1-1.667-.985V5.653z"
                  />
                </svg>
              </div>
            </div>
            <div className="p-4 w-full bg-gray-800 border-4 border-r-white rounded-b-lg">
              <p className="font-normal text-gray-700 dark:text-gray-400">{item.fields.name}</p>
              <div className="flex justify-between text-gray-700 dark:text-gray-400 text-sm">
                <p>Genres</p>
                <p>{item.fields.genres}</p>
              </div>
              <div className="w-full inline-flex justify-between items-center px-3 py-3 mt-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 cursor-pointer">
                <p>{item.fields.price} Euro</p>
                <p onClick={() => removeItemFromCart(item.id)}>REMOVE</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <GridItems
      setSelectedImageName={setSelectedImageName}
      setIsStop={setIsStop}
      isStop={isStop}
    /> */}
    
    </div>
  );
}

export default Cart;


