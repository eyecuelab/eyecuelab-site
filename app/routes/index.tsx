import Header from "./components/header";
import HomePage from "./components/homepage";

export default function Index() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="bg-zinc-400 w-screen h-screen overflow-x-auto snap-y snap-mandatory capitalize"
    >
      <Header />
      <HomePage/>
    </div>
  );
}

