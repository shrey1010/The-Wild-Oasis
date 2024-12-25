 import styled  from "styled-components"

 const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
 `

 const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2 1.6rem;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0069d9;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  font-weight: 500;
 `

 const Input = styled.input`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  border: none;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease; 
  &:focus {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
 `

function App() {

  return (
    <div>
      <H1>The Wild Oasis </H1>
      <Button onClick={() => alert("Check in")}>Check in</Button>
      <Button onClick={() => alert("Check out")}>Check in</Button>
      <Input type="number" placeholder="Number of guests" />
    </div>
  );
}

export default App
