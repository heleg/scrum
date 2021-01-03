import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import { gql, useQuery } from '@apollo/client';
import { EntryForm } from './EntryForm';

const Index = () => {
  // const { loading, error, data } = useQuery(gql`
  //   query FetchUsers {
  //     users {
  //       name
  //     }
  //   }
  // `);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome home</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <EntryForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
