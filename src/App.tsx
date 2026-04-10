import { Header } from "@/components";
import { Route, Routes } from "react-router-dom";
import { routes } from "@/lib";
import { Guest, Home } from "@/pages";

function App() {
  return (
    <div className="bg-night min-h-screen text-text font-vt323 text-xl overflow-x-hidden">
      <Header />
      <main className="max-w-275 mx-auto pt-7 px-5 pb-14 grid grid-cols-1 gap-6">
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.guest} element={<Guest />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
