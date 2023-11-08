import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar';

const Dropdown = ({component}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const MemoizedAvatar = useMemo(() => component, [component]);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center focus:outline-none"
      >
        <Avatar initials="JD" />
      </button>

      {isOpen && (
        <div className="w-56 absolute right-0 mt-2 py-2 bg-white border border-gray-300 rounded shadow-lg">
          <button className="block py-2 px-4 text-left">Option 1</button>
          <button className="block py-2 px-4 text-left">Option 2</button>
          <button className="block py-2 px-4 text-left">Option 3</button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
    content: PropTypes.node.isRequired,
    icon: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    outlined: PropTypes.bool,
};
