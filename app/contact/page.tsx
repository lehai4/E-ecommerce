import BannerPage from "@/app/ui/bannerPage";
import MapComponent from "@/app/ui/googleMap";
import Section from "../components/section";
import ContactInfo from "../ui/contact";
const ContactPage = () => {
  return (
    <div className="main-content">
      <BannerPage title="Contact Us" />
      {/* Google Map */}
      <Section className="section-map xl:my-[98px] my-[35px]">
        <MapComponent />
      </Section>
      {/* Infomation of me */}
      <Section className="section-contact contact-info xl:my-[98px] my-[35px]">
        <ContactInfo />
      </Section>
    </div>
  );
};

export default ContactPage;
