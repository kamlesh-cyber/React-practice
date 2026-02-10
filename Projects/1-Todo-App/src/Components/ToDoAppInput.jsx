const ToDoAppInput = () =>{
    
    return(
        <div className="row g-2 mt-3">
            <div className="col-5"><input type="text" className='form-control' placeholder='Enter todo Here' /></div>
            <div className="col-5"><input type="date" className='form-control' placeholder='dd/mm/yyy' /></div>
            <div className="col-2"><button className='btn btn-success'>Save</button></div>
        </div>
    );
}

export default ToDoAppInput;