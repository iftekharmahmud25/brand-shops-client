import React, { useEffect, useState } from 'react';
import useTitle from '../../../components/hook/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  useTitle("Your cart");

  useEffect(() => {
    fetch('http://localhost:5000/cart')
      .then((response) => response.json())
      .then((data) => {
        setCartProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products from the cart:", error);
      });
  }, []);

  const handleDeleteProduct = (productName) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${productName}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (response.status === 200) {
              toast("Product has been deleted successfully", { type: 'success' });
              // Product was deleted successfully, update the local cart
              setCartProducts((prevProducts) =>
                prevProducts.filter((product) => product.name !== productName)
              );
            } else {
             
              toast.error("Failed to delete the product");
            }
          })
          .catch((error) => {
            
            toast.error("Error deleting the product:", error);
          });
      }
    });
  };

  return (
    <div>
      
      {cartProducts.length > 0 ? (
        <div>
            <h2 className='text-2xl text-center mt-6 mb-12 font-semibold'>Your Cart</h2>
        <div className="overflow-x-auto bg-white">
          <table className="table table-fixed w-full bg-white">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>
                    <img className="w-16 h-14 rounded-sm" src={product.image} alt="" />
                  </td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>
                    <button onClick={() => handleDeleteProduct(product.name)}>
                      <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/waste.png" alt="waste" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      ) : (
       <div className='w-[80%] mx-auto'>
         <p className='text-center text-xl my-6 font-semibold'>Your cart is empty.</p>
        <img className='w-[30%] mx-auto' src="https://img.icons8.com/stickers/100/image-not-avialable.png" alt="image-not-avialable"/>
       </div>
      )}
    </div>
  );
};

export default Cart;
