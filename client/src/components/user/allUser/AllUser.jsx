import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { getUser , deleteUser } from '../../../service/api';

const AllUser = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
       getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const response = await getUser();  
        setUsers(response.data);
    }

    const deleteUserDetails = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <div className="container mt-4" style={{width:60+"vw" }}>
            <h1>All Users</h1>
            <table className="table border shadow mt-4 ">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                    {
                        users.map((user,index) =>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td> 
                                    <Link className="btn btn-primary" to={`/edit/${user._id}`} style={{marginRight:1 + "em"}}>Edit</Link> 
                                    <Link className="btn btn-danger" onClick={() => deleteUserDetails(user._id)} to="/">Delete</Link> 
                                </td>   
                            </tr>
                        )
                    }
                </tbody>
                </table>
        </div> 
    );
};

export default AllUser;