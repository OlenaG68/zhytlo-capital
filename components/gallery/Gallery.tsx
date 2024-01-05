import React from "react";
import FilterBtn from "./FilterBtn";
import Card from "./Card";
import Link from "next/link";

const Gallery = () => {
    const cadrs = [
        {
            price: "100$",
            images: ["/images/gallery/1.jpg", "/images/plan/1.jpg"],
            id: 1,
            room: { title: "1 Кімната", slug: "one-bed-room", icon: "" },
            bathRoom: { title: "1 Ванна", slug: "one-bath-room", icon: "" },
            sq: { number: 45, icon: "" },
        },
        {
            price: "1003$",
            images: ["/images/gallery/2.jpg", "/images/plan/2.jpg"],
            id: 2,
            room: { title: "1 Кімната", slug: "one-bed-room", icon: "" },
            bathRoom: { title: "2 Ванни", slug: "tree-bath-room", icon: "" },
            sq: { number: 55, icon: "" },
        },
        {
            price: "1004$",
            images: ["/images/gallery/3.jpg", "/images/plan/3.jpg"],
            id: 3,
            room: { title: "1 Кімната", slug: "one-bed-room", icon: "" },
            bathRoom: { title: "1 Ванна", slug: "one-bath-room", icon: "" },
            sq: { number: 115, icon: "" },
        },
        {
            price: "1005$",
            images: ["/images/gallery/4.jpg", "/images/plan/4.jpg"],
            id: 4,
            room: { title: "2 Кімнати", slug: "one-bed-room", icon: "" },
            bathRoom: { title: "2 Ванни", slug: "two-bath-room", icon: "" },
            sq: { number: 125, icon: "" },
        },
        {
            price: "100$",
            images: ["/images/gallery/5.jpg", "/images/plan/5.jpg"],
            id: 5,
            room: { title: "1 Кімната", slug: "one-bed-room", icon: "" },
            bathRoom: { title: "1 Ванна", slug: "one-bath-room", icon: "" },
            sq: { number: 435, icon: "" },
        },
        {
            price: "1060$",
            images: ["/images/gallery/6.jpg", "/images/plan/6.jpg"],
            id: 6,
            room: { title: "3 Кімнати", slug: "three-bed-room", icon: "" },
            bathRoom: { title: "2 Ванни", slug: "two-bath-room", icon: "" },
            sq: { number: 145, icon: "" },
        },
    ];
    return (
        <div className="container px-3 pb-16">
            <div id="gallery" className="pt-32 flex  justify-center">
                <FilterBtn />
            </div>

            <div className="flex justify-center  flex-col md:flex-row md:flex-wrap gap-4 mt-8 pb-4">
                {cadrs.map((card) => (
                    <Card card={card} key={card.id} />
                ))}
            </div>
            <div className="flex flex-col lg:flex-row justify-center pt-8 lg:pt-20 gap-4 items-center ">
                <div className="text-white font-semibold text-xl text-center">
                    Повний ескіз планування будинків, поверхів та квартир
                </div>

                <Link
                    href="/plan.pdf"
                    download
                    className=" hover:bg-sky-600 cursor-pointer px-6 py-3 bg-sky-500 w-fit rounded-lg shadow justify-center items-center gap-2.5 flex text-white text-sm font-semibold  leading-tight"
                    target="_blank"
                >
                    Скачати файл
                </Link>
            </div>
        </div>
    );
};

export default Gallery;
