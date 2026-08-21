const InputDisplay = ({ value, setValue }) => {
    return(
        <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Here" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );

}

export default InputDisplay;