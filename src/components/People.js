import { useEffect, useState } from 'react';

const People=()=>{
    const [ people, setPeople ] = useState([]);
    const [ personInput, setPersonInput ] = useState("");

    useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/people")
            .then((res)=>res.json())
            .then((data)=>{
                setPeople(data);
            })
    }, []);

    const handlePersonInput=(e)=>{
        setPersonInput(e.target.value);
    }

    const handleSubmit=()=>{
        console.log("People: ", people);
        console.log("Input: ", personInput);
    }

    return(
        <div>
            <div>People Page</div>
            <input 
                placeholder="Find Your Person"
                type="text"
                value={ personInput }
                onChange={ handlePersonInput }
            />
            <button onClick={ handleSubmit }>Submit</button>
            
        </div>
    )
}

export default People;