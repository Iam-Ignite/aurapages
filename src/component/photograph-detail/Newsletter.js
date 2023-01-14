import React from 'react'

export default function Newsletter() {
  return (
     <div className="container py-20 ">
            <div className="flex flex-wrap items-center md:flex-nowrap ">
                <div className="flex flex-col items-start order-2 space-y-8 md:w-1/2 lg:pr-56 md:order-1 ">
                    <h3 className="text-4xl font-medium md:pr-6">Join our
                        newsletter 🎉</h3>
                    <p className="text-base font-normal text-neutral ">Stacks is a production-ready library of stackable
                        content blocks built in React Native.</p>
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="py-1 px-4 text-white bg-[#58C27D] rounded-3xl">01</span>
                            <p className="text-base font-normal">Get more discount</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="py-1 px-4 text-white bg-[#92A5EF] rounded-3xl">01</span>
                            <p className="text-base font-normal ">Get premium travel magazine</p>
                        </div>
                    </div>
                    <form action="" className="w-full">
                        <div className="flex rounded-full shadow-sm border px-1.5  py-1">
                            <input type="text" name="" id="" className="w-full bg-transparent border-0 no-show-input"
                                placeholder="Enter your email"/>
                            <button>
                                <img src="../../img/icon/small-arrow.svg" alt="" srcset=""/>
                            </button>

                        </div>
                    </form>
                </div>
                <div className="order-first mb-8 md:order-2"><img src="../../img/newsletter.png" className="w-full" alt=""/>
                </div>
            </div>
        </div>
  )
}
