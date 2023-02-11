// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

const InteractiveComponent = () => {
  const [text, setText] = React.useState('Hello, World!');
  const [scenario, setScenario] = React.useState(0);

  return (
    <div>
      <p>{text}</p>
      <button onClick={function () {
        setScenario(!scenario);
        return !scenario
          ? setText('Hello, Island of Interactivity!')
          : setText('Hello, World!');
      }}>
        Change Text
      </button>
    </div>
  );
};

ReactDOM.render(<InteractiveComponent />, document.getElementById('root'));
