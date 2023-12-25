import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import FirstBlock from "@/components/FirstBlock";
import Map from "@/components/Map";
import Gallery from "@/components/gallery/Gallery";

export default function Home() {
    return (
        <main className="">
            <FirstBlock />
            <Gallery />
            <AboutUs />
            <Map />
            <ContactForm />
        </main>
    );
}
