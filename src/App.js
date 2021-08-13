import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import ClinicalTools from "./components/ClinicalTools";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Improvements from "./components/Improvements";
import KOLVideos from "./components/KOLVideos";
import References from "./components/References";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <Header />
      <BackgroundImage />
      <HowItWorks />
      <Improvements />
      <Video />
      <ClinicalTools />
      <KOLVideos />
      <References />
      <Footer />
    </div>
  );
}

export default App;
