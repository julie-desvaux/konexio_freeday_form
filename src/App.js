import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: 'is-invalid', password: 'is-invalid'},
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
  };

  handleSubmit(e) {
    alert('L\'email a été soumis : ' + this.state.mail);
    alert('Le mdp a été soumis : ' + this.state.password);
    e.preventDefault();
  }

  onChange(fieldName, value) {
    console.log(fieldName, ' == ', value)
    this.setState({ [fieldName]: value })
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
    case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? 'is-valid' : ' is-invalid';
        break;
    case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? 'is-valid' : ' is-invalid';
        break;
    default:
        break;
    }
    console.log('fieldValidationErrors.email ', fieldValidationErrors.email)
    console.log('fieldValidationErrors.password ', fieldValidationErrors.password)
  }

  render(){
    const { email, password } = this.state;
    console.log('this.state.email : ', email)
    return(
      <>
        <Container>
        <h1>Login</h1>
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    Email address
                  </Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email..." 
                    className={this.state.formErrors.email} 
                    onChange={(e) => this.onChange('email', e.target.value)}                     
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>
                    Password
                  </Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Enter password..." 
                    className={this.state.formErrors.password}
                    onChange={(e) => this.onChange('password', e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check 
                    type="checkbox" 
                    label="Remember me" 
                  />                
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>           
          </Row>          
        </Container>
      </>
    );
  }
}

export default App;
