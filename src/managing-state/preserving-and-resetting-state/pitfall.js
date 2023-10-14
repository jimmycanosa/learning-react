import { useState } from 'react';

export default function MyComponent() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <MyTextField />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Clicked {counter} times
      </button>
    </>
  );
}

function MyTextField() {
  const [text, setText] = useState('');

  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}
