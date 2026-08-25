import Student from './student.jsx'

function App() {
  return(
    <>
      <Student name="Spongebob" age={12} isStudent={true}/>
      <Student name="Patrick" age={15} isStudent={false}/>
    </>
  );
}

export default App
