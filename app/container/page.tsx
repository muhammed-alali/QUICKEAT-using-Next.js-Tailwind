import Image from "next/image";
import Link from "next/link";
import { FaUserClock } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

function Container() {
  return (
    <>
      <section className=" container mx-auto">
        <div className="grid grid-cols-12 pl-[75px] justify-center py-10">
          <div className=" col-span-6 bg-white shadow-lg">
            <div className="p-7">
              <h2 className=" text-4xl font-bold w-[385px] py-4">
                Latest news and events
              </h2>
              <div className=" ">
                <Image
                className="rounded-xl "
                  src="/photo/photo-8.jpg"
                  width={800}
                  height={800}
                  alt="Picture of the author"
                />
                <div className=" absolute">
                  <div className="flex gap-3 absolute top-[-15rem] left-2">
                  <h1 className="bg-color1 text-white py-1 px-[5px] rounded-md">quickeat</h1>
                  <h1 className="bg-color1 text-white py-1 px-[5px] rounded-md">news</h1>
                  </div>
                </div>
              </div>

              <h3 className="text-4xl font-bold w-[600px] py-3">We Have Received An Award For The Quality Of Our Work</h3>
              <p className=" leading-8">
                Donec adipiscing tristique risus nec feugiat in fermentum.
                Sapien eget mi proin sed libero. Et magnis dis parturient montes
                nascetur. Praesent semper feugiat nibh sed pulvinar proin gravida.
              </p>
              <span>
                <Link href={""}>Read More</Link>
              </span>
              <div className="py-5">
                <ul className="flex gap-3">
                  <li>
                    <h6 className="flex gap-1 text-[#cfcfcf]">
                      <FaUserClock className=" text-lg m-1"/> Read More
                    </h6>
                  </li>
                  <li>
                    <h6 className="flex gap-1 text-[#cfcfcf]">
                      <FaRegCalendarDays className=" text-lg m-1"/> 01.Jan. 2022
                    </h6>
                  </li>
                  <li>
                    <h6 className="flex gap-1 text-[#cfcfcf]">
                      <FaEye className=" text-lg m-1"/> 132
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" col-span-6 py-4 px-10">
            <div>
              <div className="flex py-3">
                <div>
                  <Image
                  className=" rounded-lg"
                    src="/photo/download2.jpg"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <h1 className="flex gap-2 px-4 py-4">
                    <h2 className="bg-color1 text-white py-1 px-[5px] rounded-md">restaurants</h2>
                    <h2 className="bg-color1 text-white py-1 px-[5px] rounded-md">cooking</h2>
                  </h1>
                  <h3 className="text-xl font-bold py-1 px-4 w-[78%] hover:text-color1 duration-300">
                    <a href="">Why You Should Optimize Your Menu for Delivery</a>
                  </h3>
                  <div className="py-2 px-4">
                <ul className="flex gap-3">
                  <li>
                    <h6 className="flex gap-1 text-[#cfcfcf]">
                      <FaUserClock className=" text-lg m-1"/> Read More
                    </h6>
                  </li>
                  <li>
                    <h6 className="flex gap-1 text-[#cfcfcf]">
                      <FaRegCalendarDays className=" text-lg m-1"/> 01.Jan. 2022
                    </h6>
                  </li>
                  <li>
                    <h6 className="flex gap-1 text-[#cfcfcf]">
                      <FaEye className=" text-lg m-1"/> 132
                    </h6>
                  </li>
                </ul>
              </div>
                </div>
              </div>
              <div className="flex py-3">
                <div>
                  <Image
                  className=" rounded-lg"
                    src="/photo/food-2.jpg"
                    width={160}
                    height={100}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <h1 className="flex gap-2 px-4 py-4">
                    <h2 className="bg-color1 text-white py-1 px-[5px] rounded-md">restaurants</h2>
                    <h2 className="bg-color1 text-white py-1 px-[5px] rounded-md">cooking</h2>
                  </h1>
                  <h3 className="text-xl font-bold py-1 px-4 w-[78%] hover:text-[#F29F05] duration-300">
                    <a href="">127+ Couriers On Our Team!</a>
                  </h3>
                  <div className="py-2 px-4">
                <ul className="flex gap-3">
                  <li>
                    <h6 className="flex gap-1 text-[#cfcfcf]">
                      <FaUserClock className=" text-lg m-1"/> Read More
                    </h6>
                  </li>
                  <li>
                    <h6 className="flex gap-1 text-[#cfcfcf]">
                      <FaRegCalendarDays className=" text-lg m-1"/> 01.Jan. 2022
                    </h6>
                  </li>
                  <li>
                    <h6 className="flex gap-1 text-[#cfcfcf]">
                      <FaEye className=" text-lg m-1"/> 132
                    </h6>
                  </li>
                </ul>
              </div>
                </div>
              </div>
              <div className="flex py-3">
                <div>
                  <Image
                  className=" rounded-lg"
                    src="/photo/download6.jpg"
                    width={200}
                    height={200}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <h1 className="flex gap-2 px-4 py-4">
                    <h2 className="bg-color1 text-white py-1 px-[5px] rounded-md">restaurants</h2>
                    <h2 className="bg-color1 text-white py-1 px-[5px] rounded-md">cooking</h2>
                  </h1>
                  <h3 className="text-xl font-bold py-1 px-4 w-[78%] hover:text-color1 duration-300">
                    <a href="">Why You Should Optimize Your Menu for Delivery</a>
                  </h3>
                  <div className="py-2 px-4">
                <ul className="flex gap-3">
                  <li>
                    <h6 className="flex gap-1 text-[#cfcfcf]">
                      <FaUserClock className=" text-lg m-1"/> Read More
                    </h6>
                  </li>
                  <li>
                    <h6 className="flex gap-1 text-[#cfcfcf]">
                      <FaRegCalendarDays className=" text-lg m-1"/> 01.Jan. 2022
                    </h6>
                  </li>
                  <li>
                    <h6 className="flex gap-1 text-[#cfcfcf]">
                      <FaEye className=" text-lg m-1"/> 132
                    </h6>
                  </li>
                </ul>
              </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Container;
