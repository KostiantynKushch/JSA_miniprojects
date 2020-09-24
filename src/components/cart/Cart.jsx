import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

const Cart = ({ item }) => {
  const { deleteItem } = useContext(AppContext);
  return (
    <div className="cart">
      <h3>{item.name}</h3>
      <p>{item.login}</p>
      <img src={item.avatar_url} alt={item.name} />
      <button className="delete-button" onClick={() => deleteItem(item.id)}>
        Delete user
      </button>
    </div>
  );
};

Cart.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default memo(Cart);
