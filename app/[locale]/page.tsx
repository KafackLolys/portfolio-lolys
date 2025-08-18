import Image from "next/image";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#121e28}">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}