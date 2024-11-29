
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <section className="flex flex-row h-screen">
      <LeftBar />
      <main className="flex-1">
        <Header />
        Main goes here</main>
      <Sidebar />
    </section>
  );
}
