import { Header } from "./sections/Header";
import { Opening } from "./sections/Opening";
import { Couple } from "./sections/Couple";
import { EventSection } from "./sections/Event";
import { Love } from "./sections/Love";
import { Gift } from "./sections/Gift";
import { PrewedSection } from "./sections/Prewed";
import { FooterSection } from "./sections/Footer";
import MusicPlayer from "./components/MusicPlayer";
// import { RSVPSection } from "./sections/RSVP";

function App() {
  return (
    <>
      <Header />
      <Opening />
      <Couple />
      <EventSection />
      <Love />
      {/* <RSVPSection /> */}
      <Gift />
      <PrewedSection />
      <FooterSection />
      <MusicPlayer />
    </>
  );
}

export default App;
