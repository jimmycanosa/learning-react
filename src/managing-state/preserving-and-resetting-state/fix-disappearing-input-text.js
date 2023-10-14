import { useState } from 'react';

export default function App() {
  const [showHint, setShowHint] = useState(false);
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value)
  }
  
  if (showHint) {
    return (
      <div>
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
        <Form value={text} onChange={handleChange} />
        <button
          onClick={() => {
            setShowHint(false);
          }}
        >
          Hide hint
        </button>
      </div>
    );
  }
  return (
    <div>
      <Form value={text} onChange={handleChange} />
      <button
        onClick={() => {
          setShowHint(true);
        }}
      >
        Show hint
      </button>
    </div>
  );
}

function Form({value, onChange}) {
  return <textarea value={value} onChange={onChange} />;
}
