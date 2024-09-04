import Image from "next/image"
import Link from "next/link"
import { FaHamburger } from "react-icons/fa";
import { FaCheese } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa6";
function Your_Yavorite_Food() {
    return (
        <>
            <section className="bg-[url('/photo/download.png')]">
               <div className=" container mx-auto ">
               <div className=" grid grid-cols-12 justify-center pl-[75px]">
                    <div className=" col-span-6">

                        <Image
                            src={"/photo/photo-3.png"}
                            alt=""
                            width={500}
                            height={400}
                        />
                        <div className="flex absolute top-[130rem] right-[850px] bg-white py-3 px-3 rounded-2xl gap-2">
                            <FaHamburger className=" my-1 text-color1" />
                            <div><h1> Burgers</h1></div>
                        </div>
                        <div className="flex absolute top-[134rem] right-[830px] bg-white py-3 px-3 rounded-2xl gap-2">
                            <FaCheese className=" my-1 text-color1" />
                            <div><h1> Steaks</h1></div>
                        </div>
                        <div className="flex absolute top-[138rem] right-[800px] bg-white py-3 px-3 rounded-2xl gap-2">
                            <FaPizzaSlice className=" my-1 text-color1" />
                            <div><h1> Pizza</h1></div>
                        </div>
                    </div>
                    <div className=" col-span-6">
                        <div className="py-16">
                            <h2 className="text-6xl font-bold py-4">Food from your favorite restaurants to your table</h2>
                            <p className=" text-color2 leading-7">
                                Pretium lectus quam id leo in vitae turpis massa sed. Lorem donec massa sapien faucibus et molestie. Vitae elementum curabitur vitae nunc.
                            </p>
                                <div className="py-4"><h1 className="bg-color1 py-3 px-2 pl-12 w-48 rounded-md text-white border-[#f29f05f6] border hover:bg-slate-50 hover:text-[#f29f05f6] duration-500"><Link href={"/"}  className=""/>ORDER NOW</h1></div>
                        </div>
                    </div>
                </div>
               </div>
            </section>
        </>
    )
} export default Your_Yavorite_Food