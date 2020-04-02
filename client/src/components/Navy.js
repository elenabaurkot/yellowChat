import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import {getVendors } from "../utils/API"

function Navy(props) {
    const [queryValue, setValue] = useState('')
    const [userList, setUserList] = useState([])
    var userData;
    //get database 
   

   function handleGetVendors (){
        getVendors().then(({ data: userData }) => {
            console.log("userData: ", userData);
            setUserList(userData)
            console.log("userlist ",userList)
        }).catch(err => console.log(err))

       

    }

    useEffect(() => {
        handleGetVendors()

    }, [])
    
    

    let styles = {

        fontFamily: 'Titan One',
        color: 'yellow',

    };

    let searchDiv = {
        backgroundColor: 'lightyellow',
    };

    if (queryValue) {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/" style={styles}>yellowchat</Navbar.Brand>
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="/userlogin">Login</Nav.Link>
                        <Nav.Link href="/customerRegister">Register</Nav.Link> */}
                        <Nav.Link href="/vendorRegister">For Vendors</Nav.Link>
                        <Nav.Link href="#">Blog</Nav.Link>

                    </Nav>
                    <Form inline>
                        <input onChange={event => setValue(event.target.value)} class="form-control" type="text" placeholder="chat local shops" aria-label="Search"></input>
                        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                        {/* <Button variant="outline-info">Search</Button> */}
                    </Form>
                </Navbar>

                {userList.filter(name => name.company.toLowerCase().includes(queryValue)).map(filteredName => (

                    <div style={searchDiv}>
                        <tr>
                            <th scope="row"></th>
                            {/* <td><img src={filteredName.image} alt="profilepic"></img></td> */}
                            <td>{filteredName.company}</td>
                            {/* <td>{filteredName.phone},</td> */}
                            <a href={'/chat/' + filteredName.username}><td>@yellowchat</td></a>

                        </tr>
                    </div>


                ))}

            </div>
        )
    }
    //else if no query value render this ->
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/" style={styles}>yellowchat</Navbar.Brand>
                <Nav className="mr-auto">
                    {/* <Nav.Link href="/userlogin">Login</Nav.Link>
                    <Nav.Link href="/userregister">Register</Nav.Link> */}
                    <Nav.Link href="/vendor">For Vendors</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>

                </Nav>
                <Form inline>
                    <input onChange={event => setValue(event.target.value)} class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                    {/* <Button variant="outline-info">Search</Button> */}
                </Form>
            </Navbar>
        </div>
    )

}

export default Navy;