import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

console.log('API URL:', process.env.REACT_APP_API_URL);
console.log("this is from the create-project-js file");

const FormContainer = styled.div`
  max-width: 800px;
  margin: 120px auto 40px;
  padding: 40px;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #FF3232;
  margin-bottom: 30px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #FF3232;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #FF3232;
  }
`;

const SubmitButton = styled.button`
  background-color: #FF3232;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #CC0000;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const CreateProject = () => {
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    postedBy: '',
    jobTitle: '',
    projectSummary: '',
    roleDetails: '',
    compensation: '',
    projectTimeline: '',
    roleTimeline: '',
    qualifications: '',
    additionalInfo: '',
    image: 'https://via.placeholder.com/300x200' // Default image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Attempting to create project...');
      
      const response = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/projects`,
        data: formData,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        withCredentials: false
      });
      
      console.log('Response:', response);
      
      if (response.status === 201) {
        alert('Project created successfully!');
        history.push('/generic-poster-profile');
      }
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <Title>Create New Research Project</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Project Title</Label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Posted By</Label>
          <Input
            type="text"
            name="postedBy"
            value={formData.postedBy}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Job Title</Label>
          <Input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Project Summary</Label>
          <TextArea
            name="projectSummary"
            value={formData.projectSummary}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Role Details</Label>
          <TextArea
            name="roleDetails"
            value={formData.roleDetails}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Compensation Details</Label>
          <Input
            type="text"
            name="compensation"
            value={formData.compensation}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Project Timeline</Label>
          <Input
            type="text"
            name="projectTimeline"
            value={formData.projectTimeline}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Role Timeline</Label>
          <Input
            type="text"
            name="roleTimeline"
            value={formData.roleTimeline}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Qualifications (one per line)</Label>
          <TextArea
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            placeholder="- Qualification 1&#10;- Qualification 2&#10;- Qualification 3"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Additional Information</Label>
          <TextArea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          />
        </FormGroup>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating Project...' : 'Create Project'}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default CreateProject;