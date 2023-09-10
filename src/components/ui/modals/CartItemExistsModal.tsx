import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../store/cartSlice';
import { styled } from 'styled-components';

const CartItemExistsModal: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const modalTimeout = setTimeout(() => {
      dispatch(closeModal());
    }, 2000);

    return () => {
      clearTimeout(modalTimeout);
    };
  }, [dispatch]);

  return (
    <Modal>
      <div className="modal">
        <div className="modal-content">
          <p>This sampels pack already exists in your cart.</p>
        </div>
      </div>
    </Modal>
  );
};

const Modal = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    text-align: center;
  }
`;

export default CartItemExistsModal;
