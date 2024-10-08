import { useState } from "react";
import Header from "./components/Header.tsx";
import CoreConcept from "./components/CoreConcept.tsx";
import TabButton from "./components/TabButton.tsx";

import { CORE_CONCEPTS, EXAMPLES } from "./data.ts";
import { CoreConceptProps } from "./components/CoreConcept.tsx";
import "./index.css";

export type ContentType = {
  [key: string]: { title: string; description: string; code: string };
};

function App() {
  const mainSectionTabs: string[] = ["Components", "JSX", "Props", "State"];
  const [content, setContent] = useState<string>("Components");
  const selectHandler = (selectedButton: string) => {
    setContent(selectedButton);
  };

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item: CoreConceptProps, index) => {
              return (
                <CoreConcept
                  key={index}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {mainSectionTabs.map((name) => {
              return (
                <TabButton key={name} onSelect={() => selectHandler(name)}>
                  {name}
                </TabButton>
              );
            })}
          </menu>
          {EXAMPLES[content] && (
            <div id="tab-content">
              <h3>{EXAMPLES[content].title}</h3>
              <p>{EXAMPLES[content].description}</p>
              <pre>
                <code>{EXAMPLES[content].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
