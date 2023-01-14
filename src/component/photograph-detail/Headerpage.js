import React from 'react'

export default function Headerpage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col justify-between md:flex-row ">
        <div>
          <a href="./index.html"
            className="flex items-center w-40 px-4 py-2 mb-6 font-semibold border rounded-full md:w-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Go home
          </a>
        </div>
        <div>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="./index.html"
                  className="inline-flex items-center text-sm font-semibold text-neutral hover:text-gray-900 ">
                  Home
                </a>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span
                    className="ml-1 text-sm font-semibold text-neutral md:ml-2 dark:text-gray-400">Photography</span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <a href="#fdgre"
                    className="ml-1 text-sm font-semibold text-neutral hover:text-gray-900 md:ml-2 ">Naya
                    Shot</a>
                </div>
              </li>

            </ol>
          </nav>
        </div>
      </div>

      {/* <!-- page content  --> */}
      <div className="flex flex-col md:px-16 sm:px-4 justify-between gap-4 mt-4 md:flex-row">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">Naya Shot</h1>
          <div className="flex flex-wrap items-center gap-5 mt-4">
            <div>
              <img src="../../img/avatar.png" className="w-8 h-8 rounded-full" alt="photos" />
            </div>
            <div className="flex items-center gap-2">
              <img src="../../img/icon/rate.svg" alt="photos" />
              <p className="font-medium">4.8 <span className="text-neutral">(256 reviews)</span></p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/img/icon/camera.svg" alt="" />
              <p className="text-[#777E91] text-base font-normal">Photography</p>
            </div>
            <div className="flex items-center gap-1">
              <img src="../../img/icon/flag.svg" alt="photos" />
              <p className="text-neutral">Ikeja, Lagos</p>
            </div>

          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <div>
              <button type="button" className="btn">
                <img src="../../img/icon/location-product.svg" alt="photos" />
              </button>
            </div>
            <div>
              <button type="button" className="pl-3 btn">
                <img src="../../img/icon/share.svg" alt="photos" />
              </button>
            </div>
            <div>
              <button type="button" className="btn" >
                <img src="../../img/icon/love.svg" alt="photos" />
              </button>



            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-4 pb-4 grid md:px-16 sm:px-4 gap-2 md:grid-cols-2 ">
        <div className="relative">
          <img src="../../img/photo-hero1.png" className="rounded-3xl" alt="" />
          <div className="absolute bottom-0 p-3 md:px-5 md:py-6">
            <a href="./photo-album.html" type="button"
              className="flex px-5 py-2 mt-4 font-semibold text-black bg-gray-100 rounded-full">
              <img src="../../img/icon/phooto.svg" alt="" className="mr-2photo" />
              Show all photos
            </a>
          </div>
        </div>
        <div className="relative">
          <img src="../../img/photo-hero2.png" className="rounded-3xl" alt="" />
          <div className="absolute bottom-0 p-3 md:px-5 md:py-6">
            <a href="./arts-menu.html" type="button"
              className="flex px-5 py-2 mt-4 font-semibold text-black bg-gray-100 rounded-full">
              <img src="../../img/icon/phooto.svg" alt="" className="mr-2photo" />
              Show all art photos
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:px-16 sm:px-4 mt-8 md:gap-16 md:flex-row">
        <div className="md:w-1/2">
          <div>
            <div className="pt-4 pb-6 mb-6 border-b ">
              <h3 className="text-2xl font-medium">Naya Shot</h3>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-sm capitalize text-neutral">hosted by</p>
                <div>
                  <img src="../../img/avatar.png" className="w-6 h-6 rounded-full" alt="photos" />
                </div>
                <p className="font-medium capitalize ">victor Iwenya</p>

              </div>
            </div>

            <div className="flex items-center pt-4 pb-6 space-x-4">
              <div className="flex items-center space-x-2 text-sm capitalize text-neutral">
                <div><img src="../../img/icon/useer.svg" className="w-full" alt="" /></div>
                <p>10 guests</p>
              </div>

            </div>


            <div className="mb-3 space-y-6 text-base font-light text-neutral">
              <p>Described by Queenstown House & Garden magazine as having 'one of the best views we've
                ever
                seen'
                you will love relaxing
                in this newly built, architectural house sitting proudly on Loft Hills.<br />
              </p>
              <p>
                Enjoy breathtaking 180' views of Lake Wakatipu from your well appointed & privately
                accessed
                bedroom with modern en
                suite and floor-to-ceiling windows .
              </p>
              <p>Your private patio takes in the afternoon sun,
                letting
                you soak up unparalleled
                lake and mountain views by day and the stars & city lights by night.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between pt-4 ">
                <h3 className="text-2xl font-medium">Amenities</h3>
              </div>

              <div className="flex items-center w-full gap-4 md:flex-nowrap">
                <div className="w-full space-y-4 ">
                  <div
                    className="flex flex-wrap items-center w-full space-x-2 font-normal md:text-base lg:space-x-3 text-neutral">
                    <div className="p-2 border-2 border-indigo-300 rounded-full"><img
                      src="../../img/icon/clock.svg" alt="" /></div>
                    <p>12 hours</p>
                  </div>

                </div>
                <div className="w-full space-y-4">
                  <div
                    className="flex flex-wrap items-center w-full space-x-2 font-normal md:text-base lg:space-x-3 text-neutral">
                    <div className="p-2 border-2 border-orange-300 rounded-full"><img
                      src="../../img/icon/useer.svg" alt="" /></div>
                    <p>Up to 10 people</p>
                  </div>
                </div>
              </div>

              <button
                className="flex items-center px-4 py-3 mt-4 text-sm font-bold transition ease-in-out delay-150 border border-neutral rounded-3xl hover:bg-white ">
                More detail
              </button>
              <div className="space-y-8">
                <div className="space-y-5">
                  <h3 className="text-2xl font-medium capitalize ">Reservation</h3>
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

                <form className="grid gap-4 md:grid-cols-2">
                  <div className="mb-6">
                    <label for="Display Name"
                      className="block mb-2 text-xs font-bold uppercase text-neutral108">FIRST
                      NAME</label>
                    <input type="text" id="email"
                      className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder:text-sm placeholder:font-medium"
                      placeholder="Fasasi" required />
                  </div>
                  <div className="mb-6">
                    <label for="Real Name"
                      className="block mb-2 text-xs font-bold uppercase text-neutral108">LAST
                      NAME</label>
                    <input type="text" id="password"
                      className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder:text-sm placeholder:font-medium"
                      required />
                  </div>
                  <div className="col-span-2 mb-6">
                    <label for="Phone Number"
                      className="block mb-2 text-xs font-bold uppercase text-neutral108">EMAIL
                      ADDRESS</label>
                    <input type="email" id="password"
                      className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder:text-sm placeholder:font-medium"
                      placeholder="Sheriffasasi@gmail.com" required />
                  </div>
                  <div className="col-span-2 mb-6">
                    <label for=""
                      className="block mb-2 text-xs font-bold uppercase text-neutral108">PHONE
                      NUMBER</label>
                    <input type="number" id="password"
                      className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder:text-sm placeholder:font-medium"
                      placeholder="08089143562" required />
                  </div>

                  <div className="grid grid-cols-2 col-span-2 gap-4">
                    <div
                      className="flex items-center justify-between bg-[#F4F5F6] px-5 py-4 rounded-md">
                      <div>
                        <p className="text-xs font-light text-neutral ">Check-in dates</p>
                        <p className="text-base font-normal text-black">Mar 25, 2022</p>
                      </div>
                      <div><img src="../../img/edit.svg" alt="" /></div>
                    </div>
                    <div
                      className="flex items-center justify-between bg-[#F4F5F6] px-5 py-4 rounded-md">
                      <div>
                        <p className="text-xs font-light text-neutral ">Guest</p>
                        <p className="text-base font-normal text-black">2 guests</p>
                      </div>
                      <div><img src="../../img/edit.svg" alt="" /></div>
                    </div>

                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
        <div className="md:w-1/2 ">
          <div className="border rounded-xl shadow-2xl py-8 mb-16">
            <div className="space-y-8">
              <h3 className="text-xl font-medium mb-5 px-8">Photoshoot price details</h3>
              <div className="space-y-8">
                <div className="flex items-center justify-between px-8 py-2 flex-wrap gap-2">
                  <div className="space-y-2">
                    <p>Experience & Tour</p>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-2">
                        <img src="../../img/icon/clock.svg" alt="" />
                        <p className="text-[#777E91] text-sm">6 hours</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="../../img/icon/camera.svg" alt="" />
                        <p className="text-[#777E91] text-sm">15 Copies</p>
                      </div>
                    </div>
                  </div>

                  <div className="py-2 px-5 rounded-full border text-[#58C27D]">
                    <p>N25,000 <span className="text-neutral">/ session</span></p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-8 py-2 flex-wrap gap-2">
                  <div className="space-y-2">
                    <p>Birthday shoot</p>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-2">
                        <img src="../../img/icon/clock.svg" alt="" />
                        <p className="text-[#777E91] text-sm">6 hours</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="../../img/icon/camera.svg" alt="" />
                        <p className="text-[#777E91] text-sm">15 Copies</p>
                      </div>
                    </div>
                  </div>

                  <div className="py-2 px-5 rounded-full border text-[#58C27D]">
                    <p>N25,000 <span className="text-neutral">/ session</span></p>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-[#F482200D] px-8 py-2 flex-wrap gap-2">
                  <div className="space-y-2">
                    <p>Wedding Shoot</p>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-2">
                        <img src="../../img/icon/clock.svg" alt="" />
                        <p className="text-[#777E91] text-sm">24 hours</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="../../img/icon/camera.svg" alt="" />
                        <p className="text-[#777E91] text-sm">120 Copies</p>
                      </div>
                    </div>
                  </div>

                  <div className="py-2 px-5 rounded-full border text-[#58C27D]">
                    <p>N25,000 <span className="text-neutral">/ session</span></p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-8 py-2 flex-wrap gap-2">
                  <div className="space-y-2">
                    <p>Corporate shoot</p>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-2">
                        <img src="../../img/icon/clock.svg" alt="" />
                        <p className="text-[#777E91] text-sm">5 hours</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="../../img/icon/camera.svg" alt="" />
                        <p className="text-[#777E91] text-sm">120 Copies</p>
                      </div>
                    </div>
                  </div>

                  <div className="py-2 px-5 rounded-full border text-[#58C27D]">
                    <p>N25,000 <span className="text-neutral">/ session</span></p>
                  </div>
                </div>
              </div>
              <div className="text-center font-bold text-base py-8">
                <a href="#fdgre">See more</a>
              </div>
            </div>

          </div>
          <div className="border md:p-5 rounded-xl shadow-2xl">
            <div className="">
              <div className="flex items-center justify-between p-4 pb-0 md:p-8">
                <div className="space-y-4 ">
                  <img src="/img/photo1.png" className="rounded-md w-36 h-36" alt="" />
                </div>
                <div className="relative ">
                  <div className="space-y-6">
                    <div className="pt-4 pb-6 mb-6 border-b ">
                      <h3 className="text-base font-medium">Naya Shot</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-xs capitalize text-neutral">hosted by</p>
                        <div>
                          <img src="../../img/avatar.png" className="w-6 h-6 rounded-full" alt=""
                            photo />
                        </div>
                        <p className="text-sm font-medium capitalize ">victor Iwenya</p>

                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="../../img/icon/rate.svg" alt="photos" />
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
                  <button type="button"
                    className="w-full px-4 py-3 font-semibold text-black border rounded-lg xl:w-40 border-neutral ">save
                    <span className="ml-1 text-neutral">+</span></button>

                  <button
                    className="w-full py-3 mx-auto text-base font-medium text-white capitalize rounded-xl bg-auraPrimary"
                    type="button" data-modal-toggle="reserve-modal">reserve</button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="px-3 space-y-4 text-sm font-light text-neutral">
                      <p>Experience fee</p>
                      <p>Service fee (VAT Incl.)</p>
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

                <div className="pb-4 text-xs text-center flex justify-center items-center text-neutral">
                  <img src="../../img/icon/free.svg" className='h-4 mr-1' alt="" />
                  <a href="#dssd">Availability Status: <span className="text-[#16B94F]">Available</span></a>
                </div>
              </div>



            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
