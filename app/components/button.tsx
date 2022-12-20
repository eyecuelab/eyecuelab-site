import React from 'react';

interface Props {
  style: String;
  text: String;
}

const Button: React.FC<Props> = ({ 
  style,
  text,
}) => { 
return (
  <button className={`${style}`}>
    {text}
  </button>
);
}

export default Button;
