import { HeaderComponent } from "./components/Header/HeaderComponent";
import { MainComponent } from "./components/Main/MainComponent";

function App() {
  return (
    <div className="!max-w-screen min-h-screen bg-[--bg-landing-page-primary-color] flex flex-col">
      <section className="max-w-screen">
        <HeaderComponent />
      </section>
      <section className="max-w-screen">
        <MainComponent />
      </section>
    </div>
  );
}

export default App;
