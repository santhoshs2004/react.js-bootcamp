import React , { useState }from 'react';

const PasswordChecker = () => {
    const [password, setPassword] = React.useState('');
    const getStrength = () => {
        if (password.length < 6) {
            return 'Weak';
        } else if (password.length < 10) {
            return 'Medium';
        } else {
            return 'Strong';
        }
    }

  return (
    <>
    <div>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
        <button onClick={getStrength}>Check Password</button>
    </div>
    <p> Strength: {getStrength()}</p>
      
    </>
  );
}

export default PasswordChecker;
