"use client";
import React, { useState } from "react";

const FilterBtn = () => {
    const [activeBtn, setActiveBtn] = useState("all");
    const filterBtn = [
        { title: "All", id: 1, slug: "all" },
        { title: "Studio", id: 1, slug: "studio" },
        { title: "1 Room", id: 1, slug: "one-room" },
        { title: "2 Rooms", id: 1, slug: "two-rooms" },
    ];
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
                    onClick={() => setActiveBtn(btn.slug)}
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
