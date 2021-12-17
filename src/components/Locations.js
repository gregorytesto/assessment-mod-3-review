import { Component, useState, useEffect  } from "react";

const Locations=()=>{
    const [ locations, setLocations ] = useState([]);
    const [ show, setShow ] = useState(false);

    useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/locations")
            .then(res=>res.json())
            .then(data=>{
                setLocations(data);
            })
    }, []);

    const handleToggleLocations=()=>{
        setShow(!show);
    }

    let locationsElArr = locations.map((location)=>{
        return <li>{location.name}</li>
    })

    return(
        <div className="locations">
            <h1>List of Locations</h1>
            <button onClick={handleToggleLocations}>{show ? "Hide": "Show"} Locations</button>
            { show &&
                <ul>
                    { locationsElArr }
                </ul>
            }
        </div>
    )
}

// class Locations extends Component{
//     constructor(){
//         super();
//         this.state = {
//             locations: [],
//             show: false
//         }
//     }

//     componentDidMount(){
//         fetch("https://ghibliapi.herokuapp.com/locations")
//             .then(res=>res.json())
//             .then(data=>{
//                 this.setState({
//                     locations: data
//                 })
//             })
//     }

//     handleToggleLocations=()=>{
//         this.setState({
//             show: !this.state.show
//         })
//     }

//     render(){
//         let locationsElArr = this.state.locations.map((location)=>{
//             return <li>{location.name}</li>
//         })

//         return(
//             <div className="locations">
//                 <h1>List of Locations</h1>
//                 <button onClick={this.handleToggleLocations}>{this.state.show ? "Hide": "Show"} Locations</button>
//                 { this.state.show &&
//                     <ul>
//                         { locationsElArr }
//                     </ul>
//                 }
//             </div>
//         )
//     }
// }

export default Locations;