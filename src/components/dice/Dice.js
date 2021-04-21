import React from 'react';

export default function Dice({
  gradient1,
  gradient2,
  icon,
  customClass,
  onClick,
}) {
  return (
    <div
      className={'dice ' + customClass}
      style={{
        backgroundImage: `linear-gradient(
        180deg,
        ${gradient1},
        ${gradient2}
      )`,
      }}
      onClick={() => onClick(customClass)}
    >
      <div className="inner-circle">
        {icon && <img src={icon} alt="dice" className="icon" />}
      </div>
    </div>
  );
}
