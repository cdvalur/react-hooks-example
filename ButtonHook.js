import React, { useState } from 'react';

function ButtonHook() {
  const [count, setCount] =  useState(0);
  return (
    <div>
    <p> you clicked { count } times</p>
    <button onClick={()=>setCount(count+1)} disabled={count===10}>increase me!!</button>
    <button onClick={()=>setCount(count-1)} disabled={count===0}>decrease me!!</button>
    </div>
  );
}
export default ButtonHook;