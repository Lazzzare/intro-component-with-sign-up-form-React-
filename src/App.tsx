import Header from "./components/Header";
import InputBox from "./components/InputBox";

const App = () => {
  return (
    <div className="flex flex-col h-screen w-full md:justify-center md:items-center md:flex-row gap-y-[64px] md:gap-x-[45px] px-6 pt-[88px]">
      <Header
        title="Learn to code by watching others"
        content="See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. "
      />
      <InputBox />
    </div>
  );
};

export default App;
