import React from 'react'

export default function Review() {
  return (
     <div className="container py-20 md:pt-36">
            <div className="flex flex-wrap-reverse justify-center gap-16 xl:flex-nowrap">
                <div className="xl:w-[33%] ">
                    <div className="border rounded-lg shadow-2xl">
                        <div className="">
                            <div className="px-4 pt-8 mx-auto space-y-8 md:px-8">
                                <div className="flex items-center justify-center gap-4">
                                    <div className="relative ">
                                        <img src="/img/victor.png" className="w-16 h-16 rounded-full " alt=""/>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 p-1 text-white rounded-full bg-[#58c27d] absolute top-0  translate-x-10 "
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-medium ">Tomiwa S.</h1>
                                        <div className="flex items-center">
                                            <img src="/img/icon/rate.svg" alt=""/>
                                            <p className="ml-1 font-semibold tx-sm">4.9<span
                                                    className="ml-2 text-neutral108">(256
                                                    reviews)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-center gap-3 py-3 px-5 bg-[#F4F5F6] rounded-3xl flex-wrap lg:flex-nowrap">
                                    <div className="flex items-center gap-2">
                                        <img src="/img/icon/home.svg" alt=""/>
                                        <p className="text-[#777E91] text-xs font-normal">superhost</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src="/img/Shape.svg" alt=""/>
                                        <p className="text-[#777E91] text-xs font-normal">256 reviews</p>
                                    </div>

                                </div>
                                <div className="pb-6 space-y-5 border-b text-neutral">
                                    <div className="text-sm text-center ">
                                        <p>Described by Queenstown House & Garden magazine as having 'one of the best
                                            views
                                            we've ever seen' you will love relaxing
                                            in this newly built</p>
                                    </div>
                                    <div className="flex items-center justify-center gap-3 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                                                clip-rule="evenodd" />
                                        </svg>

                                        <a href="regrwgrwgrwg#" className="font-medium text-black">Auratranscorp.net</a>
                                    </div>
                                    <div className="flex items-center justify-center gap-3 mb-3">
                                        <button
                                            className="px-4 py-2 text-white capitalize bg-black rounded-2xl">contact</button>
                                        <a href="regrwgrwgrwg#"><svg xmlns="http://www.w3.org/2000/svg"
                                                className="w-10 h-10 p-2 border-2 rounded-full" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg></a>
                                        <a href="regrwgrwgrwg#"><svg xmlns="http://www.w3.org/2000/svg"
                                                className="w-10 h-10 p-2 border-2 rounded-full" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg></a>
                                    </div>
                                    <div className="flex items-center justify-center gap-6 mb-3">
                                        <img src="/img/twitter.svg" alt=""/>
                                        <img src="/img/instagram.svg" alt=""/>
                                        <img src="/img/facebook.svg" alt=""/>
                                    </div>
                                </div>
                                <div className="pb-4 text-xs text-center text-neutral">
                                    <p>Member since Mar 15, 2017</p>
                                </div>
                                <div className="pb-4 text-xs text-center text-neutral">
                                    <a href="regrwgrwgrwg#">Report this host</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-2xl font-semibold">Add a review</p>
                    <div className="flex flex-col justify-between gap-3 mt-4 md:flex-row md:w-2/3">
                        <div>
                            <span className="text-neutral">Be the first to review</span>
                            <span className="font-medium">Spectacular views of Queenstown</span>
                        </div>
                        <div>
                            <div className="flex space-x-1">
                                <img src="../../img/icon/Shape.svg" className="w-4 h-4" alt=""/>
                                <img src="../../img/icon/Shape.svg" className="w-4 h-4" alt=""/>
                                <img src="../../img/icon/Shape.svg" className="w-4 h-4" alt=""/>
                                <img src="../../img/icon/Shape.svg" className="w-4 h-4" alt=""/>
                            </div>
                        </div>

                    </div>


                    <form className="mt-6">
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Share
                            thought</label>
                        <div className="relative">

                            <input type="search" id="default-search"
                                className="block w-full p-4 pl-10 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg"
                                placeholder="Share your thoughts" required/>

                            <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none right-32">
                                <img src="../../img/icon/smile.svg" alt=""/>
                            </div>
                            <button type="submit"
                                className="text-white absolute right-2.5 flex items-center bottom-2.5 bg-auraPrimary  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 ">Post
                                it!
                                <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.39412 4.84282C9.66467 4.59308 10.0864 4.60995 10.3362 4.8805L12.49 7.2138C12.7258 7.46918 12.7258 7.8628 12.49 8.11818L10.3362 10.4515C10.0865 10.7221 9.66468 10.739 9.39413 10.4892C9.12358 10.2395 9.10671 9.81772 9.35644 9.54717L10.4775 8.33266L4.00016 8.33266C3.63197 8.33266 3.3335 8.03418 3.3335 7.66599C3.3335 7.2978 3.63197 6.99933 4.00016 6.99933L10.4775 6.99933L9.35645 5.78488C9.10671 5.51433 9.12358 5.09256 9.39412 4.84282Z"
                                        fill="#FCFCFD" />
                                </svg>
                            </button>
                        </div>
                    </form>


                    <div>
                        <div className="flex flex-wrap items-center justify-between mt-6">
                            <div>
                                <p className="text-2xl font-semibold">3 comments</p>
                            </div>
                            <div>
                                <div className="mt-4 mb-2 md:mt-0">
                                    <button type="button"
                                        className="flex items-center px-3 py-2 font-medium bg-transparent border border-gray-200 rounded-lg">
                                        Newest
                                        <img src="../../img/icon/arrow-downn.svg" className="ml-5" alt=""/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-b">
                            <div className="flex flex-row items-start">
                                <div className="flex ">
                                    <img src="../../img/avatar_placeholder.png" className="rounded-full" alt=""/>
                                </div>
                                <div className="w-full px-3">
                                    <div className="flex justify-between">
                                        <h5 className="mb-1 font-medium text-neutral06">Kemi Ariyo</h5>
                                        <div className="flex space-x-1">
                                            <img src="../../img/icon/Shape.svg" className="w-4 h-4" alt=""/>
                                            <img src="../../img/icon/Shape.svg" className="w-4 h-4" alt=""/>
                                            <img src="../../img/icon/Shape.svg" className="w-4 h-4" alt=""/>
                                            <img src="../../img/icon/Shape.svg" className="w-4 h-4" alt=""/>
                                        </div>
                                    </div>
                                    <p className="text-neutral06">We had the most spectacular view. Unfortunately it was
                                        very hot in
                                        the room from 2-830 pm due to no air conditioning and no shade.</p>
                                    <div className="flex items-center mt-2 space-x-4">
                                        <p className="text-xs text-neutral">about 1 hour ago</p>
                                        <button type="button" className="text-xs font-semibold">Like</button>
                                        <button type="button" className="text-xs font-semibold"
                                            onclick="replyBtn()">Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 border-b">
                            <div className="flex flex-row items-start">
                                <div className="flex ">
                                    <img src="../../img/avatar_placeholder.png" className="rounded-full" alt=""/>
                                </div>
                                <div className="w-full px-3">
                                    <div className="flex justify-between">
                                        <h5 className="mb-1 font-medium text-neutral06">Kemi Ariyo</h5>
                                        <div className="flex space-x-1">
                                            <img src="../../img/icon/Shape.svg" className="w-4 h-4" alt=""/>
                                            <img src="../../img/icon/Shape.svg" className="w-4 h-4" alt=""/>
                                            <img src="../../img/icon/Shape.svg" className="w-4 h-4" alt=""/>
                                            <img src="../../img/icon/Shape.svg" className="w-4 h-4" alt=""/>
                                        </div>
                                    </div>
                                    <p className="text-neutral06">We had the most spectacular view. Unfortunately it was
                                        very hot in
                                        the room from 2-830 pm due to no air conditioning and no shade.</p>
                                    <div className="flex items-center mt-2 space-x-4">
                                        <p className="text-xs text-neutral">about 1 hour ago</p>
                                        <button type="button" className="text-xs font-semibold">Like</button>
                                        <button type="button" className="text-xs font-semibold"
                                            onclick="replyBtn()">Reply</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center my-6">
                        <button className="flex items-center gap-3 px-3 py-2 font-semibold capitalize border rounded-3xl">
                            <img src="../../img/icon/loading.svg" alt=""/>
                            Loading comment
                        </button>
                    </div>

                </div>
            </div>

            {/* <!-- Other Places Section --> */}
            <div className="container space-y-10 my-36">
                <div className="flex items-center justify-between">
                    <p className="text-3xl font-medium">Places you may like</p>
                    <div className="flex items-center gap-2">
                        <a href="regrwgrwgrwg#" className="p-2 text-center text-neutral">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                        </a>
                        <a href="regrwgrwgrwg#" className="p-2 text-center border-2 rounded-full text-neutral">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-14">
                    <div>
                        <div className="mb-10">
                            <img src="../../img/KFC.png" className="w-full rounded-3xl" alt="kfc resturant"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <p className="text-base font-medium ">KFC</p>
                                <div className="flex items-center gap-2 text-base font-medium text-neutral ">
                                    <img src="../../img/icon/curtleries.svg" alt=""/>
                                    <p>14</p>
                                </div>
                            </div>
                            <a href="regrwgrwgrwg#" className="p-2 text-center text-white rounded bg-auraPrimary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>

                    </div>
                    <div>
                        <div className="mb-10">
                            <img src="../../img/Road Chef.png" className="w-full rounded-3xl" alt="kfc resturant"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <p className="text-base font-medium ">Road Chef</p>
                                <div className="flex items-center gap-2 text-base font-medium text-neutral ">
                                    <img src="../../img/icon/curtleries.svg" alt=""/>
                                    <p>14</p>
                                </div>
                            </div>
                            <a href="regrwgrwgrwg#" className="p-2 text-center text-white rounded bg-auraPrimary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>

                    </div>
                    <div>
                        <div className="mb-10">
                            <img src="../../img/beach bed.png" className="w-full rounded-3xl" alt="kfc resturant"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <p className="text-base font-medium ">Landmark Beach</p>
                                <div className="flex items-center gap-2 text-base font-medium text-neutral ">
                                    <img src="../../img/icon/curtleries.svg" alt=""/>
                                    <p>14</p>
                                </div>
                            </div>
                            <a href="regrwgrwgrwg#" className="p-2 text-center text-white rounded bg-auraPrimary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>

                    </div>
                    <div>
                        <div className="mb-10">
                            <img src="../../img/resturant underground.png" className="w-full rounded-3xl"
                                alt="kfc resturant"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <p className="text-base font-medium ">Kapadoccia</p>
                                <div className="flex items-center gap-2 text-base font-medium text-neutral ">
                                    <img src="../../img/icon/curtleries.svg" alt=""/>
                                    <p>14</p>
                                </div>
                            </div>
                            <a href="regrwgrwgrwg#" className="p-2 text-center text-white rounded bg-auraPrimary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>

                    </div>

                </div>
            </div>

        </div>
  )
}
