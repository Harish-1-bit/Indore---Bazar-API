import React from 'react';

const Loader = ({ size = 'medium', fullScreen = false }) => {
  const sizeClasses = {
    small: 'w-2 h-2',
    medium: 'w-3 h-3',
    large: 'w-4 h-4'
  };

  const gapClasses = {
    small:  'gap-1.5',
    medium: 'gap-2',
    large: 'gap-2.5'
  };

  // Add custom bounce animation
  const style = `
    @keyframes customBounce {
      0%, 80%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      40% {
        transform: scale(1.3);
        opacity: 0.7;
      }
    }
    
    .bounce-dot {
      animation: customBounce 1. 4s ease-in-out infinite;
    }
  `;

  const loaderContent = (
    <div className={`flex justify-center items-center ${gapClasses[size]}`}>
      <div
        className={`${sizeClasses[size]} bg-gradient-to-br from-green-500 to-green-600 rounded-full bounce-dot`}
        style={{ animationDelay: '-0.32s' }}
      ></div>
      <div
        className={`${sizeClasses[size]} bg-gradient-to-br from-green-500 to-green-600 rounded-full bounce-dot`}
        style={{ animationDelay: '-0.16s' }}
      ></div>
      <div
        className={`${sizeClasses[size]} bg-gradient-to-br from-green-500 to-green-600 rounded-full bounce-dot`}
        style={{ animationDelay: '0s' }}
      ></div>
    </div>
  );

  if (fullScreen) {
    return (
      <>
        <style>{style}</style>
        <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-95 z-50">
          {loaderContent}
        </div>
      </>
    );
  }

  return (
    <>
      <style>{style}</style>
      {loaderContent}
    </>
  );
};

export default Loader;