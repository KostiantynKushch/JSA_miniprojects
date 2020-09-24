import React from 'react';
import spinner from './spinner.gif';
import PropTypes from 'prop-types';
import { WrapSpinner, Img } from './Styled';

const Spinner = ({ width, height }) => {
  return (
    <WrapSpinner>
      <Img width={width} height={height} src={spinner} alt="Spinner loading" />
    </WrapSpinner>
  );
};

Spinner.defaultProps = {
  width: 220,
  height: 220,
};

Spinner.prototype = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Spinner;
