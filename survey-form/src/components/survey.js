import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const SurveyForm = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    age: '',
  });

  const [answers, setAnswers] = useState({});

  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleOptionChange = (question, option) => {
    setAnswers({ ...answers, [question]: option });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Personal Information:', personalInfo);
    console.log('Survey Answers:', answers);
    // You can do further processing here, such as submitting the data to a server
  };

  return (
    <>
    <Form onSubmit={handleSubmit} className='container border border-5 border-dark mt-3 px-4 py-3'>
      <h1 className='text-center'>SURVEY FORM</h1>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={personalInfo.name}
          onChange={handlePersonalInfoChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="email"
          value={personalInfo.email}
          onChange={handlePersonalInfoChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter your age"
          name="age"
          value={personalInfo.age}
          onChange={handlePersonalInfoChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="question1" className='py-4'> 
        <Form.Label>Question 1: What is your favorite color?</Form.Label>
        {/* Radio button options for question 1 */}
        <Form.Check
          type="radio"
          label="Red"
          name="question1"
          onChange={() => handleOptionChange('question1', 'Red')}
        />
        <Form.Check
          type="radio"
          label="Blue"
          name="question1"
          onChange={() => handleOptionChange('question1', 'Blue')}
        />
        <Form.Check
          type="radio"
          label="Green"
          name="question1"
          onChange={() => handleOptionChange('question1', 'Green')}
        />
      </Form.Group>
      <Form.Group controlId="question2">
        <Form.Label>Question 2: What is your favorite animal?</Form.Label>
        <Form.Check
          type="radio"
          label="Dog"
          name="question2"
          onChange={() => handleOptionChange('question2', 'Dog')}
        />
        <Form.Check
          type="radio"
          label="Cat"
          name="question2"
          onChange={() => handleOptionChange('question2', 'Cat')}
        />
        <Form.Check
          type="radio"
          label="Bird"
          name="question2"
          onChange={() => handleOptionChange('question2', 'Bird')}
        />
      </Form.Group>
      {/* Other survey questions go here */}

      <Button varient="primary" type="submit" className='my-3'>
        Submit
      </Button>
    </Form>
    </>
  );
};

export default SurveyForm;
