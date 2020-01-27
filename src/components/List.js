import React, { Component } from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";
import users from "../helpers/fake-data/User";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      addresse: ""
    };
  }

  changeState = (name, last, addr) => {
    this.setState({
      firstName: name,
      lastName: last,
      addresse: addr
    });
  };
  render() {
    return (
      <div>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={3}> </Col>
            <Col sm={6}>
              <ListGroup>
                {users.map((user, i) => {
                  return (
                    <ListGroup.Item
                      key={i}
                      onClick={() => {
                        this.changeState(
                          user.firstName,
                          user.lastName,
                          user.addresse
                        );
                      }}
                      action
                      href={"#link" + i}
                    >
                      {user.firstName + " " + user.lastName}
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Col>
            <Col sm={2}> </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
