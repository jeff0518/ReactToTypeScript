import Header from "./Header";
import CoreConcept from "./CoreConcept";

import { CORE_CONCEPTS } from "./data.ts";
import { CoreConceptProps } from "./CoreConcept";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item: CoreConceptProps) => {
              return (
                <CoreConcept
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
