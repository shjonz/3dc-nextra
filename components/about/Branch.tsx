import React from "react";
import { motion } from "framer-motion";

export default function Branch() {
  return (
    <section className="bg-white dark:bg-gray-900">
    <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="text-left pb-12">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                Our Branches
            </h1>
        </div>
        </div>
        <div className="container">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                    <div className="bg-white rounded-lg overflow-hidden mb-10 hover:-translate-y-1">
                    <img
                        src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
                        alt="image"
                        className="w-full"
                        />
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                        <h3>
                            <a
                                href="/sample"
                                className="
                                font-semibold
                                text-dark text-xl
                                sm:text-[22px]
                                md:text-xl
                                lg:text-[22px]
                                xl:text-xl
                                2xl:text-[22px]
                                mb-4
                                block
                                hover:text-primary
                                "
                                >
                            Tech
                            </a>
                        </h3>
                        <p className="text-base text-body-color leading-relaxed mb-7">
                            Lorem ipsum dolor sit amet pretium consectetur adipiscing
                            elit. Lorem consectetur adipiscing elit.
                        </p>
                        <a
                            href="/sample"
                            className="
                            inline-block
                            py-2
                            px-7
                            border border-[#E5E7EB]
                            rounded-full
                            text-base text-body-color
                            font-medium
                            hover:border-primary hover:bg-primary hover:text-white
                            transition
                            
                            "
                            >
                            <motion.button

                                whileHover={{
                                scale: 1.1,
                                transition: { yoyo: Infinity },
                                
                            }}
                            >
                                View Details
                            </motion.button>
                        
                        </a>
                    </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10 hover:-translate-y-1">
               <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
                  alt="image"
                  className="w-full"
                  />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="/sample"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                     Projects
                     </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p>
                  
                  <a
                     href="javascript:void(0)"
                     className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                    <div className="bg-white rounded-lg overflow-hidden mb-10 hover:-translate-y-1">
                    <img
                        src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
                        alt="image"
                        className="w-full"
                        />
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                        <h3>
                            <a
                                href="javascript:void(0)"
                                className="
                                font-semibold
                                text-dark text-xl
                                sm:text-[22px]
                                md:text-xl
                                lg:text-[22px]
                                xl:text-xl
                                2xl:text-[22px]
                                mb-4
                                block
                                hover:text-primary
                                "
                                >
                            Marketing
                            </a>
                        </h3>
                        <p className="text-base text-body-color leading-relaxed mb-7">
                            Lorem ipsum dolor sit amet pretium consectetur adipiscing
                            elit. Lorem consectetur adipiscing elit.
                        </p>
                        <a
                            href="javascript:void(0)"
                            className="
                            inline-block
                            py-2
                            px-7
                            border border-[#E5E7EB]
                            rounded-full
                            text-base text-body-color
                            font-medium
                            hover:border-primary hover:bg-primary hover:text-white
                            transition
                            "
                            >
                        View Details
                        </a>
                    </div>
                    </div>
                </div>
            </div>
    </div>
    </section>
    </section>
  );
}