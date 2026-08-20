
const Buttons = ({buttonName}) =>{
    return <button className="btn btn-secondary p-0 m-1" style={{width: '45px', height: '45px'}} key={buttonName}>{buttonName}</button>
}

export default Buttons;