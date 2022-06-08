import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ msg }) => <div>{msg}</div>;

Message.propTypes = {
  msg: PropTypes.string,
};

export default Message;