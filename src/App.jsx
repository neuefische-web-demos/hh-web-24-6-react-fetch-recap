import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello From outside React");

  useEffect(() => {
    const outsideContainer = document.getElementById("outside-react");
    const greeting = document.createElement("h1");
    greeting.textContent = message;
    outsideContainer.append(greeting);

    return () => {
      greeting.replaceWith();
    };
  }, [message]);

  return (
    <main>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newMessage = event.target.elements.message.value;

          setMessage(newMessage);
        }}
      >
        <input type="text" name="message" defaultValue={message} />
        <button type="submit">submit</button>
      </form>
      <h1>Hello inside React</h1>
    </main>
  );
}

export default App;
