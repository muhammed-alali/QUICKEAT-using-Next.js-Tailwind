import Image from "next/image"
import Link from "next/link"
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
function CityRestaurants() {
    return (
        <>
            <section className=" container mx-auto">
                <div className="grid grid-cols-2 pl-[75px]">
                    <div className="col-span-1">
                        <div>
                            <div className=" text-center">
                                <h2 className="text-6xl font-bold">12 Best Restaurants in Your City</h2>
                                <p className="leading-7 text-color2 py-5">Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate.</p>
                            </div>
                            <div className="flex py-7">
                                <div>
                                    <Image
                                        src={"/photo/logos-1.jpg"}
                                        className=" rounded-lg"
                                        alt=""
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div>
                                    <h2 className="px-4 py-1 text-2xl font-bold">The Wilmington</h2>

                                    <div className=" flex text-color1 px-4 py-1 text-[23px]">
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                    </div>

                                    <div className="px-4 py-2 gap-3 flex">
                                        <h3><Link href={""} className=" px-[15px] py-[5px] text-color1 border-[1px] rounded-lg border-[#F29F05] font-semibold hover:bg-[#F29F05] hover:text-white duration-700">american</Link></h3>
                                        <h3><Link href={""} className=" px-[15px] py-[5px] text-color1 border-[1px] rounded-lg border-[#F29F05] font-semibold hover:bg-[#F29F05] hover:text-white duration-700">steakhouse</Link></h3>
                                        <h3><Link href={""} className=" px-[15px] py-[5px] text-color1 border-[1px] rounded-lg border-[#F29F05] font-semibold hover:bg-[#F29F05] hover:text-white duration-700">seafood</Link></h3>
                                    </div>
                                    <p className=" max-w-96 py-2 px-4">Vulputate enim nulla aliquet porttitor lacus luctus. Suscipit adipiscing bibendum est ultricies integer. Sed adipiscing diam donec adipiscing tristique.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex ">
                            <div>
                                <Image
                                    src={"/photo/logos-2.jpg"}
                                    className=" rounded-lg"
                                    alt=""
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div>
                                <h2 className="px-4 py-1 text-2xl font-bold">Kennington Lane Cafe</h2>

                                <div className=" flex text-color1 px-4 py-1 text-[23px]">
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStarOutline />
                                </div>

                                <div className="px-4 py-2 gap-3 flex">
                                    <h3><Link href={""} className=" px-[15px] py-[5px] text-color1 border-[1px] rounded-lg font-semibold border-[#F29F05] hover:bg-[#F29F05] hover:text-white duration-700">american</Link></h3>
                                    <h3><Link href={""} className=" px-[15px] py-[5px] text-color1 border-[1px] rounded-lg font-semibold border-[#F29F05] hover:bg-[#F29F05] hover:text-white duration-700">steakhouse</Link></h3>
                                    <h3><Link href={""} className=" px-[15px] py-[5px] text-color1 border-[1px] rounded-lg font-semibold border-[#F29F05] hover:bg-[#F29F05] hover:text-white duration-700">seafood</Link></h3>
                                </div>
                                <p className=" max-w-96 py-2 px-4">Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.</p>
                            </div>
                        </div>

                        <div className="flex py-10">
                            <div>
                                <Image
                                    src={"/photo/logos-3.jpg"}
                                    className=" rounded-lg"
                                    alt=""
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div>
                                <h2 className="px-4 py-1 text-2xl font-bold">Kings Arms</h2>

                                <div className=" flex text-color1 px-4 py-1 text-[23px]">
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStarHalf />
                                </div>

                                <div className="px-4 py-2 gap-3 flex">
                                    <h3><Link href={""} className=" px-[15px] py-[5px] text-color1 border-[1px] rounded-lg font-semibold border-[#F29F05] hover:bg-[#F29F05] hover:text-white duration-700">healthy</Link></h3>
                                    <h3><Link href={""} className=" px-[15px] py-[5px] text-color1 border-[1px] rounded-lg font-semibold border-[#F29F05] hover:bg-[#F29F05] hover:text-white duration-700">steakhouse</Link></h3>
                                    <h3><Link href={""} className=" px-[15px] py-[5px] text-color1 border-[1px] rounded-lg font-semibold border-[#F29F05] hover:bg-[#F29F05] hover:text-white duration-700">vegetarian</Link></h3>
                                </div>
                                <p className=" max-w-96 py-2 px-4">Tortor at risus viverra adipiscing at in tellus. Cras semper auctor neque vitae tempus. Dui accumsan sit amet nulla facilisi. Sed adipiscing diam donec adipiscing tristique.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" text-center py-10">
                    <h1><Link href={""} className="px-[25px] py-[12px] text-color1 border-[1px] rounded-lg border-color1 hover:bg-color1 hover:text-white duration-300">SEE ALL</Link></h1>
                </div>
            </section>
        </>
    )
} export default CityRestaurants