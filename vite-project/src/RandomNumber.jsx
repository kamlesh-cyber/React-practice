

function RandomNumber(){
    let randomNumber = Math.round(Math.random() * 100);

    return <>
        <h3 className="text-primary" style={{"backgroundColor": "white", "color" : "yellow", "padding": "10px"}}>
            The random number is : <span className="text-success">{randomNumber}</span>
        </h3> 
    </>
}

export default RandomNumber;