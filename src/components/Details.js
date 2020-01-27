import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Details extends Component {
  render() {
    return (
      <Card className="text-center">
        <Card.Header> Details</Card.Header>
        <Card.Body>
          <Card.Title> {this.props.name + " " + this.props.last}</Card.Title>
          <Card.Text>{this.props.addr}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
