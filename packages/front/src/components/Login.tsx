import * as React from 'react';
import { useState } from 'react';

import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { login } from '../api/auth';
import { useSearchParam } from 'react-use';

const Login = () => {
  const [name, setName] = useState('');
  const history = useHistory();
  const statusParam = useSearchParam('status');

  return (
    <Container className="h-100">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/login" active>
          Login
        </Breadcrumb.Item>
      </Breadcrumb>
      {statusParam === '403' && (
        <Alert variant="danger">Server respond with status 403</Alert>
      )}
      <Row className="d-flex align-items-center h-100">
        <Col
          xs={{
            span: '4',
            offset: '4',
          }}
        >
          <h1 className="text-center">Welcome aboard</h1>
          <Form.Group>
            <Form.Label>Enter your name</Form.Label>
            <Row>
              <Col xs={8}>
                <Form.Control
                  placeholder="Name"
                  value={name}
                  onChange={({ target }) => {
                    setName(target.value);
                  }}
                />
              </Col>
              <Col xs={4}>
                <Button
                  variant="primary"
                  type="submit"
                  block
                  onClick={async () => {
                    const user = await login(name);
                    if (user) {
                      history.push('/');
                    }
                  }}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
