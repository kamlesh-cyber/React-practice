import Buttons from "./Buttons"

const ButtonContainer = () =>{

    let buttonsArr = ['C', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', '/'];

    

    return (<div id="button-container" className="d-flex flex-wrap justify-content-center mt-2">
        {buttonsArr.map((item) => (<Buttons buttonName={item}></Buttons>))}
    </div>);
}

export default ButtonContainer;