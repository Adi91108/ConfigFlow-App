import "./App.css";
import MainSection from "./components/mainContent/MainSection";
import ConfigurationBar from "./components/configuration/ConfigurationBar";
import TopBarSection from "./components/navbar/TopBarSection";
import SideBarSection from "./components/navbar/SideBarSection";

function App() {
  return (
    <div className="App h-[88vh] flex">
      <div className="flex-1">
        <SideBarSection />
      </div>
      <div className="h-full flex-[26]">
        <TopBarSection />
        <div className="flex h-full">
          <div className="flex-[19]">
            <MainSection />
          </div>
          <div className="flex-[6]">
            <ConfigurationBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
