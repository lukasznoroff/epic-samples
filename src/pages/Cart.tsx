import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart,  } from '../store/cartSlice';
import { styled } from 'styled-components';

function Cart() {
  const cartProducts = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const removeItemFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };
  console.log(removeItemFromCart);

  const total = cartProducts.cart.reduce((acc, item) => acc + parseFloat(item.fields.price), 0);

  return (
    <Cartshop>
      <div>
        {cartProducts.cart.map((item: any) => (
          <div
            className="container"
            key={item.id}
            // onClick={() => {
            //   setSelectedImageName(item.fields.name);
            //   playAudio(item.fields.audio[0].url);
            // }}
          >
            <div className="image-wrapper">
              <img
                className="rounded-t-lg "
                src={item.fields.image[0].url}
                width="100%"
                height="100%"
                alt={item.fields.name}
              />
            </div>

            {/* <div className="flex justify-between w-[90vw]"> */}
            <div className="content">
              <p>{item.fields.name}</p>
              <p>{item.fields.genres}</p>
              <div className="btn-wrapper">
                <p>{item.fields.price} Euro</p>
                <button className="btn-remove" onClick={() => removeItemFromCart(item.id)}>
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="total-price-wrapper">
          <h3 className="total-price">
            {' '}
            {!total ? <EmptyCart>Your cart is empty.</EmptyCart> : <>Total: {total} Euro</>}
          </h3>
        </div>
      </div>
      {/* <div className="right-col">Total: {total}</div> */}
    </Cartshop>
  );
}

const Cartshop = styled.div`
  display: flex;
  background-color: #fff;
  height: 50vh;
  .container {
    display: flex;
  }
  .image-wrapper {
    width: 15%;
    padding: 20px;
    /* height: 25%;  */
  }
  .content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    .btn-remove {
      border: 1px solid #000;
      padding: 8px;
      border-radius: 3px;
      font-size: 12px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #d22e2e;
        border-color: #d22e2e;
      }
    }
    .btn-wrapper {
      display: flex;
      margin-left: auto;
      align-items: center;
      justify-content: space-between;
      width: 10vw;
    }
  }
  .total-price {
    display: flex;
    font-size: 18px;
    font-weight: bold;
    border-top: 1px solid #000;
    margin-top: 20px;
    padding: 10px;
  }
  .total-price-wrapper {
    /* display: flex;
    margin-right: auto;
    justify-content: flex-end;
    align-items: flex-end;
    width: 65%; */

    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
  .right-col {
    position: absolute;
    text-align: center;
    width: 40%;
    height: 50%;
    right: 0;
    padding: 30px;
    background-color: #afafaf;
  }
`;

const EmptyCart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Cart;
