import React, { useContext } from "react";
import { localbox } from "./LocalContainer";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const LocalBoxList = () => {
  const { list, updateData, deleteData } = useContext(localbox);

  return (
    <>
      <Container className="border p-5 rounded-5 mt-4">
        <h2 className="text-center mb-3">Expenses Data</h2>

        <Table striped bordered hover responsive>
          <thead>
            <tr className="text-center">
              <th>Title</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Category</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>

          <tbody>
            {list.length > 0 ? (
              list.map((l) => (
                <tr key={l.id}>
                  <td>{l.title}</td>
                  <td>{l.amount}</td>
                  <td>{l.type}</td>
                  <td>{l.category}</td>
                  <td className="text-center">
                    <Button
                      variant="warning"
                      onClick={() => updateData(l.id)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td className="text-center">
                    <Button
                      variant="danger"
                      onClick={() => deleteData(l.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default LocalBoxList;
