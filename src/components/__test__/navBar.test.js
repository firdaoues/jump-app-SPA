import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../NavbarComponet';

it("Navbar renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NavBar></NavBar>, div)
})