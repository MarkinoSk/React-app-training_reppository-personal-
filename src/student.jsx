import PropTypes from 'prop-types'
function Student(props){
    return(
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// toto dole je dobre na debbuging ak by v inpute alebo v jednotkach bola chyba ako napr namiesto cisla by bol string tak v console vypise chybu(jednotky musim zmenit v App.jsx)

Student.proptypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
} 

export default Student