import { useState } from 'react';

export default function EditProfile() {
  const [enableEdit, setEnableEdit] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setEnableEdit(!enableEdit);
      }}
    >
      <label>
        First name:{' '}
        {enableEdit ? (
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:{' '}
        {enableEdit ? (
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type='submit'>{enableEdit ? 'Save' : 'Edit'} Profile</button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
