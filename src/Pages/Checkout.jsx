import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const Checkout = () => {
    const [billingToggle, setBillingToggle]= useState(true)
    const [shippingToggle, setShippingToggle]= useState(false)
    const [paymentToggle, setPaymentToggle]= useState(false)

    const[paymentMethod , setPaymentMethod] = useState("Cod")


  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
    
            <h3 className='text-2xl font-semibold mb-4 '>CHECKOUT</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() =>setBillingToggle(!billingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                            {billingToggle ? <FaAngleDown />  :<FaAngleUp />}
                        </div>
                        
                        <div className={`space-y-4 ${billingToggle ? "" :"hidden"}`}>
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
                        <div className='flex items-center justify-between' onClick={() =>setShippingToggle(!shippingToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                            {shippingToggle ? <FaAngleDown />  :<FaAngleUp />}
                        </div>
                        
                        <div className={`space-y-4 ${shippingToggle ? "" :"hidden"}`}>
                            <div>
                                <label className='block text-gray-700' htmlFor="">Address</label>
                                <input type='text' 
                                        name='name'
                                        placeholder='Enter Name'
                                        className='w-full px-3 py-2 border'
                                />
                            </div>
                        
                        <div>
                            <div>
                                <label className='block text-gray-700' htmlFor="">City</label>
                                <input type='email'
                                        name="email"
                                        placeholder='Enter Email'
                                        className='w-full px-3 py-2 border'
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
                                 />
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Payment Method */}
                    <div className='border p-2 mb-6'>
                        <div className='flex items-center justify-between' onClick={() =>setPaymentToggle(!paymentToggle)}>
                            <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                            {paymentToggle ? <FaAngleDown />  :<FaAngleUp />}
                        </div>
                        
                        <div className={`space-y-4 ${paymentToggle ? "" :"hidden"}`}>
                            <div className='flex items-center mb-2'>
                                <input type='Radio' 
                                        name='payment'
                                        checked  = {paymentMethod === "Cod"}
                                        onChange={() => setPaymentMethod("Cod")}

                                />
                                <label className='block text-gray-700 ml-2' htmlFor="">Cash On Delivery</label>
                            </div>
                            <div className='flex items-center mb-2'>
                                <input type='Radio' 
                                        name='payment'
                                        checked  = {paymentMethod === "dc"}
                                        onChange={() => setPaymentMethod("dc")}
                                        
                                />
                                <label className='block text-gray-700 ml-2' htmlFor="">Debit Card</label>
                            </div>
                            {paymentMethod === "dc" && (
                                <div>
                                    <h3>Debit Card Information</h3>
                                    <div>
                                        <label htmlFor='' >Card Number</label>
                                        <input type='text' placeholder='Enter Card Number'/>
                                    </div>
                                    <div>
                                        <label htmlFor='' >Card Holder Name</label>
                                        <input type='text' />
                                    </div>
                                    <div> 
                                        <div>
                                            <label htmlFor='' >Expire Date</label>
                                            <input type='text'  />
                                        </div>
                                        <div> 
                                            <label htmlFor='' >CVV</label>
                                            <input type='text' />
                                        </div>
                                    </div>
                                 </div>
                            )}
                        </div>
                        {paymentMethod}
                    </div>
                </div>
                {/* Order Summary in left side */}
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'></div>
                </div> 
        </div>
  )
}

export default Checkout
