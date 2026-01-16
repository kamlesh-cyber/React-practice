export default function InputBox({onEnterHandler}){
    return(
        <input onKeyDown={onEnterHandler}  type="text" className='form-control my-4' placeholder='Search or add new healthy food!' />
    )
}