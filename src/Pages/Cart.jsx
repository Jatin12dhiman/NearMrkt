import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from '../assets/Images/emptyCart.png'
import { FaTrashAlt } from 'react-icons/fa'
import Modal from '../Components/Modal'
import ChangeAddress from '../Components/ChangeAddress'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [address, setAddress] = useState('Model Town , Samalkha')
    const [isModelOpen, setIsModelOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 sm:px-6 md:px-12 lg:px-20'>
            {cart.products.length > 0 ? (
                <div>
                    <h3 className='text-xl sm:text-2xl font-semibold mb-6 text-center md:text-left'>
                        SHOPPING CART
                    </h3>

                    {/* Grid layout: Product list (left) & Order summary (right) */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        
                        {/* Product List */}
                        <div className='lg:col-span-2'>
                            {/* Header row */}
                            <div className='hidden md:flex justify-between border-b items-center mb-4 text-xs font-bold'>
                                <p>PRODUCTS</p>
                                <div className='flex space-x-6 lg:space-x-8'>
                                    <p>PRICE</p>
                                    <p>QUANTITY</p>
                                    <p>SUBTOTAL</p>
                                    <p>REMOVE</p>
                                </div>
                            </div>

                            {cart.products.map((product) => (
                                <div
                                    key={product.id}
                                    className='flex flex-col md:flex-row items-center justify-between p-3 border-b space-y-4 md:space-y-0'
                                >
                                    {/* Product Image + Name */}
                                    <div className='flex items-center space-x-4 w-full md:w-auto'>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className='w-16 h-16 object-contain rounded'
                                        />
                                        <div className='flex-1'>
                                            <h3 className='text-base sm:text-lg font-semibold'>
                                                {product.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Price, Quantity, Subtotal, Remove */}
                                    <div className='flex items-center justify-between md:space-x-8 w-full md:w-auto'>
                                        <p className='text-sm sm:text-base'>${product.price}</p>

                                        <div className='flex items-center border rounded overflow-hidden'>
                                            <button
                                                className='text-lg font-bold px-2 border-r'
                                                onClick={() => dispatch(decreaseQuantity(product.id))}
                                            >
                                                -
                                            </button>
                                            <p className='text-base px-3'>{product.quantity}</p>
                                            <button
                                                className='text-lg px-2 border-l'
                                                onClick={() => dispatch(increaseQuantity(product.id))}
                                            >
                                                +
                                            </button>
                                        </div>

                                        <p className='text-sm sm:text-base'>
                                            ${(product.quantity * product.price).toFixed(2)}
                                        </p>

                                        <button
                                            className='text-red-500 hover:text-red-700 text-lg'
                                            onClick={() => dispatch(removeFromCart(product.id))}
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className='bg-white p-6 rounded-lg shadow-md border h-fit'>
                            <h3 className='text-base font-semibold mb-5'>CART TOTAL</h3>

                            <div className='flex justify-between mb-4 border-b pb-2'>
                                <span className='text-sm'>TOTAL ITEMS :</span>
                                <span>{cart.totalQuantity}</span>
                            </div>

                            <div className='mb-4 border-b pb-3'>
                                <p className='text-sm'>Shipping:</p>
                                <p className='ml-2 text-sm'>
                                    Shipping to
                                    <span className='font-bold'> {address}</span>
                                </p>
                                <button
                                    className='text-blue-500 hover:underline mt-2 ml-2 text-sm'
                                    onClick={() => setIsModelOpen(true)}
                                >
                                    Change address
                                </button>
                            </div>

                            <div className='flex justify-between mb-4 text-sm sm:text-base'>
                                <span>Total Price:</span>
                                <span>${cart.totalPrice.toFixed(2)}</span>
                            </div>

                            <button
                                className='w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-800 text-sm sm:text-base'
                                onClick={() => navigate('/checkout')}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>

                    {/* Modal */}
                    <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
                        <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen} />
                    </Modal>
                </div>
            ) : (
                <div className='flex flex-col items-center justify-center'>
                    <img src={EmptyCart} alt="Empty Cart" className='h-64 sm:h-80 md:h-96' />
                    <button
                        className='mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800'
                        onClick={() => navigate('/shop')}
                    >
                        Go to Shop
                    </button>
                </div>
            )}
        </div>
    )
}

export default Cart
