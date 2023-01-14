import React from 'react'

function FoodMenu() {
    return (
        <section className="bg-gray-50">


            <div className="container pt-8">
                <div className="flex flex-col justify-between md:flex-row ">
                    <div>
                        <a href="./index.html"
                            className="flex items-center w-40 px-4 py-2 mb-6 font-semibold border btn md:w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            Go home
                        </a>
                    </div>

                </div>

                {/* <!-- page content  --> */}
                <div className="flex flex-col justify-between gap-4 mt-4 md:flex-row">
                    <div>
                        <h1 className="text-3xl font-bold md:text-4xl">Z Kitchen Menu</h1>
                        <div className="flex flex-wrap items-center gap-5 mt-4">
                            <div>
                                <img src="../../img/avatar.png" className="w-8 h-8 rounded-full" alt="" />
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="../../img/icon/rate.svg" alt="" />
                                <p className="font-medium">4.8 <span className="text-neutral">(256 reviews)</span></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/img/icon/home.svg" alt="" />
                                <p className="text-[#777E91] text-base font-normal">Experience</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <img src="../../img/icon/flag.svg" alt="" />
                                <p className="text-neutral">Epe, Lagos</p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2">
                            <div>
                                <button type="button" className="btn">
                                    <img src="../../img/icon/location-product.svg" alt="" />
                                </button>
                            </div>
                            <div>
                                <button type="button" className="pl-3 btn">
                                    <img src="../../img/icon/share.svg" alt="" />
                                </button>
                            </div>
                            <div>
                                <button type="button" className="btn" data-modal-toggle="loveModal">
                                    <img src="../../img/icon/love.svg" alt="" />
                                </button>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Properties Under this section --> */}
            <div className="container mb-20">
                <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <div className="relative">
                            <img src="../../img/kitchen1.png" className="w-full rounded-t-3xl" alt="" />
                            <button
                                className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Semo & okra soup with
                                smoked mackrel</p>
                            <span className="text-auraPrimary font-medium text-base ">N3,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/kitchen1.png" className="w-full rounded-t-3xl" alt="" />
                            <button
                                className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Semo & okra soup with
                                smoked mackrel</p>
                            <span className="text-auraPrimary font-medium text-base ">N3,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/kitchen1.png" className="w-full rounded-t-3xl" alt="" />
                            <button
                                className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Semo & okra soup with
                                smoked mackrel</p>
                            <span className="text-auraPrimary font-medium text-base ">N3,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/kitchen1.png" className="w-full rounded-t-3xl" alt="" />
                            <button
                                className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Semo & okra soup with
                                smoked mackrel</p>
                            <span className="text-auraPrimary font-medium text-base ">N3,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/kitchen1.png" className="w-full rounded-t-3xl" alt="" />
                            <button
                                className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Semo & okra soup with
                                smoked mackrel</p>
                            <span className="text-auraPrimary font-medium text-base ">N3,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/kitchen1.png" className="w-full rounded-t-3xl" alt="" />
                            <button
                                className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Semo & okra soup with
                                smoked mackrel</p>
                            <span className="text-auraPrimary font-medium text-base ">N3,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/kitchen1.png" className="w-full rounded-t-3xl" alt="" />
                            <button
                                className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Semo & okra soup with
                                smoked mackrel</p>
                            <span className="text-auraPrimary font-medium text-base ">N3,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/kitchen1.png" className="w-full rounded-t-3xl" alt="" />
                            <button
                                className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Semo & okra soup with
                                smoked mackrel</p>
                            <span className="text-auraPrimary font-medium text-base ">N3,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/kitchen1.png" className="w-full rounded-t-3xl" alt="" />
                            <button
                                className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Semo & okra soup with
                                smoked mackrel</p>
                            <span className="text-auraPrimary font-medium text-base ">N3,500</span>
                        </div>

                    </div>
                    <div className="lg:hidden">
                        <div className="relative">
                            <img src="../../img/kitchen1.png" className="w-full rounded-t-3xl" alt="" />
                            <button
                                className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Semo & okra soup with
                                smoked mackrel</p>
                            <span className="text-auraPrimary font-medium text-base ">N3,500</span>
                        </div>

                    </div>

                </div>

            </div>


            <div className="container py-8">
                <div className="flex flex-col gap-6 mt-8 md:gap-16 md:flex-row">
                    <div className="md:w-1/2">
                        <div>
                            <div className="pt-4 pb-6 mb-6 border-b ">
                                <h3 className="text-2xl font-medium"> Z Kitchen</h3>
                                <div className="flex items-center gap-2 mt-2">
                                    <p className="text-sm capitalize text-neutral">hosted by</p>
                                    <div>
                                        <img src="../../img/avatar.png" className="w-6 h-6 rounded-full" alt="" />
                                    </div>
                                    <p className="font-medium capitalize ">victor Iwenya</p>

                                </div>
                            </div>



                            <div className="space-y-8 ">
                                <div className="space-y-8">
                                    <div className="space-y-5">
                                        <h3 className="text-2xl font-medium capitalize ">Order Details</h3>
                                        <p className="text-base font-medium text-neutral">Who are you booking for?</p>
                                        <div className="flex">
                                            <div className="flex items-center mr-4">
                                                <input id="inline-radio" type="radio" value="" name="inline-radio-group"
                                                    className="w-3 h-3 text-blue-600 bg-gray-100 border-black focus:ring-auraPrimary focus:ring " />
                                                <label for="inline-radio"
                                                    className="ml-2 text-base font-light text-neutral108 ">For
                                                    Myself
                                                </label>
                                            </div>
                                            <div className="flex items-center mr-4">
                                                <input id="inline-radio" type="radio" value="" name="inline-radio-group"
                                                    className="w-3 h-3 text-blue-600 bg-gray-100 border-black focus:ring-auraPrimary focus:ring " />
                                                <label for="inline-radio"
                                                    className="ml-2 text-base font-light text-neutral108 ">For
                                                    someone else
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <form className=" gap-4 ">
                                        <div className="mb-6">
                                            <label for="Display Name"
                                                className="block mb-2 text-xs font-bold uppercase text-neutral108">FIRST
                                                NAME</label>
                                            <input type="text" id="email"
                                                className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder:text-sm placeholder:font-medium"
                                                placeholder="Fasasi" />
                                        </div>
                                        <div className="mb-6">
                                            <label for="Real Name"
                                                className="block mb-2 text-xs font-bold uppercase text-neutral108">LAST
                                                NAME</label>
                                            <input type="text" id="password"
                                                className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder:text-sm placeholder:font-medium"
                                            />
                                        </div>
                                        <div className="col-span-2 mb-6">
                                            <label for="Phone Number"
                                                className="block mb-2 text-xs font-bold uppercase text-neutral108">EMAIL
                                                ADDRESS</label>
                                            <input type="email" id="password"
                                                className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder:text-sm placeholder:font-medium"
                                                placeholder="Sheriffasasi@gmail.com" />
                                        </div>
                                        <div className="col-span-2 mb-6">
                                            <label for=""
                                                className="block mb-2 text-xs font-bold uppercase text-neutral108">PHONE
                                                NUMBER</label>
                                            <input type="number" id="password"
                                                className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder:text-sm placeholder:font-medium"
                                                placeholder="08089143562" />
                                        </div>

                                        <div className="grid grid-cols-2 col-span-2 gap-4">
                                            <div
                                                className="flex items-center justify-between bg-[#F4F5F6] px-5 py-4 rounded-md">
                                                <div>
                                                    <p className="text-xs font-light text-neutral ">Dates</p>
                                                    <p className="text-base font-normal text-black">Mar 25, 2022</p>
                                                </div>
                                                <div><img src="../../img/edit.svg" alt="" /></div>
                                            </div>


                                        </div>
                                            <div className="relative overflow-x-auto my-8">
                                                <table className="w-full text-sm ">
                                                    <thead className="text-base font-thin text-left">
                                                        <tr>
                                                            <th scope="col" className="px-6 py-3 text-sm font-normal text-black">
                                                                Event
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 text-sm font-normal text-black">
                                                                Qty
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 text-sm font-normal text-black">
                                                                Amount
                                                            </th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border-b py-4">
                                                            <td className="px-6 py-4 text-sm whitespace-nowrap">
                                                                <div className="flex items-center text-neutral">
                                                                    <img src="../../img/icon/ticket-icon.svg" alt="" className="mr-1.5" />
                                                                    <p>
                                                                        Semo & Okra Soup with smoked mackrel
                                                                    </p>
                                                                </div>
                                                            </td>
                                                            <td className="px-4 md:py-4">
                                                                <div className="flex items-center w-32 md:w-3/4">
                                                                    <button type="button" className="minus-q product" data-type="minus" data-field="quant[1]">
                                                                        <img src="/img/minus-qty.svg" className="w-7" alt="" />
                                                                    </button>
                                                                    <input type="number" className="mx-3 text-center border rounded-md w-10 bg-gray-100 form-control input-number" name="qty" value="0" />
                                                                    <button type="button" className="plus-q product" data-type="plus" data-field="quant[1]">
                                                                        <img src="/img/plus-qty.svg" alt="" className="w-7" />
                                                                    </button>
                                                                </div>

                                                            </td>
                                                            <td className="px-6 py-4 text-base font-medium">
                                                                N3,500
                                                            </td>

                                                        </tr>
                                                           <tr className="">
                                                            <td className="px-6 py-4 text-sm whitespace-nowrap">
                                                                <div className="flex items-center text-neutral">
                                                                    <img src="../../img/icon/ticket-icon.svg" alt="" className="mr-1.5" />
                                                                    <p>
                                                                        Vegetables & crispy chicken
                                                                    </p>
                                                                </div>
                                                            </td>
                                                            <td className="px-4 md:py-4">
                                                                <div className="flex items-center w-32 md:w-3/4">
                                                                    <button type="button" className="minus-q product" data-type="minus" data-field="quant[1]">
                                                                        <img src="/img/minus-qty.svg" className="w-7" alt="" />
                                                                    </button>
                                                                    <input type="number" className="mx-3 text-center border rounded-md w-10 bg-gray-100 form-control input-number" name="qty" value="0" />
                                                                    <button type="button" className="plus-q product" data-type="plus" data-field="quant[1]">
                                                                        <img src="/img/plus-qty.svg" alt="" className="w-7" />
                                                                    </button>
                                                                </div>

                                                            </td>
                                                            <td className="px-6 py-4 text-base font-medium">
                                                                N3,500
                                                            </td>

                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="flex items-center justify-between p-3 text-sm font-medium text-black bg-gray-100 rounded-lg"><p className="">Total</p><p className="text-end">N7,000</p></div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="border rounded-xl md:p-5 shadow-2xl">
                            <div className="">
                                <div className="flex items-center justify-between p-4 pb-0 md:p-8">
                                    <div className="space-y-4 ">
                                        <img src="../../img/resturant.png" className="rounded-md w-36 h-36" alt="" />
                                    </div>
                                    <div className="relative ">
                                        <div className="space-y-6">
                                            <div className="pt-4 pb-6 mb-6 border-b ">
                                                <h3 className="text-base font-medium">Z Kitchen</h3>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <p className="text-xs capitalize text-neutral">hosted by</p>
                                                    <div>
                                                        <img src="../../img/avatar.png" className="w-6 h-6 rounded-full" alt=""
                                                        />
                                                    </div>
                                                    <p className="text-sm font-medium capitalize ">victor Iwenya</p>

                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <img src="../../img/icon/rate.svg" alt="" />
                                                <p className="font-medium">4.8 <span className="text-neutral">(256 reviews)</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 pt-2 space-y-8 md:px-8">
                                    <div className="p-4 bg-gray-100 rounded-2xl">
                                        <div className="grid grid-cols-2 space-y-4">
                                            <div className="flex items-center space-x-3 ">
                                                <div><img src="../../img/icon/useer.svg" alt="" /></div>
                                                <div>
                                                    <p className="text-xs font-light text-neutral ">Guest</p>
                                                    <p className="text-base font-normal text-black">2 guests</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-3 ">
                                                <div><img src="../../img/icon/calendar.svg" alt="" /></div>
                                                <div>
                                                    <p className="text-xs font-light text-neutral ">Check-in</p>
                                                    <p className="text-base font-normal text-black">Mar 25, 2022</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <button data-modal-toggle="loveModal" type="button"
                                            className="w-full px-4 py-3 font-semibold text-black border rounded-lg xl:w-40 border-neutral ">save
                                            <span className="ml-1 text-neutral">+</span></button>

                                        <button
                                            className="w-full py-3 mx-auto text-base font-medium text-white capitalize rounded-xl bg-auraPrimary"
                                            type="button" data-modal-toggle="reserve-modal">Place Order</button>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="font-semibold text-2xl">Order Summary</p>
                                        <div className="flex items-center justify-between">
                                            <div className="px-3 space-y-4 text-sm font-light text-neutral">
                                                <p>Sub Total</p>
                                                <p>Service fee</p>
                                            </div>
                                            <div className="px-3 space-y-4 text-sm font-medium text-black text-end">
                                                <p>N5,000</p>
                                                <p>N500</p>
                                            </div>
                                        </div>

                                        <div
                                            className="flex items-center justify-between p-3 text-sm font-medium text-black bg-gray-100 rounded-lg">
                                            <p className="">Total</p>
                                            <p className="text-end">N792,500</p>
                                        </div>
                                    </div>

                                    <div className="pb-4 text-xs text-center text-neutral">
                                        <a href="rgg#">Availability Status: <span className="text-[#16B94F]">Available</span></a>
                                    </div>
                                </div>



                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default FoodMenu