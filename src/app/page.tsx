import clsx from "clsx";
import { SPACING as p } from "./@variable";
import Image from "next/image";
import Card from "./components/card";

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
          <div className="flex flex-col md:flex-row">
            <Image
              src="/food-showcase-2.svg"
              alt="food showcase"
              width={100}
              height={100}
              className="w-full md:w-fit h-w-fit mt-[120px]"
            />
            <div className="mt-14">
              <p>Recipe of the day</p>
              <Card>
                <div>
                  <span className="font-bold text-sm">Ewa agoyin</span>
                  <ul className="list-disc pl-8 text-sm">
                    <li>Oil</li>
                    <li>Beans</li>
                    <li>Agege Bread</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%] border border-black h-fit">
          <div className=" bg-info">
            <Image
              src="/food-showcase.svg"
              alt="food showcase"
              width={100}
              height={100}
              className="relative md:-left-9 lg:left-[-80px] w-full h-full"
            />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col gap-4 px-[38px] md:border md:border-r-black w-full  py-4">
              <FoodHighlightText className="border-info" text="soup" />
              <FoodHighlightText className="border-[#DE6B47]" text="food" />
              <FoodHighlightText className="border-[#42DA29]" text="drinks" />
            </div>
            <div className="w-full flex flex-col items-center py-4">
              <span className="font-bold text-2xl">*</span>
              <span className="font-bold text-2xl">+500</span>
              <span>9ja Food recipes</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const FoodHighlightText = ({
  className = "border-black",
  text
}: {
  className?: string;
  text: string;
}) => {
  return (
    <span
      className={clsx("capitalize px-7 py-3 border rounded-full w-fit mx-auto", className)}
    >
      {text}
    </span>
  );
};
