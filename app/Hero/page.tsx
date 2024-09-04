import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
function Hero() {
  return (
    <>
      <section className="bg-[url('/photo/download.png')]">
        <div className="container mx-auto">
          <div className=" grid grid-cols-2 text-center">
            <div className=" py-40">
              <h1 className=" text-6xl font-bold flex-wrap ">
                The Best Restaurants In Your Home
              </h1>
              <p className="flex-wrap py-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>

              <Link
                href={"/"}
                className=" py-3 px-3 rounded-md text-white bg-color1  hover:bg-slate-50 hover:text-color1 duration-150 border-color1 border"
              >
                ORDER NOW
              </Link>
            </div>
            <div className=" ">
              <Image
                src="/photo/photo-1.png"
                width={600}
                height={600}
                alt="Picture of the author"
              />

              <div className="flex absolute top-52  right-24 bg-white py-3 px-3 rounded-2xl">
                <div className="bg-color1 px-3 py-3 m-3 rounded-3xl">
                  <CiLocationOn className=" text-white text-xl font-bold" />
                </div>
                <div>
                  <div className=" px-2 py-2">
                    <h4 className="text-lg font-bold">12 Restaurant</h4>
                    <h3>In Your city</h3>
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-2">
                <div className="flex absolute bottom-[-1rem] bg-white py-3 px-3 rounded-2xl">
                  <div>
                    <Image
                      src="/photo/photo-2.jpg"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className=" px-2 py-2">
                      <h4>Restaurant of the Month</h4>
                      <h3 className=" text-lg font-bold">The Wilmington</h3>
                    </div>
                    <div className=" flex text-color1 px-12 text-lg">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarHalf />
                    </div>
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
export default Hero;
