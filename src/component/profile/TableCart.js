import React from 'react'

function TableCart() {
    return (
        <>
            <div className="w-full px-4 py-12 xl:px-0">
                <h1 className="flex items-center mb-6 text-2xl font-medium ">Carts</h1>
                <div className="space-y-4">
                    <div className="w-full ">


                        <div className="">
                            <div className="flex   items-center justify-between border-b p-4 space-x-3 rounded-lg bg-gray-50">
                                <div className="flex">
                                    <div className='w-36 mr-2'>
                                        <img src="/img/Image Building.png" className="rounded-lg object-cover" alt="" />
                                    </div>
                                    <div className=" space-y-2 flex items-center">
                                        <p className="text-base font-normal text-gray-700 ">Mother Armstrong</p>
                                    </div>
                                </div>
                                <div className="flex justify-between w-32">
                                    <h1 className="text-lg font-medium ">N 150, 500</h1>
                                    <div className="flex items-center">
                                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center t justify-between border-b p-4 space-x-3 rounded-lg bg-gray-50">
                                <div className="flex">
                                    <div className='w-36 mr-2'>
                                        <img src="/img/Image Building.png" className="rounded-lg object-cover" alt="" />
                                    </div>
                                    <div className=" space-y-2 flex items-center">
                                        <p className="text-base font-normal text-gray-700 ">Mother Armstrong</p>
                                    </div>
                                </div>
                                <div className="flex justify-between w-32">
                                    <h1 className="text-lg font-medium ">N 150, 500</h1>
                                    <div className="flex items-center">
                                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center t justify-between border-b p-4 space-x-3 rounded-lg bg-gray-50">
                                <div className="flex">
                                    <div className='w-36 mr-2'>
                                        <img src="/img/Image Building.png" className="rounded-lg object-cover" alt="" />
                                    </div>
                                    <div className=" space-y-2 flex items-center">
                                        <p className="text-base font-normal text-gray-700 ">Mother Armstrong</p>
                                    </div>
                                </div>
                                <div className="flex justify-between w-32">
                                    <h1 className="text-lg font-medium ">N 150, 500</h1>
                                    <div className="flex items-center">
                                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div className="flex items-center mt-6 ml-2 space-x-8">
                    <div>
                        <button className="px-4 py-3 text-sm font-semibold text-white rounded-lg bg-auraPrimary ">Proceed to Checkout</button>
                    </div>

                    <div>
                        <button className="text-sm font-semibold text-red-600"><span className="mr-4 text-base font-normal">x</span> Remove (1)</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableCart