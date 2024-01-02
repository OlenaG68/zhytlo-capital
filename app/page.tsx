import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import FirstBlock from "@/components/FirstBlock";
import Map from "@/components/Map";
import SliderRender from "@/components/SliderRender";
import Gallery from "@/components/gallery/Gallery";

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
