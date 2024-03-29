import React from "react";
import Image from "next/image";
import Link from "next/link";
const Map = () => {
    return (
        <section className="pt-[150px] pb-[50px] px-3 ">
            <h1 className="text-white text-lg md:text-4xl  text-center mb-10   ">
                <span className="text-sky-500 text-3xl md:text-[54px]  font-bold">
                    SUMMERSTONE VILLAGE
                </span>
                <br /> на карті
            </h1>
            <Link
                href="https://maps.app.goo.gl/EBRbokNCZeKoSeEi7?g_st=iv"
                target="_blank"
            >
                <Image
                    src="/images/maps1.png"
                    width={1177}
                    height={556}
                    alt="image"
                    className="rounded-lg overflow-hidden m-auto "
                />
            </Link>
        </section>
    );
};

export default Map;
