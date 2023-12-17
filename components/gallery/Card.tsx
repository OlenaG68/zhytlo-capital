import Image from "next/image";
import React from "react";

interface ICard {
    card: {
        price: string;
        image: string;
        id: number;
        room: { title: string; slug: string; icon: string };
        bathRoom: { title: string; slug: string; icon: string };
        sq: { number: number; icon: string };
    };
}

const Card = ({ card }: ICard) => {
    return (
        <div className="max-w-[577px] max-h-[582px] bg-neutral-900  rounded-lg ">
            <div className="relative">
                <Image
                    src={card.image}
                    width={577}
                    height={450}
                    alt="image"
                    className=" rounded-lg overflow-hidden"
                />
                <div className="w-[60px] h-full left-[517px] top-0 absolute">
                    <div className="w-[60px] h-full left-0 top-0 absolute bg-black bg-opacity-30 rounded-tr-lg rounded-br-lg" />
                    <div className="w-6 h-6 left-[42px] top-[213px] absolute origin-top-left rotate-180" />
                </div>
                <div className="w-[60px] h-full left-0 top-0 absolute">
                    <div className="w-[60px] h-full left-0 top-0 absolute bg-black bg-opacity-30 rounded-tl-lg rounded-bl-lg" />
                    <div className="w-6 h-6 left-[18px] top-[237px] absolute" />
                </div>
            </div>

            <div className="flex justify-between px-[15px] mt-4 items-center">
                <div className="text-neutral-50 text-2xl font-semibold ">
                    {card.price}
                </div>
                <div className=" px-6 py-3 bg-gradient-to-r from-orange-300 to-purple-500 rounded-lg shadow justify-center items-center gap-2.5 inline-flex">
                    View Details
                </div>
            </div>
            <div className="mx-[15px] grid grid-cols-3  divide-x rounded-lg border border-neutral-50 border-opacity-30 mt-4">
                <div className="flex justify-center gap-1 py-3">
                    <div>{card.room.icon}</div>
                    <div>{card.room.title}</div>
                </div>
                <div className=" flex justify-center gap-1 py-3">
                    <div>{card.bathRoom.icon}</div>
                    <div>{card.bathRoom.title}</div>
                </div>
                <div className="flex justify-center gap-1 py-3">
                    <div>{card.sq.icon}</div>
                    <div>{card.sq.number} м2</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
