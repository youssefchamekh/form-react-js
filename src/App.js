import './App.css';
import {Button,Form,FormGroup,Label,Input}
from 'reactstrap';
function App() {
  return (
    <Form className="login-form">
      <h1 className='text-center'>Form React</h1>
<FormGroup>
  <Label>Email</Label>
  <Input type='email' placeholder='Email'></Input>
  <Label>Password</Label>
  <Input bsSize=""type="password" placeholder='Password'/>
  <FormGroup check>
        <Input
          id="exampleCheckbox"
          name="checkbox"
          type="checkbox"
        />
        <Label
          check
          for="exampleCheckbox"
        >
          Remember Me
        </Label>
      </FormGroup>
</FormGroup>
<div class="d-grid gap-2">
<Button className='btn-lg btn-dark btn-block'>Log in</Button>
</div>
    </Form>
  );
}

export default App;
