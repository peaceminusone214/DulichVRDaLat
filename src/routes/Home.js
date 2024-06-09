import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import homeBackgroud from "../assets/homeBackground.jpg"

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={homeBackgroud}
        title="Welcome to DaLat City"
        text="Hãy chọn địa điểm lý tưởng dành cho bạn."
        buttonText="Xem các gói du lịch"
        url="/service"
        btnClass="show"
      />
      <Navbar />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
