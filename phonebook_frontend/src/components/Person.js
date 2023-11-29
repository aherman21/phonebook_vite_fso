const Person = (props) => {
    return (
    <div>
        <p>
        {props.name} {props.number}
        <button onClick={() => props.onRemove(props.id, props.name)}>Delete</button>
        </p>
        
    </div>
    );
  }

export default Person