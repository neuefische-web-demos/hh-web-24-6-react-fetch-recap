import { useEffect, useState } from "react";

function App() {
  const hex = "#ff0000";
  const [contrast, setContrast] = useState("#220000");
  const [score, setScore] = useState("???");

  useEffect(() => {
    async function fetchScore() {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            colors: [hex, contrast],
          }),
        }
      );
      const data = await response.json();

      setScore(data.overall);
    }
    fetchScore();
  }, [contrast]);

  return (
    <main>
      <p>Color: {hex}</p>
      <p>
        Contrast:
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            setContrast(event.target.elements.contrast.value);
          }}
        >
          <input type="text" name="contrast" defaultValue={contrast} />
          <button>submit</button>
        </form>
      </p>
      <p>Contrast Score: {score}</p>
    </main>
  );
}

export default App;
