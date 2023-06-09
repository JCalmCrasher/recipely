import clsx from "clsx";
import { SPACING as p } from "./@variable";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col md:flex-row">
        <div className={clsx(p, "w-full")}>
          <h1 className="text-3xl sm:text-6xl font-bold uppercase">
            food <br />
            recipes
          </h1>
          <p className="max-w-lg mt-7">
            Find recipes to some of your favorite Nigeria dishes
          </p>
          <div className="flex">
            <Image
              src="/food-showcase-2.svg"
              alt="food showcase"
              width={100}
              height={100}
              className="w-fit h-w-fit mt-[120px]"
            />
            <div className="mt-14">
              <p>Recipe of the day</p>
              <div className='border border-black shadow-[5px_5px_0px_black] px-3 py-4'>d</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%] md:h-[500px] bg-[#B3A0CD]">
          <Image
            src="/food-showcase.svg"
            alt="food showcase"
            width={100}
            height={100}
            className="relative md:-left-9 lg:left-[-80px] w-full h-full"
          />
        </div>
      </section>
    </main>
  );
}
