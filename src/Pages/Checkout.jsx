import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = ({setOrder}) => {
    const [billingToggle, setBillingToggle] = useState(true)
    const [shippingToggle, setShippingToggle] = useState(false)
    const [paymentToggle, setPaymentToggle] = useState(false)

    const [paymentMethod, setPaymentMethod] = useState("Cod")
    const [shippingInfo , setShippingInfo] = useState({
        address:'',
        city:'',
        pincode:''
    })

    const cart = useSelector(state => state.cart)
    const navigate= useNavigate()

    const handleOrder =() =>{
        const newOrder = {
            products: cart.products,
            orderNumber :"1212",
            shippingInformation:shippingInfo,
            totalPrice:cart.totalPrice
        }
        setOrder(newOrder)
        navigate('/order-confirmation')
    }

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>

            <h3 className='text-2xl font-semibold mb-4 '>CHECKOUT</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setBillingToggle(!billingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                            {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>

                        <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700' htmlFor="">Name</label>
                                <input type='text'
                                    name='name'
                                    placeholder='Enter Name'
                                    className='w-full px-3 py-2 border'
                                />
                            </div>

                            <div>
                                <div>
                                    <label className='block text-gray-700' htmlFor="">Email</label>
                                    <input type='email'
                                        name="email"
                                        placeholder='Enter Email'
                                        className='w-full px-3 py-2 border'
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className='block text-gray-700' htmlFor="">Phone</label>
                                    <input type='text'
                                        name="phone"
                                        placeholder='Enter Phone #'
                                        className='w-full px-3 py-2 border'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shipping */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setShippingToggle(!shippingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>

                        <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700' htmlFor="">Address</label>
                                <input type='text'
                                    name='name'
                                    placeholder='Enter Name'
                                    className='w-full px-3 py-2 border'
                                    onChange={(e) => setShippingInfo({...shippingInfo , address: e.target.value })}
                                />
                            </div>

                            <div>
                                <div>
                                    <label className='block text-gray-700' htmlFor="">City</label>
                                    <input type='text'
                                        name="city"
                                        placeholder='Enter City'
                                        className='w-full px-3 py-2 border'
                                        onChange={(e) => setShippingInfo({...shippingInfo , city: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className='block text-gray-700' htmlFor="">Pin Code</label>
                                    <input type='text'
                                        name="phone"
                                        placeholder='Enter Phone #'
                                        className='w-full px-3 py-2 border'
                                        onChange={(e) => setShippingInfo({...shippingInfo , pincode : e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Payment Method */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() => setPaymentToggle(!paymentToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                            {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>

                        <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex items-center mb-2'>
                                <input type='Radio'
                                    name='payment'
                                    checked={paymentMethod === "Cod"}
                                    onChange={() => setPaymentMethod("Cod")}

                                />
                                <label className='block text-gray-700 ml-2' htmlFor="">Cash On Delivery</label>
                            </div>
                            <div className='flex items-center mb-2'>
                                <input type='Radio'
                                    name='payment'
                                    checked={paymentMethod === "dc"}
                                    onChange={() => setPaymentMethod("dc")}

                                />
                                <label className='block text-gray-700 ml-2' htmlFor="">Debit Card</label>
                            </div>
                            {paymentMethod === "dc" && (
                                <div className="p-4">
    <h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>
    <div className="mb-4">
        <label htmlFor="" className="block text-sm font-medium text-gray-700">Card Number</label>
        <input type="text" placeholder="Enter Card Number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
    </div>
    <div className="mb-4">
        <label htmlFor="" className="block text-sm font-medium text-gray-700">Card Holder Name</label>
        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
    </div>
    <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
            <label htmlFor="" className="block text-sm font-medium text-gray-700">Expire Date</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
        </div>
        <div className="mb-4">
            <label htmlFor="" className="block text-sm font-medium text-gray-700">CVV</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
        </div>
    </div>
</div>

                            )}
                        </div>
                        {paymentMethod}
                    </div>
                </div>
                {/* Order Summary in left side */}
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                    <h3 className='text-lg font semibold mb-4'>Order Summary</h3>
                    <div className='space-y-4'>
                        {cart.products.map(product => (
                            <div key={product.id} className='flex justify-between'>
                                <div className='flex items-center'>
                                    <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                                    <div className='ml-4'>
                                        <h4 className='text-md font-semibold'>{product.name}</h4>
                                        <p className='text-gray-600'>
                                            ${product.price} x {product.quantity}
                                        </p>
                                    </div>
                                </div>
                                <div className='text-gray-800'>
                                    ${product.price * product.quantity}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-4 border-t pt-4'>
                        <div className='flex justify-between'>
                            <span >Total Price:</span>
                            <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                        <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'
                        onClick={handleOrder}
                        >Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout
