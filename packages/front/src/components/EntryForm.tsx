import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
// import { gql, useMutation } from '@apollo/client';

export const EntryForm = () => {
  // const [mutate, result] = useMutation(gql`
  //   mutation AddEntry($entryData: EntryInput!) {
  //     addEntry(entryData: $entryData) {
  //       done
  //       toDo
  //       impediment
  //     }
  //   }
  // `);

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      done: '',
      toDo: '',
      impediment: '',
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit: async (values) => {
      // await mutate();
    },
  });

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Done</Form.Label>
        <Form.Control
          as="textarea"
          name="done"
          rows={3}
          onChange={handleChange}
          value={values.done}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>To do</Form.Label>
        <Form.Control
          as="textarea"
          name="toDo"
          rows={3}
          onChange={handleChange}
          value={values.toDo}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Impediment</Form.Label>
        <Form.Control
          as="textarea"
          name="impediment"
          rows={3}
          onChange={handleChange}
          value={values.impediment}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};
