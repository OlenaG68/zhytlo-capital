"use client";
import React, { useState } from "react";
interface IFilter {
    onSelectFilter: (value: string) => void;
}

const FilterBtn = ({ onSelectFilter }: IFilter) => {
    const [activeBtn, setActiveBtn] = useState("all");
    const filterBtn = [
        { title: "Всі", id: 1, slug: "all" },
        { title: "1 Кімната", id: 1, slug: "one-room" },
        { title: "2 Кімнати", id: 1, slug: "two-rooms" },
        { title: "3 Кімнати", id: 1, slug: "three-rooms" },
    ];

    const btnClick = (slug: string) => {
        onSelectFilter(slug);
        setActiveBtn(slug);
    };
    return (
        <div className=" flex gap-6 flex-wrap items-center justify-center">
            {filterBtn.map((btn) => (
                <div
                    key={btn.id}
                    className={`px-6 py-3 cursor-pointer rounded-lg border  justify-center items-center gap-2.5 inline-flex ${
                        activeBtn === btn.slug
                            ? "border-sky-500"
                            : "border-white"
                    }`}
                    onClick={() => btnClick(btn.slug)}
                >
                    <div
                        className={` text-sm font-semibold  leading-tight ${
                            activeBtn === btn.slug
                                ? "text-sky-500"
                                : "text-white"
                        }`}
                    >
                        {btn.title}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FilterBtn;
