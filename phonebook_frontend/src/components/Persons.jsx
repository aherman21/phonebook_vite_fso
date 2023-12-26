import Person from "./Person"

const Persons = (props) => {
    return (
        <div>
            {props.filteredPersons.map(person =>
            <Person 
            key={person.name} 
            name={person.name} 
            number={person.number}
            id={person.id}
            onRemove={props.onRemove}
            ></Person>)}
        </div>
    )
}

export default Persons