import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import FirstBlock from "@/components/FirstBlock";
import Map from "@/components/Map";
import SliderRender from "@/components/SliderRender";
import Gallery from "@/components/gallery/Gallery";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Житло твоєї мрії",
    description:
        "SummerStone - малоповерхове житло у Львові. Купуй квартиру в сучасній новобудові у Львові, з явними перевагами в розташуванні. ",
};
export default function Home() {
    return (
        <main className="">
            <FirstBlock />
            <Gallery />
            <SliderRender />
            <AboutUs />
            <Map />
            <ContactForm />
        </main>
    );
}
