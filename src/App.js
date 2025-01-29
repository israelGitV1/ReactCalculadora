import { Container,Content,Row,Column } from "./styles";
import Button from "./Components/Button";
import Input from "./Components/Input";
import { useState } from "react";


const App = () =>  {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [currentFirstNumber , setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [currentconsole, setConsole] = useState('');


  const handleAddNumber = (num) => {
    setCurrentNumber(prev =>`${prev === '0' ? '' : prev}${num}`)
  };
  const handleClean = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };
  const handleOperNumbers = (oper) => {
    setOperation(oper);
    setConsole(`${currentNumber} ${oper} ${currentFirstNumber}`);
    if(currentFirstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
    }/*else {
      const sum = Number(firstNumber) + oper + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }*/
  };

  const handleCalcNumbers = () => {
    let sum = 0;
    switch (operation){
      case '+': sum = Number(currentFirstNumber) + Number(currentNumber)
      break;
      case '-': sum = Number(currentFirstNumber) - Number(currentNumber);
      break;
      case '*': sum = Number(currentFirstNumber) * Number(currentNumber);
      break;
      case '/': sum = Number(currentFirstNumber) / Number(currentNumber);
      break;
    default:  
      break;
    }
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setConsole(`${currentNumber} ${operation} ${currentFirstNumber}`);
      setOperation('');
  }
 
  return (
    <Container className="App">
      <Content>
        <Column>
          <Input value={currentconsole}/>
          <Input value={currentNumber}/>
        </Column>
        <Row>
          <Button label="*" onClick={() =>handleOperNumbers('*')}/>
          <Button label="/" onClick={() =>handleOperNumbers('/')}/>
          <Button label="C" onClick={() => handleClean ()}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber ('7')}/>
          <Button label="8" onClick={() => handleAddNumber ('8')}/>
          <Button label="9" onClick={() => handleAddNumber ('9')}/>
          <Button label="-" onClick={() =>handleOperNumbers('-')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber ('4')}/>
          <Button label="5" onClick={() => handleAddNumber ('5')}/>
          <Button label="6" onClick={() => handleAddNumber ('6')}/>
          <Button label="+" onClick= {() =>handleOperNumbers('+') }/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber ('1')}/>
          <Button label="2" onClick={() => handleAddNumber ('2')}/>
          <Button label="3" onClick={() => handleAddNumber ('3')}/>
          <Button label="=" onClick={handleCalcNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber ('0')}/>
          <Button label="." onClick={() => handleAddNumber ('.')}/>
          <Button label="Enter" />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
