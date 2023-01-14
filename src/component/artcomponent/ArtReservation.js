import React from 'react'

function ArtReservation() {
    return (
        <section className="bg-gray-50">


            <div className="container pt-8">

                <div className="flex flex-col justify-between md:flex-row ">
                    <div><a href="./index.html" className="flex items-center w-40 px-4 py-2 mb-6 font-semibold border rounded-full md:w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
                        </svg>Go home</a></div><div><nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center"><a href="./index.html" className="inline-flex items-center text-sm font-semibold text-neutral hover:text-gray-900 ">Home</a></li><li aria-current="page">
                                    <div className="flex items-center"><svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg><span className="ml-1 text-sm font-semibold text-neutral md:ml-2 dark:text-gray-400">Photography</span></div></li><li><div className="flex items-center"><svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg><a href="#fdgre" className="ml-1 text-sm font-semibold text-neutral hover:text-gray-900 md:ml-2 ">Naya Shot</a></div></li></ol></nav></div></div>
                {/* <!-- page content  --> */}
                <div className="flex flex-col justify-between gap-4 mt-4 md:flex-row">
                    <div>
                        <h1 className="text-3xl font-bold md:text-4xl">Naya Shot</h1>
                        <div className="flex flex-wrap items-center gap-5 mt-4">
                            <div>
                                <img src="../../img/avatar.png" className="w-8 h-8 rounded-full" alt="" />
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="../../img/icon/rate.svg" alt="" />
                                <p className="font-medium">4.8 <span className="text-neutral">(256 reviews)</span></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/img/icon/camera.svg" alt="" />
                                <p className="text-[#777E91] text-base font-normal">Photography</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <img src="../../img/icon/flag.svg" alt="" />
                                <p className="text-neutral">Ikeja, Lagos</p>
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
                            <img src="../../img/art.png" className="w-full rounded-t-3xl" alt="" />
                            <button className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Mothers Lust</p>
                            <span className="text-black font-medium text-base ">N150,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/art.png" className="w-full rounded-t-3xl" alt="" />
                            <button className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Mothers Lust</p>
                            <span className="text-black font-medium text-base ">N150,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/art.png" className="w-full rounded-t-3xl" alt="" />
                            <button className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Mothers Lust</p>
                            <span className="text-black font-medium text-base ">N150,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/art.png" className="w-full rounded-t-3xl" alt="" />
                            <button className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Mothers Lust</p>
                            <span className="text-black font-medium text-base ">N150,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/art.png" className="w-full rounded-t-3xl" alt="" />
                            <button className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Mothers Lust</p>
                            <span className="text-black font-medium text-base ">N150,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/art.png" className="w-full rounded-t-3xl" alt="" />
                            <button className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Mothers Lust</p>
                            <span className="text-black font-medium text-base ">N150,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/art.png" className="w-full rounded-t-3xl" alt="" />
                            <button className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Mothers Lust</p>
                            <span className="text-black font-medium text-base ">N150,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/art.png" className="w-full rounded-t-3xl" alt="" />
                            <button className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Mothers Lust</p>
                            <span className="text-black font-medium text-base ">N150,500</span>
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <img src="../../img/art.png" className="w-full rounded-t-3xl" alt="" />
                            <button className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Mothers Lust</p>
                            <span className="text-black font-medium text-base ">N150,500</span>
                        </div>

                    </div>
                    <div className="lg:hidden">
                        <div className="relative">
                            <img src="../../img/art.png" className="w-full rounded-t-3xl" alt="" />
                            <button className="py-2 px-4 bg-auraPrimary text-white flex items-center gap-4 absolute bottom-0 left-0 capitalize">
                                <span>+</span>
                                <p>add to cart</p>
                            </button>
                        </div>
                        <div className="flex items-start justify-between bg-[#FCFCFD] border rounded-b-3xl px-4 py-5">
                            <p className="text-base fon-medium w-52 text-black">Mothers Lust</p>
                            <span className="text-black font-medium text-base ">N150,500</span>
                        </div>

                    </div>


                </div>

            </div>


            <div className="container py-8">
                <div className="flex flex-col gap-6 mt-8 md:gap-16 md:flex-row">
                    <div className="md:w-1/2">
                        <div>
                            <div className="pt-4 pb-6 mb-6 border-b md:px-10">
                                <h3 className="text-2xl font-medium">Naya shot</h3>
                                <div className="flex items-center gap-2 mt-2">
                                    <p className="text-sm capitalize text-neutral">hosted by</p>
                                    <div>
                                        <img src="../../img/avatar.png" className="w-6 h-6 rounded-full" alt="" />
                                    </div>
                                    <p className="font-medium capitalize ">victor Iwenya</p>

                                </div>
                            </div>



                            <div className="space-y-8 md:px-10">
                                <div className="space-y-8">
                                    <div className="space-y-5">
                                        <h3 className="text-2xl font-medium capitalize ">Order Details</h3>
                                        <p className="text-base font-medium text-neutral">Who are you booking for?</p>
                                        <div className="flex">
                                            <div className="flex items-center mr-4">
                                                <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-3 h-3 text-blue-600 bg-gray-100 border-black focus:ring-auraPrimary focus:ring " />
                                                <label for="inline-radio" className="ml-2 text-base font-light text-neutral108 ">For
                                                    Myself
                                                </label>
                                            </div>
                                            <div className="flex items-center mr-4">
                                                <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-3 h-3 text-blue-600 bg-gray-100 border-black focus:ring-auraPrimary focus:ring " />
                                                <label for="inline-radio" className="ml-2 text-base font-light text-neutral108 ">For
                                                    someone else
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <form className="flex flex-col gap-4  ">
                                        <div className="mb-6">
                                            <label for="Display Name" className="block mb-2 text-xs font-bold uppercase text-neutral108">Reservation Type</label>
                                            <select className='shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder:text-sm ' name="guest" id="">
                                                <option value="" selected>Guest</option>
                                            </select>
                                        </div>


                                        <div className="grid grid-cols-2 col-span-2 gap-4">
                                            <div className="flex items-center justify-between bg-[#F4F5F6] px-5 py-4 rounded-md">
                                                <div>
                                                    <p className="text-xs font-light text-neutral ">Check-in dates</p>
                                                    <p className="text-base font-normal text-black">Mar 25, 2022</p>
                                                </div>
                                                <div><img src="../../img/edit.svg" alt="" /></div>
                                            </div>
                                            <div className="flex items-center justify-between bg-[#F4F5F6] px-5 py-4 rounded-md">
                                                <div>
                                                    <p className="text-xs font-light text-neutral ">Guest</p>
                                                    <p className="text-base font-normal text-black">2 guests</p>
                                                </div>
                                                <div><img src="../../img/edit.svg" alt="" /></div>
                                            </div>

                                        </div>
                                        <div className="mb-6">
                                            <label for="Display Name" className="block mb-2 text-xs font-bold uppercase text-neutral108">Delivery Option</label>
                                            <select className='shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder:text-sm ' id="">
                                                <option value="" selected>Drop off</option>
                                            </select>
                                        </div>


                                        <div className="flex items-center justify-between p-3 text-sm font-normal text-black border-b ">
                                            <p className="">Artwork</p>
                                            <p className="text-end">Amount</p>
                                        </div>
                                        <div className="flex items-center justify-between p-3 text-sm font-normal text-black border-b ">
                                            <p className="text-gray-600 font-medium"><span className="bg-[#ffa60031] p-[1px] px-[4px] mr-1 rounded-full text-auraPrimary">-</span>Mothers Lust</p>
                                            <p className="text-end">N150,500</p>
                                        </div>
                                        <div className="flex items-center justify-between p-3 text-sm font-normal text-black border-b ">
                                            <p className="text-gray-600 font-medium"><span className="bg-[#ffa60031] p-[1px] px-[4px] mr-1 rounded-full text-auraPrimary">-</span>Mothers Lust</p>
                                            <p className="text-end">N150,500</p>
                                        </div>
                                        <div className="flex items-center justify-between p-3 text-sm font-medium text-black bg-gray-100 rounded-lg">
                                            <p className="">Sub Total</p>
                                            <p className="text-end">N301,000</p>
                                        </div>
                                        <button className="w-full py-3 mx-auto text-base font-medium text-white capitalize rounded-xl bg-auraPrimary mt-8" type="button">Place Order</button>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="border md:p-5 rounded-xl shadow-2xl">
                            <div className="">
                                <div className="flex items-center justify-between p-4 pb-0 md:p-8">
                                    <div className="space-y-4 ">
                                        <img src="../../img/art.png" className="rounded-md w-36 h-36" alt="" />
                                    </div>
                                    <div className="relative ">
                                        <div className="space-y-6">
                                            <div className="pt-4 pb-6 mb-6 border-b ">
                                                <h3 className="text-base font-medium">Z Kitchen</h3>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <p className="text-xs capitalize text-neutral">hosted by</p>
                                                    <div>
                                                        <img src="../../img/avatar.png" className="w-6 h-6 rounded-full" alt="" />
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
                                <div className="px-4 pt-2 space-y-8 md:px-10">
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
                                        <button data-modal-toggle="loveModal" type="button" className="w-full px-4 py-3 font-semibold text-black border rounded-lg xl:w-40 border-neutral ">save
                                            <span className="ml-1 text-neutral">+</span></button>

                                    </div>

                                    <div className="space-y-4">
                                        <p className="font-semibold text-2xl">Order Summary</p>
                                        <div className="flex items-center justify-between">
                                            <div className="px-3 space-y-4 text-sm font-light text-neutral">
                                                <p>Sub Total</p>
                                                <p>Delivery fee</p>
                                            </div>
                                            <div className="px-3 space-y-4 text-sm font-medium text-black text-end">
                                                <p>N301,000</p>
                                                <p>N2,500</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between p-3 text-sm font-medium text-black bg-gray-100 rounded-lg">
                                            <p className="">Total</p>
                                            <p className="text-end">303,500</p>
                                        </div>
                                    </div>

                                    <div className="pb-4 text-xs text-center flex justify-center items-center text-neutral">
                                    <img src="../../img/icon/free.svg" className='h-4 mr-1' alt=""/>
                                        <a href="#dssd">Availability Status: <span className="text-[#16B94F]">Available</span></a>
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

export default ArtReservation