import React from 'react'
import ChechOut from '../component/profile/ChechOut'
import TableCart from '../component/profile/TableCart'
import TableOrder from '../component/profile/TableOrder'

export default function Profile() {
    return (
        <main className="mt-10  lg:px-16 2xl:px-32">
            {/* <!-- Hero Section --> */}
            <section className="mt-10 ">
                <div className="flex items-end profile-hero h-96 rounded-2xl ">
                    <div className="w-full p-2 rounded-2xl">
                        <div className="flex flex-col items-end justify-center w-full p-2 rounded-2xl">
                            <div className="md:mt-24">
                                <button className="flex items-center px-4 py-3 text-sm font-bold text-white transition ease-in-out delay-150 border-2 border-white rounded-3xl hover:bg-white hover:text-neutral "><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                </svg>Edit
                                    cover</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Profile sectiom --> */}
            <section className="flex flex-wrap items-center mb-28 md:flex-nowrap 2xl:gap-x-96 gap-x-80">
                {/* <!-- Profile Card --> */}
                <div className="relative flex justify-start ml-6 lg:ml-12">
                    <div className="absolute -bottom-44 flex-col items-center justify-center hidden px-12 py-8 space-y-6 border shadow-md rounded-2xl bg-gray-50 2xl:w-80 border-neutral107 md:flex w-72">
                        <div className="space-y-2">
                            <img src="/img/avatar.png" className="rounded-full " alt="" />
                            <button className="flex items-center mx-auto text-xs font-semibold text-neutral"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                            </svg>Update avatar</button>
                        </div>
                        <p className="mt-8 text-2xl font-semibold font-aura ">Victor Iwenya</p>

                        <ul className="space-y-6 pb-14">
                            <li className="text-neutral"><a href="/client/profile/index.html" className="flex items-center text-sm font-medium "><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>Personal info</a></li>
                            <li className="text-neutral"><a href="/client/profile/login.html" className="flex items-center text-sm font-medium "><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>Login and security</a></li>
                            <li className="profile-active text-neutral"><a href="/client/profile/wishlist.html" className="flex items-center text-sm font-medium "><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>Wishlist</a></li>
                            <li className="profile-active text-neutral"><a href="/client/profile/wishlist.html" className="flex items-center text-sm font-medium "><svg className="w-4 h-4 mr-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_13016_61143)">
                                    <path d="M1.3335 1.33594H2.4935C3.2135 1.33594 3.78016 1.95594 3.72016 2.66927L3.16683 9.30927C3.14522 9.56651 3.17729 9.82544 3.26099 10.0696C3.34468 10.3138 3.47819 10.538 3.65306 10.7279C3.82792 10.9178 4.04032 11.0693 4.2768 11.1728C4.51328 11.2763 4.76868 11.3296 5.02683 11.3293H12.1268C13.0868 11.3293 13.9268 10.5426 14.0002 9.58927L14.3602 4.58927C14.4402 3.4826 13.6002 2.5826 12.4868 2.5826H3.88016M6.00016 5.33594H14.0002M10.8335 14.6693C11.0545 14.6693 11.2665 14.5815 11.4228 14.4252C11.579 14.2689 11.6668 14.057 11.6668 13.8359C11.6668 13.6149 11.579 13.403 11.4228 13.2467C11.2665 13.0904 11.0545 13.0026 10.8335 13.0026C10.6125 13.0026 10.4005 13.0904 10.2442 13.2467C10.088 13.403 10.0002 13.6149 10.0002 13.8359C10.0002 14.057 10.088 14.2689 10.2442 14.4252C10.4005 14.5815 10.6125 14.6693 10.8335 14.6693ZM5.50016 14.6693C5.72118 14.6693 5.93314 14.5815 6.08942 14.4252C6.2457 14.2689 6.3335 14.057 6.3335 13.8359C6.3335 13.6149 6.2457 13.403 6.08942 13.2467C5.93314 13.0904 5.72118 13.0026 5.50016 13.0026C5.27915 13.0026 5.06719 13.0904 4.91091 13.2467C4.75463 13.403 4.66683 13.6149 4.66683 13.8359C4.66683 14.057 4.75463 14.2689 4.91091 14.4252C5.06719 14.5815 5.27915 14.6693 5.50016 14.6693V14.6693Z" stroke="#777E90" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_13016_61143">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                                Cart</a></li>

                            <li className=" text-neutral"><a href="/client/profile/bookings.html" className="flex items-center text-sm font-medium ">   <svg className="w-4 h-4 mr-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99378 3.47702L10.0008 3.4734L10.008 3.47717L13.7192 5.7039L15.0008 6.476V15.6677C15.0008 16.1619 14.9995 16.4324 14.9836 16.6267L14.9817 16.6486L14.9597 16.6505C14.7654 16.6664 14.495 16.6677 14.0008 16.6677H6.00075C5.50654 16.6677 5.23612 16.6664 5.04181 16.6505L5.01984 16.6486L5.01792 16.6267C5.00205 16.4324 5.00075 16.1619 5.00075 15.6677V6.47602L6.27756 5.70675L9.99378 3.47702ZM5.41883 4.27834L1.2387 6.78642C0.844047 7.02321 0.716076 7.53509 0.952866 7.92974C1.18966 8.32439 1.70154 8.45236 2.09619 8.21557L3.33409 7.47283V15.6677C3.33409 16.6011 3.33409 17.0679 3.51574 17.4244C3.67553 17.738 3.9305 17.9929 4.2441 18.1527C4.60062 18.3344 5.06733 18.3344 6.00075 18.3344H14.0008C14.9342 18.3344 15.4009 18.3344 15.7574 18.1527C16.071 17.9929 16.326 17.738 16.4858 17.4244C16.6674 17.0679 16.6674 16.6011 16.6674 15.6677V7.4728L17.9054 8.21557C18.3 8.45236 18.8119 8.32439 19.0487 7.92974C19.2855 7.53509 19.1575 7.02321 18.7629 6.78642L14.5779 4.27545L11.3769 2.34688C11.1442 2.20667 10.9656 2.09907 10.8143 2.01816C10.7789 1.9984 10.7431 1.98002 10.7067 1.96302C10.5808 1.90156 10.4716 1.86065 10.3594 1.83593C10.1231 1.78386 9.87836 1.78386 9.64208 1.83593C9.52961 1.86071 9.42016 1.90177 9.29379 1.96351C9.25812 1.98022 9.2229 1.99827 9.1882 2.01765C9.03664 2.09862 8.8578 2.20638 8.62459 2.34688L5.41883 4.27834Z" fill="#777E91" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8333 16.6693V13.3359C10.8333 12.8757 10.4602 12.5026 10 12.5026C9.53976 12.5026 9.16667 12.8757 9.16667 13.3359V16.6693H10.8333ZM10 10.8359C8.61929 10.8359 7.5 11.9552 7.5 13.3359V18.3359H12.5V13.3359C12.5 11.9552 11.3807 10.8359 10 10.8359Z" fill="#777E91" />
                            </svg>Order</a></li>
                            <li className=" text-neutral"><a href="/client/profile/bookings.html" className="flex items-center text-sm font-medium "><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                            </svg>Bookings</a></li>
                            <li className="text-neutral"><a href="/client/profile/payments.html" className="flex items-center text-sm font-medium "><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                            </svg>Payments</a></li>
                            <li className="text-neutral"><a href="/client/profile/notification.html" className="flex items-center text-sm font-medium "><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>Notification</a></li>
                        </ul>
                        <div className="pt-10 pb-2 text-xs border-t border-neutral text-neutral">
                            <p>Member since Mar 15, 2017</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Mobile Profile Menu --> */}
                <div className="flex flex-col items-center justify-start w-full p-6 mt-3 rounded-2xl md:hidden bg-gray-50 ">
                    <div className="flex flex-col w-full ">
                        <div className="flex items-center justify-between mb-6 sm:justify-start">
                            <img src="/img/avatar.png" className="w-1/4 rounded-full " alt="" />

                            <div className="flex flex-col">
                                <button className="flex items-center text-xs font-semibold text-neutral"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>

                                </svg>Update avatar</button>
                                <p className="mt-3 text-3xl font-semibold font-aura ">Victor Iwenya</p>
                            </div>
                        </div>


                        <ul className="flex flex-wrap items-center justify-around md:pb-14">
                            <li className="profile-active"><a href="/client/profile/index.html" className="flex items-center my-4 text-sm font-medium"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>Personal info</a></li>
                            <li className="text-neutral"><a href="/client/profile/login.html" className="flex items-center my-4 text-sm font-medium"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>Login and security</a></li>
                            <li className="text-neutral"><a href="/client/profile/wishlist.html" className="flex items-center my-4 text-sm font-medium"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>Wishlist</a></li>
                            <li className="profile-active"><a href="/client/profile/bookings.html" className="flex items-center my-4 text-sm font-medium"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                            </svg>Bookings</a></li>
                            <li className="text-neutral"><a href="/client/profile/payments.html" className="flex items-center my-4 text-sm font-medium"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                            </svg>Payments</a></li>
                            <li className="text-neutral"><a href="/client/profile/notification.html" className="flex items-center my-4 text-sm font-medium"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>Notification</a></li>
                        </ul>
                        <div className="pt-5 pb-2 text-xs text-center border-t border-neutral text-neutral">
                            <p>Member since Mar 15, 2017</p>
                        </div>
                    </div>
                </div>


                {/* <!-- Table content --> */}
                {/* <TableOrder /> */}
                {/* <TableCart/> */}
                <ChechOut/>




            </section>
        </main>
    )
}
