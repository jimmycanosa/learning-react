import { useState } from 'react';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let divClassName = 'background';
  let imgClassName = 'picture';
  if (isActive) {
    imgClassName += ' picture--active';
  } else {
    divClassName += ' background--active';
  }

  return (
    <div className={divClassName} onClick={() => setIsActive(false)}>
      <img
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={imgClassName}
        alt='Rainbow houses in Kampung Pelangi, Indonesia'
        src='https://i.imgur.com/5qwVYb1.jpeg'
      />
    </div>
  );
}
