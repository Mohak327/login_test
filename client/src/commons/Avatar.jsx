import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Avatar = ({ image, initials, dropdownData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getRandomColor = () => {
    const colors = [
      'bg-blue-300',
      'bg-green-300',
      'bg-yellow-300',
      'bg-red-300',
      'bg-pink-300',
      'bg-purple-300',
      'bg-indigo-300',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="relative inline-block">
      {isOpen && (
        <div className="absolute top-10 right-0 w-56 mt-2 bg-white border border-gray-300 rounded shadow-lg">
          {dropdownData.map((item, index) => (
            <Link key={index} to={item.link} className="block py-2 px-4 text-left">
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <div 
        onClick={toggleDropdown}
        className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold text-lg ${getRandomColor()}`}
      >
        {image ? (
          <img src={image} alt="User Avatar" className="rounded-full" />
        ) : (
          initials[0]
        )}
      </div>
    </div>
  );
};

export default Avatar;

Avatar.propTypes = {
  image: PropTypes.string,
  initials: PropTypes.string.isRequired,
  dropdownData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

