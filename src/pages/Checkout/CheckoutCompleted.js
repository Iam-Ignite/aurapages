import React from 'react'

export default function CheckoutCompleted() {
    return (
        <section className="bg-gray-50 py-1">
            <div className="container mb-36">
                <div className="flex flex-wrap gap-8 items-center justify-between my-10">
                    <div>
                        <a href="./index.html" className="flex items-center gap-3 border border-neutral108 rounded-md py-2 px-3 text-sm font-semibold text-neutral capitalize "><span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg></span> Go home</a>
                    </div>

                    <div className="flex items-center flex-wrap  gap-3">
                        <a href="#jhgjgdhcwe" className="text-sm text-neutral108 font-semibold capitalize">Transcorp</a>
                        <span className="text-sm font-bold text-neutral108"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg></span>
                        <a href="#jhgjgdhcwe" className="text-sm text-neutral108 font-semibold capitalize">Confirm and pay</a>
                        <span className="text-sm font-bold text-neutral108"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg></span>
                        <a href="#jhgjgdhcwe" className="text-sm text-neutral font-semibold capitalize">Checkout completed</a>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 md:gap-x-16 gap-y-8">
                    <div className="w-full">
                        <img src="../../img/congratulations.png" className=" w-full rounded-2xl " alt="" />
                    </div>
                    <div className="">
                        <div className="space-y-5">
                            <div className=" space-y-3">
                                <h1 className=" md:text-5xl text-3xl font-medium ">Congratulations!</h1>
                                <p className=" text-neutral108 font-medium ">Your order has been confirmed! 🎉</p>
                            </div>
                            <div className="pb-8 border-b space-y-3">
                                <h6 className=" text-base font-medium">Transcorp Hilton</h6>
                                <div className="flex items-center gap-2 mt-2">
                                    <p className="text-sm capitalize text-neutral">hosted by</p>
                                    <div>
                                        <img src="../../img/avatar.png" className="w-6 h-6 rounded-full" alt="" />
                                    </div>
                                    <p className="font-medium capitalize ">victor Iwenya</p>

                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src="../../img/icon/rate.svg" alt="" />
                                <div className="flex items-center gap-3">
                                    <p className="ml-1 font-semibold tx-sm">4.9<span className="ml-2 font-light text-neutral">(
                                        12 reviews
                                        )</span></p>
                                    <p className="text-xs text-neutral108">. Resturant</p>
                                </div>
                            </div>

                            <div className=" space-y-6 lg:w-[90%]">

                                <h3 className="text-2xl font-medium">Order details</h3>
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
                                <div className=" flex items-center text-xs text-gray-500 font-normal  justify-between rounded-lg p-3">
                                    <p className="uppercase">Food</p>
                                    <p className="uppercase">Qty</p>
                                    <p className="text-end">Amount</p>
                                </div>
                                 <div className=" grid grid-cols-3 items-center text-xs font-normal  justify-center rounded-lg p-3">
                                    <p className="uppercase 4">Semo & Okra Soup with Smoked Mackkrel</p>
                                    <p className="uppercase text-center">1</p>
                                    <p className="text-end">N3,500</p>
                                </div>
                                <div className=" grid grid-cols-3 items-center text-xs font-normal  justify-center rounded-lg p-3">
                                    <p className="uppercase 4">Semo & Okra Soup with Smoked Mackkrel</p>
                                    <p className="uppercase text-center">1</p>
                                    <p className="text-end">N3,500</p>
                                </div>
                              
                                 <div className="bg-gray-100 flex items-center text-sm text-black font-medium justify-between rounded-lg p-3">
                                    <p className="uppercase">total</p>
                                    <p className="uppercase">total</p>
                                    <p className="text-end">N7,000</p>
                                </div>


                            </div>
                            <div className="flex items-center gap-6">
                                <button className="py-2 px-3 border rounded-md text-black capitalize text-base font-medium ">view
                                    order</button>
                                <button className="py-2 px-5 bg-auraPrimary rounded-md text-white capitalize text-base font-medium ">back
                                    home</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}
