function Counters_Section() {
    return (
        <>
            <section className=" container mx-auto ">
                <div className=" grid grid-cols-12 py-16 pl-[75px]">
                    <div className=" col-span-3 flex gap-7  py-10 text-4xl font-bold  ">
                        <h2>
                            Service shows good taste.
                        </h2>
                    </div>
                    <div className=" col-span-3 flex gap-7 bg-white drop-shadow-2xl px-10 w-[270px] h-[175px] rounded-2xl">
                        <span className="text-5xl font-bold text-color1 py-16">
                            976
                        </span>
                        <h3 className="text-color2 py-16">
                            Satisfied
                            Customer
                        </h3>
                    </div>
                    <div className=" col-span-3 flex gap-7 bg-white drop-shadow-2xl px-14 py-1 w-[270px] h-[175px] rounded-2xl">
                        <span className="text-5xl font-bold text-color1 py-16">
                            12
                        </span>
                        <h3 className="text-color2 py-16">

                            Best
                            Restaurants
                        </h3>
                    </div>
                    <div className=" col-span-3 flex gap-7 bg-white drop-shadow-2xl px-14 py-1 w-[270px] h-[175px] rounded-2xl">
                        <span className="text-5xl font-bold text-color1 py-16">
                            1K+
                        </span>
                        <h3 className="text-color2 py-16">
                            Food
                            Delivered
                        </h3>
                    </div>
                </div>
            </section>
        </>
    )
}export default Counters_Section