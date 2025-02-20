import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    let users = JSON.parse(localStorage.getItem("users"));
    let [currentUser,setCurrentUser] = useState(users[0]?.username||"");
    const handleLogout = () => {
       localStorage.clear("users");
         setCurrentUser("");
    }
    return (
        <nav className="[background:linear-gradient(45deg,rgb(70,2,88,1)_0%,rgba(21,9,53,1)_100%)] text-white p-4">
            <div className="container mx-auto flex justify-between">
                <div className="font-bold">Welcome! {currentUser}</div>
                <div className="space-x-4">
                    <Link to="/home">Home</Link>
                    <Link to="/quiz">Quiz</Link>
                    <Link to="/history">History</Link>
                    <Link to="/" onClick={handleLogout}>Logout</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
