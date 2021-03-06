import React from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import styled from 'styled-components';

const People = ({ people }) => {
  // function that takes in people via props and displays them in a Card
  const showPeople = () => {
    return people.map(person => (
      <Col sm={4} key={person.id} data-testid="personid">
        <StyledCard>
          <Card.Body>
            <StyledTitle data-testid="person-name">
              {person.display_name}
            </StyledTitle>
            <Card.Text data-testid="person-title">
              <strong>title:</strong> {person.title}
            </Card.Text>
            <Card.Text data-testid="person-email">
              <strong>email: </strong>
              {person.email_address}
            </Card.Text>
          </Card.Body>
        </StyledCard>
      </Col>
    ));
  };

  return (
    <Container>
      <Row>
        <CardGroup>{showPeople()}</CardGroup>
      </Row>
    </Container>
  );
};

export default People;

const StyledCard = styled(Card)`
  width: '22rem';
  margin-top: 20px;
  &:hover {
    background: #e2efff;
    transition: ease-in-out 0.5s;
  }
  transition: ease-in-out 0.5s;
`;

const StyledTitle = styled(Card.Title)`
  color: #057aff;
`;
