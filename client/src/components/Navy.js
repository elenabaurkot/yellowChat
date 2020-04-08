import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap'
import {getVendors } from "../utils/API"
import { logoutUser } from "../actions/authActions";

function Navy(props) {
    const [queryValue, setValue] = useState('')
    const [userList, setUserList] = useState([])
   
   

   function handleGetVendors (){
    const token = localStorage.getItem("token");
        getVendors(token).then(({ data: userData }) => {
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
        textTransform: 'capitalize'

    };

    let searchDiv = {
        backgroundColor: 'lightyellow',
    };

    if (queryValue) {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#" style={styles}>YELLOWchat</Navbar.Brand>
                    <Nav className="mr-auto">
                 
                        <Nav.Link href="#">click the @yellowchat link and chat with a shop now!</Nav.Link>
                     
                    </Nav>
                    <Form inline>
                        <input onChange={event => setValue(event.target.value)} class="form-control" type="text" placeholder="chat local shops" aria-label="Search"></input>
               
                    </Form>
                </Navbar>

                {userList.filter(name => name.company.includes(queryValue)).map(filteredName => (

                    <div style={searchDiv}>
                        <tr>
                            <th scope="row"></th>
                          
                            <td>{filteredName.company}</td>
                          
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
                <Navbar.Brand href="/" style={styles}>YELLOWchat</Navbar.Brand>
                <Nav className="mr-auto">
                    {/* <Nav.Link href="/userlogin">Login</Nav.Link>
                    <Nav.Link href="/userregister">Register</Nav.Link> */}
                    {/* <Nav.Link href="/vendor">For Vendors</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link> */}

                </Nav>
                <Form inline>
                    <input onChange={event => setValue(event.target.value)} class="form-control" type="text" placeholder="chat with local shops" aria-label="Search"></input>
                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                    {/* <Button variant="outline-info">Search</Button> */}
                </Form>
                <Nav.Link style={{color: "rgba(255,255,255,0.5)", fontSize: "24px"}} href="#">Logout</Nav.Link>
            </Navbar>
        </div>
    )

}

export default Navy;
// export default connect({ logoutUser}) (Navy);
// export default connect(mapStateProps, {logoutUser}) (Navy);