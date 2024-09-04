import Image from "next/image"
import Link from "next/link"

function Join_Bartnership() {
    return (
        <>
            <section className=" bg-color2">
                <div className="container mx-auto">
                    <div className=" justify-center py-12 pl-[75px]">
                        <h2 className=" text-5xl font-bold text-white text-center py-10">Want to Join Partnership?</h2>
                        <div className=" grid grid-cols-12">

                            <div className=" col-span-6 ">
                            <div className="border-solid border-2 border-color1 relative w-[504px]">
                            <Image
                                className="rounded-lg"
                                    src={"/photo/download3.jpg"}
                                    alt=""
                                    width={500}
                                    height={500}
                                />
                            </div>

                                <div className=" relative bottom-40 left-[20px]">
                                    <h2 className="text-4xl font-bold text-white ">Join Courier</h2>
                                    <h1 className="py-5">
                                        <Link href={"/"} className="border-color1 border py-3 px-6 rounded-md text-white bg-color1 text-lg hover:bg-slate-100 hover:text-color1 duration-500">Learn More</Link>
                                    </h1>
                                </div>
                            </div>
                            <div className=" col-span-6 ">
                              <div className="border-solid border-2 border-color1 relative w-[504px]">
                              <Image
                                     className="rounded-lg"
                                    src={"/photo/download4.jpg"}
                                    alt=""
                                    width={500}
                                    height={500}
                                />
                              </div>

                                <div className=" relative bottom-40 left-[20px]">
                                    <h2 className="text-4xl font-bold text-white  ">Join Merchant</h2>
                                    <h1 className="py-5">
                                        <Link href={"/"} className="border-color1 border py-3 px-6 rounded-md text-white bg-color1 text-lg hover:bg-slate-100 hover:text-color1 duration-500">Learn More</Link>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} export default Join_Bartnership