import TopBar from "./components/TopBar";
import './App.css'
import './Responsive.css'
import HomeBanner from "./components/HomeBanner";
import ReadyToLearn from "./components/ReadyToLearn";
import PostReq from "./components/PostReq";
import FindU from "./components/FindU";
import HowItWork from "./components/HowItWork";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <TopBar />
      <HomeBanner />
      <ReadyToLearn />
      <PostReq />
      <FindU />
      <HowItWork />
      <Footer />
    </>
  );
}

export default App;
