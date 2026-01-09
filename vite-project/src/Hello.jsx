function Hello(){

    let myName = "Kamlesh";
    let myFullName = () =>{
        return "Kamlesh Gupta";
    }

    return <div>
        <p>My Name is {myName}!</p>
        <p>My Full Name is {myFullName()}!</p>
    </div>
}

export default Hello;