import React from "react";
import FilterBtn from "./FilterBtn";
import Card from "./Card";

const Gallery = () => {
    const cadrs = [
        {
            price: "100$",
            image: "/images/577x450.png",
            id: 1,
            room: { title: "1 Bed room", slug: "one-bed-room", icon: "" },
            bathRoom: { title: "1 Bath", slug: "one-bath-room", icon: "" },
            sq: { number: 45, icon: "" },
        },
        {
            price: "1003$",
            image: "/images/577x450.png",
            id: 2,
            room: { title: "1 Bed room", slug: "one-bed-room", icon: "" },
            bathRoom: { title: "2 Bath", slug: "tree-bath-room", icon: "" },
            sq: { number: 55, icon: "" },
        },
        {
            price: "1004$",
            image: "/images/577x450.png",
            id: 3,
            room: { title: "1 Bed room", slug: "one-bed-room", icon: "" },
            bathRoom: { title: "1 Bath", slug: "one-bath-room", icon: "" },
            sq: { number: 115, icon: "" },
        },
        {
            price: "1005$",
            image: "/images/577x450.png",
            id: 4,
            room: { title: "1 Bed room", slug: "one-bed-room", icon: "" },
            bathRoom: { title: "2 Bath", slug: "two-bath-room", icon: "" },
            sq: { number: 125, icon: "" },
        },
        {
            price: "100$",
            image: "/images/577x450.png",
            id: 5,
            room: { title: "1 Bed room", slug: "one-bed-room", icon: "" },
            bathRoom: { title: "1 Bath", slug: "one-bath-room", icon: "" },
            sq: { number: 435, icon: "" },
        },
        {
            price: "1060$",
            image: "/images/577x450.png",
            id: 6,
            room: { title: "3 Bed room", slug: "three-bed-room", icon: "" },
            bathRoom: { title: "2 Bath", slug: "two-bath-room", icon: "" },
            sq: { number: 145, icon: "" },
        },
    ];
    return (
        <div className="container mt-16 mb-16">
            <div className="flex  justify-center">
                <FilterBtn />
            </div>

            <div className="flex justify-center flex-wrap gap-4 mt-8 px-3 pb-4">
                {cadrs.map((card) => (
                    <Card card={card} key={card.id} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
