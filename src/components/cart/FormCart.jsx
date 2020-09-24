import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormCart = ({ addUser, isDisabled }) => {
  const [userName, setUserName] = useState('');

  const handleChange = ({ target }) => setUserName(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(userName);
    setUserName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-box">
        <div className="form-box__item">
          <input value={userName} onChange={handleChange} type="text" />
          <button disabled={isDisabled}>Add user</button>
        </div>
      </div>
    </form>
  );
};

FormCart.propTypes = {
  addUser: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default FormCart;
