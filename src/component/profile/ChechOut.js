import React from 'react'

function ChechOut() {
    return (
        <div className="w-full px-4 py-12 xl:px-0">
            <h1 className="flex items-center mb-6 text-2xl font-medium "><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg> Carts</h1>
            <div className="space-y-4">
                <h1 className="flex items-center mb-6 ml-2 text-2xl font-medium "> Checkout</h1>
                <div className="grid gap-4 md:grid-cols-2 ">
                    <div className=" ">
                        <div className="border-2 rounded-lg p-5">
                            <h2 className='flex items-center mb-6 ml-2 text-base font-light text-gray-500'>DELIVERY  TYPE <svg width="16" className='ml-2' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.4133 5.66261C3.72664 -0.110728 12.28 -0.104061 13.5866 5.66927C14.3533 9.05594 12.2466 11.9226 10.4 13.6959C9.75461 14.3181 8.89309 14.6658 7.99664 14.6658C7.10018 14.6658 6.23867 14.3181 5.5933 13.6959C3.7533 11.9226 1.64664 9.04927 2.4133 5.66261V5.66261Z" stroke="#23262F" stroke-width="1.5" />
                                <path d="M6.1665 7.66667L7.1665 8.66667L9.83317 6" stroke="#23262F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </h2>
                            <div className="flex flex-wrap items-center gap-4" id="payment-methods-Tab" >
                                <div className="flex items-center mr-4 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" id="banktransfer-tab" >
                                    <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-3 h-3 text-blue-600 bg-gray-100 border-black focus:ring-auraPrimary  focus:ring " />
                                    <label for="inline-radio" className="ml-2 text-sm font-light text-black ">
                                        Pickup
                                    </label>
                                </div>
                                <div className="flex items-center mr-4 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300">
                                    <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-3 h-3 text-blue-600 bg-gray-100 border-black focus:ring-auraPrimary  focus:ring " />
                                    <label for="inline-radio" className="ml-2 text-sm font-light text-black ">Shipping
                                    </label>
                                </div>

                            </div>
                        </div>

                        <div className="border-2 mt-4 rounded-lg p-5">
                            <h2 className='flex items-center mb-6 ml-2 text-base font-light text-gray-500'>SHIPPING ADDRESS <svg width="16" className='ml-2' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.4133 5.66261C3.72664 -0.110728 12.28 -0.104061 13.5866 5.66927C14.3533 9.05594 12.2466 11.9226 10.4 13.6959C9.75461 14.3181 8.89309 14.6658 7.99664 14.6658C7.10018 14.6658 6.23867 14.3181 5.5933 13.6959C3.7533 11.9226 1.64664 9.04927 2.4133 5.66261V5.66261Z" stroke="#23262F" stroke-width="1.5" />
                                <path d="M6.1665 7.66667L7.1665 8.66667L9.83317 6" stroke="#23262F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </h2>
                            <div className="flex flex-wrap items-center gap-4" id="payment-methods-Tab">
                                <select type="text" id="password" className="block w-full bg-transparent  placeholder:text-sm placeholder:font-medium" placeholder="Location" required>
                                    <option className="text-sm font-medium">Victoria Island</option>
                                </select>

                            </div>
                        </div>
                        <h1 className="flex items-center mt-6 ml-2 text-2xl font-medium "> Pay with</h1>
                        <div className="flex flex-wrap mt-4 ml-2 items-center gap-4" id="payment-methods-Tab" >
                            <div className="flex items-center mr-4 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" id="banktransfer-tab" >
                                <input id="inline-radios" type="radio" value="" name="inline-radio-groups" className="w-3 h-3 text-blue-600 bg-gray-100 border-black focus:ring-auraPrimary  focus:ring " />
                                <label for="inline-radios" className="ml-2 text-base font-normal text-gray-600 ">
                                    Flutterwave
                                </label>
                            </div>
                            <div className="flex items-center mr-4 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300">
                                <input id="inline-radios" type="radio" value="" name="inline-radio-groups" className="w-3 h-3 text-blue-600 bg-gray-100 border-black focus:ring-auraPrimary  focus:ring " />
                                <label for="inline-radios" className="ml-2 text-base font-normal text-gray-600 ">Seerbit
                                </label>
                            </div>

                        </div>


                        <div className="mt-6 ml-5">
                            <p className=" text-2xl font-medium mb-4 ">Coupon</p>
                            <form action="">
                                <div className="mb-6">
                                    <label for="Display Name" className="block mb-2 text-xs font-bold uppercase text-neutral108">Referral
                                        Code / points / coupon</label>
                                    <input type="text" id="email" className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder:text-sm placeholder:font-medium" placeholder="XYZ2022" required />
                                </div>
                                <div className="mb-6">
                                    <label for="Display Name" className=" mb-2 text-xs font-bold uppercase flex items-center justify-between  text-neutral108">
                                        <p>Insurance</p>
                                        <button className=" underline text-auraPrimary " type="button" data-modal-toggle="insurancepackages-modal">View Insurance
                                            Packages</button>
                                    </label>
                                    <select type="text" id="email" className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder:text-sm placeholder:font-medium" placeholder="Fasasi" required>
                                        <option>Personal Accident Bronze</option>
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <a href="./checkout-complete.html" className=" py-3 rounded-xl text-base font-normal  text-center w-full bg-auraPrimary text-white capitalize" type="button">Confirm and pay</a>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="">
                        <div className=" h-auto checkout-box space-y-6 p-6 py-10 border rounded-3xl">

                            <div className="flex items-center gap-4">
                                <div>
                                    <img src="../../img/checkout.png" className=" max-w-full rounded-2xl " alt="" />
                                </div>
                                <div className="w-60">
                                    <div className="space-y-5">
                                        <div className="pb-8 border-b space-y-3">
                                            <h6 className=" text-base font-medium">Naya Shots</h6>
                                            <p className=" text-neutral108 font-normal text-base">Hosted by <span className="text-black font-normal">Igbokwe Naya</span></p>
                                            <div className="flex items-center gap-2 text-neutral108 capitalize text-xs font-light">
                                                <img src="/Vector (29).svg" alt="" />
                                                <p>Photography</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <img src="../../img/icon/rate.svg" alt="" />
                                            <p className="ml-1 font-semibold tx-sm">4.9<span className="ml-2 font-light text-neutral">(
                                                12 reviews
                                                )</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-neutral107 rounded-2xl p-4 space-y-8 lg:w-full">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3 ">
                                        <div><img src="../../img/icon/useer.svg" alt="" /></div>
                                        <div>
                                            <p className="text-xs font-light text-neutral ">Guest</p>
                                            <p className="text-black text-base font-normal">Tomiwa Sorunke</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center  space-x-3 ">
                                        <div><img src="../../img/Combined-Shape.svg" alt="" /></div>
                                        <div>
                                            <p className="text-xs font-light text-neutral ">Call Host</p>
                                            <p className="text-black text-base font-normal">+2348132853417 </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3 ">
                                        <div><img src="/img/Group 13388.svg" alt="" /></div>
                                        <div>
                                            <p className="text-xs font-light text-neutral ">Pickup Location</p>
                                            <p className="text-black text-base font-normal">House 24b, parkview
                                                estate, Ikoyi, Lagos.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 ">
                                        <div><img src="../../img/icon/calendar.svg" alt="" /></div>
                                        <div>
                                            <p className="text-xs font-light text-neutral ">Check-in</p>
                                            <p className="text-black text-base font-normal">Mar 25, 2022</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="space-y-4">
                                <p className=" text-2xl capitalize font-medium ">Order details</p>
                                <div className="flex items-center justify-between w-full text-sm text-neutral font-medium  ">
                                    <div className="flex items-center gap-3">
                                        <img src="../../img/hand cart.svg" alt="" />
                                        <p className="">Booking code:</p>
                                    </div>
                                    <p className="text-black text-left">RST3440049</p>

                                </div>
                                <div className="flex items-center justify-between w-full text-sm text-neutral font-medium  ">
                                    <div className="flex items-center gap-3">
                                        <img src="../../img/calenderly.svg" alt="" />
                                        <p className="">Date:</p>
                                    </div>
                                    <p className="text-black text-left">20 Apr, 2022 13:22pm</p>

                                </div>

                                <div className="flex items-center justify-between w-full text-sm text-neutral font-medium  ">
                                    <div className="flex items-center gap-3">
                                        <img src="../../img/wallet.svg" alt="" />
                                        <p className="">Payment status:</p>
                                    </div>
                                    <p className="text-black text-left">Approved</p>

                                </div>
                                <div className=" flex items-center text-xs text-gray-500 font-normal border-b  justify-between p-3">
                                    <p className="uppercase">Artwork details</p>
                                    <p className="text-end">Amount</p>
                                </div>
                                <div className=" grid grid-cols-2 items-center text-xs font-normal border-b  justify-center p-3">
                                    <p className="uppercase 4">Mother Armstring</p>
                                    <p className="text-end">N150,500</p>
                                </div>
                                <div className=" grid grid-cols-2 items-center text-xs font-normal justify-center p-3">
                                    <p className="uppercase 4">Einstein eyes</p>
                                    <p className="text-end">N150,500</p>
                                </div>

                                <div className="bg-gray-100 flex items-center text-sm text-black font-medium justify-between rounded-lg p-3">
                                    <p className="uppercase">total</p>
                                    <p className="text-end">N301,000</p>
                                </div>
                            </div>

                            <div className=" text-xs text-center flex justify-center items-center text-neutral">
                                <img src="../../img/icon/free.svg" className='h-4 mr-1' alt="" />
                                <a href="#dssd">Availability Status: <span className="text-[#16B94F]">Available</span></a>
                            </div>

                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default ChechOut