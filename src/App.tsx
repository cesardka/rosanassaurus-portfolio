import "./App.css";
import { Page1 } from "./pages/page1";
import { Page2 } from "./pages/page2";

function App() {
  return (
    <section className="rorortfolio">
      <Page1 />
      <Page2 />
      <article id="page-three"></article>
      <article id="page-four"></article>
    </section>
  );
}

export default App;
