import Audio from "./components/audio.jsx";
import Yangi from "./components/yangi.jsx";

function App() {
  return (
    <>
      <div className="container">
        <section>
          <h2 className="font-normal text-[32px] leading-[125%] mb-[30px]">Янги қўшилганлар</h2>
          <Yangi />
          <h2 className="font-normal text-[32px] leading-[125%] mb-[30px]">Аудио китоблар</h2>
          <Audio />
        </section>
      </div>
    </>
  );
}

export default App;
