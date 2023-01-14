import React from 'react'

function TableOrder() {
    return (

        <div className="w-full px-4 py-12 xl:px-0">
            <h1 className="flex items-center mb-6 text-2xl font-medium ">My Orders</h1>
            <div className="space-y-4">
                <div className="grid md:grid-cols-2 ">
                    <div className=" ">
                        <div className="flex hover:border-l-auraPrimary hover:border-l-4 border-b  justify-between md:w-[85%]  p-6 space-x-3 py-4 bg-gray-50 shadow-sm">
                            <div>
                                <p className="text-base font-thin text-auraPrimary ">Order ID : 10043132</p>
                                <p className="text-lg font-medium py-2">N 150, 500</p>
                                <p className="text-base font-normal text-gray-600">3 items</p>
                            </div>
                            <div className="mt-2 space-y-2 flex flex-col items-end">
                                <div className="flex items-center space-x-2">
                                    <img src="/img/icon/truck.svg" alt="" />
                                    <p className="text-sm font-normal text-auraPrimary">In- Progress</p>
                                </div>
                                <img src="/img/icon/progressbar.svg" className='w-16' alt="" />
                            </div>
                        </div>
                        <div className="flex hover:border-l-auraPrimary hover:border-l-4 border-b  justify-between md:w-[85%] p-6  space-x-3 py-4 bg-gray500 shadow-sm">
                            <div>
                                <p className="text-base font-thin text-auraPrimary ">Order ID : 10043132</p>
                                <p className="text-lg font-medium py-2">N 150, 500</p>
                                <p className="text-base font-normal text-gray-600">3 items</p>
                            </div>
                            <div className="mt-2 space-y-2 flex flex-col items-end">
                                <div className="flex items-center space-x-2">
                                    <img src="/img/icon/truck.svg" alt="" />
                                    <p className="text-sm font-normal text-auraPrimary">In- Progress</p>
                                </div>
                                <img src="/img/icon/progressbar.svg" className='w-16' alt="" />
                            </div>
                        </div>
                        <div className="flex hover:border-l-auraPrimary hover:border-l-4 border-b  justify-between md:w-[85%] p-6  space-x-3 py-4 bg-gray500 shadow-sm">
                            <div>
                                <p className="text-base font-thin text-auraPrimary ">Order ID : 10043132</p>
                                <p className="text-lg font-medium py-2">N 150, 500</p>
                                <p className="text-base font-normal text-gray-600">3 items</p>
                            </div>
                            <div className="mt-2 space-y-2 flex flex-col items-end">
                                <div className="flex items-center space-x-2">
                                    <img src="/img/icon/truck.svg" alt="" />
                                    <p className="text-sm font-normal text-auraPrimary">In- Progress</p>
                                </div>
                                <img src="/img/icon/progressbar.svg" className='w-16' alt="" />
                            </div>
                        </div>
                        <div className="flex hover:border-l-auraPrimary hover:border-l-4 border-b  justify-between md:w-[85%] p-6  space-x-3 py-4 bg-gray500 shadow-sm">
                            <div>
                                <p className="text-base font-thin text-auraPrimary ">Order ID : 10043132</p>
                                <p className="text-lg font-medium py-2">N 150, 500</p>
                                <p className="text-base font-normal text-gray-600">3 items</p>
                            </div>
                            <div className="mt-2 space-y-2 flex flex-col items-end">
                                <div className="flex items-center space-x-2">
                                    <img src="/img/icon/check.svg" alt="" />
                                    <p className="text-sm font-normal text-green-500">Completed</p>
                                </div>
                                <span className='text-base font-normal text-gray-600'>July 03 at 03:12 am</span>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h1 className='mb-6 text-2xl font-medium'>Order #453662 <span className='text-gray-500 text-base'>(3)</span></h1>
                        <div className="flex  items-start justify-between border-b p-4 space-x-3 rounded-lg bg-gray-50">
                            <div className="flex">
                                <div className='w-36 mr-2'>
                                    <img src="/img/Image Building.png" className="rounded-lg object-cover" alt="" />
                                </div>
                                <div className=" space-y-2">
                                    <p className="text-base font-thin ">Order ID : 10043132</p>
                                    <p className="text-lg font-medium ">Mother Armstrong</p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-base font-thin text-gray-600">1 item</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h1 className="text-lg font-medium ">N 150, 500</h1>
                                <span className="text-base font-thin text-gray-600">VAT Included</span>
                            </div>
                        </div>
                          <div className="flex  items-start justify-between border-b p-4 space-x-3 rounded-lg bg-gray-50">
                            <div className="flex">
                                <div className='w-36 mr-2'>
                                    <img src="/img/Image Building.png" className="rounded-lg object-cover" alt="" />
                                </div>
                                <div className=" space-y-2">
                                    <p className="text-base font-thin ">Order ID : 10043132</p>
                                    <p className="text-lg font-medium ">Mother Armstrong</p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-base font-thin text-gray-600">1 item</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h1 className="text-lg font-medium ">N 150, 500</h1>
                                <span className="text-base font-thin text-gray-600">VAT Included</span>
                            </div>
                        </div>
                          <div className="flex  items-start justify-between border-b p-4 space-x-3 rounded-lg bg-gray-50">
                            <div className="flex">
                                <div className='w-36 mr-2'>
                                    <img src="/img/Image Building.png" className="rounded-lg object-cover" alt="" />
                                </div>
                                <div className=" space-y-2">
                                    <p className="text-base font-thin ">Order ID : 10043132</p>
                                    <p className="text-lg font-medium ">Mother Armstrong</p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-base font-thin text-gray-600">1 item</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h1 className="text-lg font-medium ">N 150, 500</h1>
                                <span className="text-base font-thin text-gray-600">VAT Included</span>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default TableOrder