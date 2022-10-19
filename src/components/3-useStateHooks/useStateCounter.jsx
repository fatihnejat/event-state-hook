import { useState } from "react";

const useStateCounter = () => {
    const [count,setCount ]= useState(0)

    const [person, setPerson]= useState ( {
        name:"John",
        surname: "ADAMS",
        age: 43,
    })

    const inc = ()=>{
        setCount(count +1);

    }
    const dec =() =>{
        setCount(count-1);
    }
    const clear =() => {
        setCount(0)
    }
    const change = ()=>{
        setPerson ( {...person, age: person.age +1 } )
    }
    

    



  return (
    <div className="container text-center mt-4">
      <h1>HOOK </h1>
      <h2 className="display-6 text-danger">Count:{count} </h2>
      <button onClick={inc} className="btn btn-danger m-2">Inc.</button>
      <button onClick={clear} className="btn btn-success">Clear</button>
      <button onClick={dec} className="btn btn-dark m-2">Dec.</button>

      <section>
        <h1>UseState Object</h1>
        <p>Person name:{person.name} </p>
        <p>Person Surname:{person.surname} </p>
        <p>Person Age:{person.age} </p>
        <button onClick={change} className="btn btn-danger">Inc age</button>
      </section>




    </div>


  );
};

export default useStateCounter;
