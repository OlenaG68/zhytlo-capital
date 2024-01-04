import React from "react";
import Phone from "../Icons/Phone";
import Mail from "../Icons/Mail";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div>
            <div className="container md:px-0 px-3 flex flex-wrap flex-col items-center gap-20 md:gap-0 md:flex-row justify-between py-16">
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
                        <Link href={`tel:+38 097 474 31 86`}>
                            +38 097 474 31 86
                        </Link>
                    </div>
                    <div className="mt-4 flex gap-3 items-center text-white text-opacity-80 text-base font-normal ">
                        <Mail />{" "}
                        <Link href={`mailto:kowalska1988@ukr.net `}>
                            kowalska1988@ukr.net{" "}
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="text-white text-2xl font-semibold">
                        Follow Us
                    </div>
                    <div className="flex text-white gap-14 mt-4">
                        <div>Inst</div>
                        <div>FB</div>
                        <div>T</div>
                    </div>
                </div>
            </div>
            <div className="px-3 md:px-0 text-center pt-8 pb-16 border-t text-white border-neutral-50 border-opacity-30">
                © 2022 WebDes | All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;
