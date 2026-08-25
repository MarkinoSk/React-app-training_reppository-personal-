
function Student(props){
    return(
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
export default Student