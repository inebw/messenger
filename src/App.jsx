import { useContext } from "react";
import Header from "./components/Header";
import Regsiter from "./components/Register";
import { UrlContext } from "./utils/UrlContext";

function App() {
  const url = useContext(UrlContext);

  return (
    <div className="">
      <UrlContext value={url}>
        <Header />
        <Regsiter />
      </UrlContext>
    </div>
  );
}

export default App;
