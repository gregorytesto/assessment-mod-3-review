import { useEffect, useState } from 'react';

const People=()=>{
    const [ people, setPeople ] = useState([]);
    const [ personInput, setPersonInput ] = useState("");
    const [ searchResult, setSearchResult ] = useState(null);

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
        let result = people.find(person=>{
            return person.name.toLowerCase() ===  personInput.toLowerCase();
        })
        setSearchResult(result);
    }

    // let resultToRender;
    // if(searchResult){
    //     resultToRender = (
    //         <div>
    //             <h3>Name: { searchResult.name }</h3>
    //             <h3>Age: { searchResult.age }</h3>
    //             <h3>Gender: { searchResult.gender }</h3>
    //         </div>
    //     )
    // } else if (searchResult === undefined) {
    //     resultToRender = <h3>Not Found</h3>
    // }

    return(
        <div className="people">
            <div>Search for a Person</div>
            <input 
                placeholder="Find Your Person"
                type="text"
                value={ personInput }
                onChange={ handlePersonInput }
            />
            <button onClick={ handleSubmit }>Submit</button>

            {/* { resultToRender } */}
            { searchResult &&
                <div>
                    <h3>Name: { searchResult.name }</h3>
                    <h3>Age: { searchResult.age }</h3>
                    <h3>Gender: { searchResult.gender }</h3>
                </div>
            }
            { searchResult === undefined &&
                <h3>Not Found</h3>
            }

        </div>
    )
}

export default People;