import React from "react";

const FilterBtn = () => {
    const filterBtn = [
        { title: "All", id: 1, slug: "all" },
        { title: "Studio", id: 1, slug: "studio" },
        { title: "1 Room", id: 1, slug: "one-room" },
        { title: "2 Room", id: 1, slug: "two-rooms" },
    ];
    return (
        <div className=" flex gap-6 flex-wrap items-center justify-center">
            {filterBtn.map((btn) => (
                <div
                    key={btn.id}
                    className="  px-6 py-3 rounded-lg border border-sky-500 justify-center items-center gap-2.5 inline-flex"
                >
                    <div className="text-sky-500 text-sm font-semibold  leading-tight">
                        {btn.title}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FilterBtn;
