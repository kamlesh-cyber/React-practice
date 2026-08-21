import Buttons from "./Buttons"

const ButtonContainer = ({ buttonsArr, clickBtnFunction}) =>{

    return (<div id="button-container" className="d-flex flex-wrap justify-content-center mt-2">
        {buttonsArr.map((item) => (<Buttons key={item} buttonName={item} handleClick={clickBtnFunction}></Buttons>))}
    </div>);
}

export default ButtonContainer;