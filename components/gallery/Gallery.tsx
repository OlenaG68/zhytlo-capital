import React from "react";
import FilterBtn from "./FilterBtn";
import Card from "./Card";

const Gallery = () => {
    const cadrs = [
        {
            price: "100$",
            images: ["/images/gallery/1.jpg", "/images/plan/1.jpg"],
            id: 1,
            room: { title: "1 Bed room", slug: "one-bed-room", icon: "" },
            bathRoom: { title: "1 Bath", slug: "one-bath-room", icon: "" },
            sq: { number: 45, icon: "" },
        },
        {
            price: "1003$",
            images: ["/images/gallery/2.jpg", "/images/plan/2.jpg"],
            id: 2,
            room: { title: "1 Bed room", slug: "one-bed-room", icon: "" },
            bathRoom: { title: "2 Bath", slug: "tree-bath-room", icon: "" },
            sq: { number: 55, icon: "" },
        },
        {
            price: "1004$",
            images: ["/images/gallery/3.jpg", "/images/plan/3.jpg"],
            id: 3,
            room: { title: "1 Bed room", slug: "one-bed-room", icon: "" },
            bathRoom: { title: "1 Bath", slug: "one-bath-room", icon: "" },
            sq: { number: 115, icon: "" },
        },
        {
            price: "1005$",
            images: ["/images/gallery/4.jpg", "/images/plan/4.jpg"],
            id: 4,
            room: { title: "1 Bed room", slug: "one-bed-room", icon: "" },
            bathRoom: { title: "2 Bath", slug: "two-bath-room", icon: "" },
            sq: { number: 125, icon: "" },
        },
        {
            price: "100$",
            images: ["/images/gallery/5.jpg", "/images/plan/5.jpg"],
            id: 5,
            room: { title: "1 Bed room", slug: "one-bed-room", icon: "" },
            bathRoom: { title: "1 Bath", slug: "one-bath-room", icon: "" },
            sq: { number: 435, icon: "" },
        },
        {
            price: "1060$",
            images: ["/images/gallery/6.jpg", "/images/plan/6.jpg"],
            id: 6,
            room: { title: "3 Bed room", slug: "three-bed-room", icon: "" },
            bathRoom: { title: "2 Bath", slug: "two-bath-room", icon: "" },
            sq: { number: 145, icon: "" },
        },
    ];
    return (
        <div className="container pb-16">
            <div id="gallery" className="pt-32 flex  justify-center">
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
