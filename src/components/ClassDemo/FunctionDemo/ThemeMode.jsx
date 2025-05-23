import React ,{ useState } from 'react';

const ThemeMode = () => {
    const [darkMode,setDarkMode]=useState(false);

  return (
    <>
    
      <div style={{
        backgroundColor:darkMode?'#333':'#f2f2f2',
        color:darkMode?'#f2f2f2':'#333',
        padding:'20px',
        borderRadius:'5px',
    }}>
        <h1>Theme Mode</h1>
        <p>This is a demo for theme mode</p>
        <h2> {darkMode?"Dark":"Light"}</h2>
        <button onClick={()=>setDarkMode(!darkMode)}>Toggle Theme</button>
        <p>This is a toggle example</p>
      </div>
    </>
  );
}

export default ThemeMode;
