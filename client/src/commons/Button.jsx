import PropTypes from 'prop-types';
import { THEME_PRIMARY_COLOR, THEME_SECONDARY_COLOR } from '../constants';

export const StyledButton = ({ content, icon, onClick, outlined }) => {
    const buttonStyles = `inline-flex items-center h-10 px-5 text-violet-100 transition-colors duration-150 rounded-lg focus:shadow-outline ${
        outlined
          ? 'border border-violet-700 bg-transparent hover:bg-violet-800 hover:border-transparent'
          : 'bg-violet-700 hover:bg-violet-800'
      }`;    

    return (
    <button
        type="button"
        onClick={onClick} 
        className={buttonStyles}
    >
         <div className="flex items-center space-x-2">
            {icon}
            <span>{content}</span>
        </div>
    </button>
    );
};

StyledButton.propTypes = {
    content: PropTypes.node.isRequired,
    icon: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    outlined: PropTypes.bool,
};

export const ThemedButton = ({ content, icon, onClick, styleClass }) => {  
    return (
    <button
        type="submit"
        onClick={onClick} 
        className={styleClass ? styleClass : 'font-semibold h-10 hover:scale-105 transition-transform inline-flex items-center px-5 text-white transition-colors duration-150 rounded-lg focus:shadow-outline'}
        style={{
            // height: '2.5rem', ':hover': {transform: 'scale(1.05)'}, 
            background: `linear-gradient(to right, ${THEME_PRIMARY_COLOR}, ${THEME_SECONDARY_COLOR}, ${THEME_SECONDARY_COLOR})`}}
    >
        <div className="flex items-center space-x-2">
            {icon}
            <span>{content}</span>
        </div>
    </button>
    );
};

ThemedButton.propTypes = {
    content: PropTypes.node.isRequired,
    icon: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    styleClass: PropTypes.string,
};

export const PillButton = ({ content, icon, onClick }) => {  
    return (
        <button
        type="button"
        onClick={onClick} 
        className='p-2 hover:scale-105 transition-transform bg-violet-700 hover:bg-violet-800 inline-flex items-center h-10 text-violet-100 transition-colors duration-150 rounded-full focus:shadow-outline'
        style={{background: 'linear-gradient(to right, #6e5494, #300066, #300066)'}}
    >
        <div className="flex items-center space-x-2">
            {icon}
        </div>
    </button>
    
    );
};

PillButton.propTypes = {
    content: PropTypes.node.isRequired,
    icon: PropTypes.node,
    onClick: PropTypes.func.isRequired,
};