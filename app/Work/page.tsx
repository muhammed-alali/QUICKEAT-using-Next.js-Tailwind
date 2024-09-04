import Image from "next/image"

function Work() {
    return (
        <>
            <section className=" container mx-auto py-24">
                <div className="text-center flex-wrap py-10 ">
                    <h1 className=" text-5xl font-bold py-2">How It Works</h1>
                    <p className="">Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus inmetus vulputate eu scelerisque felis.</p>
                </div>
                <div className=" grid grid-cols-12 justify-center pl-[87px]">
                    <div className=" col-span-4">
                        <Image
                            src={"/photo/lustration-1.png"}
                            alt="img"
                            width={300}
                            height={300}
                        />
                        <h2 className="font-bold text-2xl py-3 "><span className="px-2 text-[#cfcfcf] text-4xl">01</span>Select Restaurant</h2>
                        <p className="leading-7 w-80 text-color2"> Select Restaurant Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.</p>
                    </div>
                    <div className="col-span-4">
                        <Image
                            src={"/photo/lustration-2.png"}
                            alt="img"
                            width={300}
                            height={300}
                        />
                        <h2 className="font-bold text-2xl py-3"><span className="px-2 text-[#cfcfcf] text-4xl">02</span>Select menu</h2>
                        <p className="leading-7 w-80 text-color2">Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Odio ut sem nulla pharetra diam sit amet.</p>
                    </div>
                    <div className="col-span-4">
                        <Image
                            src={"/photo/lustration-3.png"}
                            alt="img"
                            width={300}
                            height={300}
                        />
                        <h2 className="font-bold text-2xl py-3"><span className="px-2 text-[#cfcfcf] text-4xl">03</span>Wait for delivery</h2>
                        <p className="leading-7 w-80 text-color2">Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat nisl vel pretium lectus quam id leo. A scelerisque purus semper eget. Tincidunt arcu non.</p>
                    </div>
                </div>
            </section>
        </>
    )
} export default Work