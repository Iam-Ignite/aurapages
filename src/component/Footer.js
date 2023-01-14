import React from 'react'

function Footer() {
  return (
     <footer className="p-5 bg-gray-100 sm:p-6">
        <div className="container">
            <div className="py-8 md:pt-12">
                <div className="mb-6 md:mb-0 md:hidden">
                    <a href="dfgdgrr" className="flex items-center">
                        <img src="/img/logo.svg" className="h-16 w0" alt="Logo"/>
                    </a>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5 md:gap-12">
                    <div className="hidden mb-6 md:mb-0 md:block">
                        <a href="dgrr" className="flex items-center">
                            <img src="/img/logo.svg" className="h-16 w0" alt="Logo"/>
                        </a>
                    </div>
                    <div>
                        <ul className="font-medium text-neutral ">
                            <li className="mb-4">
                                <a href="dgrr/host/onboarding/index.html" className="hover:underline">Become a host</a>
                            </li>
                            <li>
                                <a href="dgrr" className="hover:underline">List your property</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="font-medium text-neutral ">
                            <li className="mb-4">
                                <a href="dgrr/" className="hover:underline ">What We Do</a>
                            </li>
                            <li>
                                <a href="/" className="hover:underline">Press</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="font-medium text-neutral ">
                            <li className="mb-4">
                                <a href="#ewfe" className="hover:underline">Support</a>
                            </li>
                            <li>
                                <a href="#ewfe" className="hover:underline">Download App</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-3 text-xs font-semibold text-gray-900 uppercase md:text-sm">Join our community 🔥
                        </h2>
                        <form action="">
                            <div className="flex rounded-full shadow-sm border px-1.5 py-1">
                                <input type="text" name="" id="" className="w-full bg-gray-100 border-0 no-show-input"
                                    placeholder="Enter your email"/>
                                <button>
                                    <img src="/img/icon/small-arrow.svg" alt="" srcset=""/>
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="mt-8 sm:flex sm:items-center sm:justify-between md:mt-16">
                <span className="text-sm text-stone-700 sm:text-center ">Copyright © 2022 AURA BY
                    TRANSCORP
                    LLC. All rights reserved
                </span>
                <div className="flex mt-4 space-x-3 sm:justify-center sm:mt-0">
                    <a href="ndbdsmnsd" className="text-gray-500 hover:text-gray-900 ">
                        <img src="/img/icon/apple.svg" alt="knj"/>
                    </a>
                    <a href="nsbvsdn" className="text-gray-500 hover:text-gray-900 ">
                        <img src="/img/icon/playstore.svg" alt="jk"/>
                    </a>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer