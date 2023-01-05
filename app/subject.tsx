import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type SubjectPropsType = {
  name: string;
  image: StaticImageData;
};

const Subject = ({ image, name }: SubjectPropsType) => {
  return (
    <Link href={`/${name}`}>
      <div className="bg-white shadow-xl lg:hover:scale-110 lg:hover:-rotate-3 transition shadow-violet-300 mx-2 lg:mx-5 rounded-xl flex flex-col p-5 items-center border-violet-400 border-2">
        <Image src={image} width={100} height={100} className="w-40" alt="" />
        <h1 className="w-full text-gray-500 pt-3 text-center font-semibold">{name}</h1>
      </div>
    </Link>
  );
};

export default Subject;
