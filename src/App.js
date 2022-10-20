import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <center>
    <div className='cnt'>
      <h6>My Form</h6>
    <Form className='d-flex justify-content-center'>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Enter your</Form.Label>
        <Form.Control type="text" placeholder="First name" />
        <Form.Control type="text" placeholder="Last name" />
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3 m-1" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Button variant="primary">Envoyer</Button>
    </div>
    </center>
  );
}


export default App;
