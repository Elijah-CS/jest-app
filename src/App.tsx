import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [performValidation, setPerformValidation] = useState(false);

  const [value, setValue] = useState<string>("Otto")
  const [invalid, setInvalid] = useState<boolean>(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();

    setPerformValidation(true);
  };

  function isInvalid(val: string) {
    if (performValidation) {
      console.log(val)
      return val.length < 5
    }
    
    return false
  }

  useEffect(() => {
    console.log("hello")
    if (performValidation) {
      setInvalid(isInvalid(value))
    }
  }, [performValidation, value, setInvalid, isInvalid])

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row className="mb-3">

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last name"
            value={value}
            isInvalid={invalid}
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
          <Form.Control.Feedback type='invalid'>
            Mistakes have been made
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default App;