import Image from "next/image";

function Subscribe_Section() {
  return (
    <>
      <section className=" container mx-auto justify-center">
        <div className="grid grid-cols-12 pl-[75px] justify-center py-20">
          <div className=" col-span-6">
            <Image src={"/photo/illustration-4.png"} alt="Picture of the author" width={700} height={700}/>
          </div>

          <div className=" col-span-6 px-6 py-8">
            <h2 className="text-6xl font-bold ">Get the menu of your favorite restaurants every day</h2>
            <h2 className=" py-7"><a href="" className="bg-color1 text-white py-3 px-[10px] rounded-md border  border-color1 hover:bg-white hover:text-color1 duration-300">SUBSCRIBE</a></h2>
          </div>
        </div>
      </section>
    </>
  );
}
export default Subscribe_Section;

