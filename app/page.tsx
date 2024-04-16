import ContactForm from "@/components/ContactForm";
import Features from "@/components/Features";
import SectionHeading from "@/components/common/ui/SectionHeading";
import HomeLayout from "@/layouts/HomeLayout";
import Image from "next/image";

export default function Home() {
  return (
    <HomeLayout className="flex min-h-screen flex-col items-center relative w-full ">
      <section id="features" className=" mt-5">
        <SectionHeading
          heading="Lystface API Features"
          description="Our features are simple, powerful and an easy fit to any platform to increase the organization’s productivity."
        />

        <div className=" py-5">
          <Features />
        </div>
      </section>
      <section id="contactUs" className=" mt-5">
        <SectionHeading
          heading="Contact US"
          description="Get in Touch with Us!"
        />

        <div className=" py-5 flex flex-col md:flex-row w-full  items-center gap-5">
          <div className=" w-1/2">
            <Image
              height={200}
              width={200}
              alt="icon"
              src="/images/contact.png"
              className=" w-full h-1/2"
            />
          </div>
          <ContactForm />
        </div>
      </section>
    </HomeLayout>
  );
}
