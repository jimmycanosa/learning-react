export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={function handleClick() {
          alert('You clicked me too!');
        }}
      >
        Click me too
      </button>
      <button onClick={() => alert('Clicked')}>Click here</button>
    </>
  );
}
