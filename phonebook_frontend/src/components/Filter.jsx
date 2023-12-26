const Filter = (props) => {
    return (
        <div>
            filter: <input
            value={props.filterText}
            onChange={props.handleFilterChange} />
        </div>
    )
}

export default Filter