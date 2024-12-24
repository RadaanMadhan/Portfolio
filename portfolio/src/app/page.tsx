import Image from "next/image";

export default function Home() {
  return (
    <div className="font-montserrat min-h-screen flex">
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-center ml-20">
          <div className="text-7xl font-bold -mt-40">
            RADAAN MADHAN
          </div>
          <div className="text-xl mt-4">
            Electronics and Information Engineering Student
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className=" text-green-400 text-5xl font-bold -mt-40">
          PORTFOLIO
      </div>
      </div>
    </div>
  );
}
