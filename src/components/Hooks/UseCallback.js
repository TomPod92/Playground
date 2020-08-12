import React, { useState, useCallback, useMemo } from 'react';

import Title from './Title';
import Count from './Count';
import Button from './Button';

export const UseCallback = () => {
  const [age, setAge] = useState(22);
  const [salary, setSalary] = useState(50000);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementAge = useCallback(() => {
    setAge(prevState => prevState + 1)
  }, [setAge]);

  const incrementSalary = useCallback(() => {
    setSalary(prevState => prevState + 1)
  }, [setSalary])

  const incrementCounter = () => {
    setCounter(prevState => prevState + 1)
  }

  const incrementCounter2 = () => {
    setCounter2(prevState => prevState + 1)
  }

  const isEven = useMemo(() => {
    let i = 0;
    while(i < 2000000000) i++

    return counter % 2 === 0
  }, [counter])

  return (
    <div className="centered">

      <Title />

      <Count text="Age" count={age}/>
      <Button handleClick={incrementAge}>Increment Age</Button>

      <Count text="Salary" count={salary}/>
      <Button handleClick={incrementSalary}>Increment Salary</Button>

      <div>Counter: {counter} - {isEven ? "Even" : "Odd"}</div>
      <button onClick={incrementCounter}>Increment Counter</button>

      <div>Counter2: {counter2}</div>
      <button onClick={incrementCounter2}>Increment Counter 2</button>

    </div>
  )
}