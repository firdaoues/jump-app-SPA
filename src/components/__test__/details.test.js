import React from 'react';
import ReactDOM from 'react-dom';
import Details from '../Details';

it("Details renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Details></Details>, div)
})