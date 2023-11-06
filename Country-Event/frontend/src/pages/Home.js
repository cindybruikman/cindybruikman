import HeroSection from "../components/HeroSection";
import YouTubeVideo from "../components/YoutubeVideo";
import CountryImage from "../components/CountryImage";
import EventsItemHome from "../components/EventsItemHome";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <CountryImage />
      <EventsItemHome />
      <YouTubeVideo />
    </div>
  );
}

export default HomePage;
