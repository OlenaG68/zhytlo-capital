import React from "react";
import Phone from "../Icons/Phone";
import Mail from "../Icons/Mail";
import Link from "next/link";
import Image from "next/image";
import Instagram from "../Icons/Instagram";
import FaceBook from "../Icons/FaceBook";

const Footer = () => {
    return (
        <div>
            <div className="container md:px-0 px-3 flex flex-wrap flex-col items-start md:items-center gap-20 md:gap-0 md:flex-row justify-between py-16">
                <div className="max-w-[513px]">
                    <div className="text-white">
                        <Image
                            src="/logo/logo1.png"
                            width={180}
                            height={160}
                            alt="logo"
                            className="m-auto"
                        />
                    </div>
                    <div className="mt-8 text-neutral-50 text-base font-normal">
                        «ЖИТЛО КАПІТАЛ» - будівельна компанія, яка працює над
                        створенням надійного, стильного та продуманого до
                        деталей житла. Ми використовуємо лише якісні та
                        перевірені матеріали, а також сучасні технології та
                        обладнання.
                    </div>
                </div>
                <div>
                    <div className="text-white text-2xl font-semibold">
                        Наші контакти
                    </div>
                    {/* <div className="mt-4 text-white text-opacity-80 text-base font-normal ">
                        Deam home villas San Diego, CA, USA
                    </div> */}
                    <div className="mt-4 flex gap-3 items-center text-white text-opacity-80 text-base font-normal ">
                        <Phone />{" "}
                        <Link href={`tel:+380 98 237 2222`}>
                            +380 98 237 2222
                        </Link>
                    </div>
                    <div className="mt-4 flex gap-3 items-center text-white text-opacity-80 text-base font-normal ">
                        <Mail />{" "}
                        <Link href={`mailto:zhytlo.kapital@gmail.com`}>
                            zhytlo.kapital@gmail.com
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="text-white text-2xl font-semibold">
                        Слідкуйте за нами
                    </div>
                    <div className="flex text-white gap-14 mt-4">
                        <Link
                            href="https://www.instagram.com/zhytlo_kapital?igsh=eWRrMWs0YnVpYmEw"
                            target="_blank"
                        >
                            <Instagram />
                        </Link>
                        <Link
                            href="https://www.facebook.com/profile.php?id=61555882618723"
                            target="_blank"
                        >
                            <FaceBook />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="px-3 md:px-0 text-center pt-8 pb-16 border-t text-white border-neutral-50 border-opacity-30">
                © 2024 Hrynykha Web | All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;
