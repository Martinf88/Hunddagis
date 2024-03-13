
import { useEffect, useState } from 'react';
import './App.css'
import AllDogs from './Components/AllDogs';

function App() {
	const [allDogs, setAllDogs] = useState([]);
	const [presentDogs, setPresentDogs] = useState([]);
	const [showAllDogs, setShowAllDogs] = useState(true);

	// hämta BARA från API:et när App.jsx först renderas med hjälp av useEffect
	useEffect(() => {
		const fetchDogs = async () => {
			// få in alla hundar från API:et
			const response = await fetch ('https://majazocom.github.io/Data/dogs.json');
			const data = await response.json();
			setAllDogs(await data);
		}
		fetchDogs();
	}, []);

	// funktion som hanterar när vi ändrar värde på vår select
	function handleFilter(value) {
		if (value === 'Present dogs') {
			// filtrera ut de hundar som är närvarande från vårt allDogs-state
			let unfilteredDogs = [...allDogs]
			let filteredDogs = unfilteredDogs.filter((dog) => dog.present === true)
			setPresentDogs(filteredDogs);
			setShowAllDogs(false);
		} else {
			setShowAllDogs(true);
		}
	}

  return (
    <>
		<h1>DOGGY DAYCARE</h1>
		<select onChange={((e) => handleFilter(e.target.value))}>
			<option>All dogs</option>
			<option>Present dogs</option>
		</select>
		{showAllDogs ? <AllDogs dogs={allDogs} /> : <AllDogs dogs={presentDogs}/>}
		
    </>
  )
}

export default App
