import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [ value, setValue ] = useState(0);
  const [ visible, setVisible ] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setValue(null), 2500);
  // }, []);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue(v => v+1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        {/*<HookCounter value={value} />*/}
        <Notification />
      </div>
    );
  } else {
    return (
      <button onClick={() => setVisible(true)}>show</button>
    );
  }
};

const HookCounter = ({value}) => {

  useEffect(() => {
    console.log('mount');

    return () => console.log('unmount');
  }, []);

  useEffect(() => {
    console.log('update');
  });

  // useEffect(() => () => console.log('unmount'), []);

  return <p>{value}</p>;
};

const Notification = () => {

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {visible ? <p>Hello</p> : null}
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);