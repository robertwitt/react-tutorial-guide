import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = props => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // HTTP request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleButtonRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = [];
  if (props.personLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  let buttonClass = '';
  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={buttonClass} onClick={props.clicked} ref={toggleButtonRef}>Toggle Persons</button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
