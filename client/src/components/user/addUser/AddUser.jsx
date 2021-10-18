import { Link , useHistory } from "react-router-dom";
import {addUser} from "../../../service/api"
import {useState} from "react";

const initialValue={
    name:" ",
    username:" ",
    email:" ",
    phone:" "
}

const AddUser = () => {

    const [user, setuser] = useState(initialValue);

    const {name,username,email,phone} = user;

    const history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setuser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const addUserDetails = async () => {
        await addUser(user);
        history.push('/')
    }

    return (
        <div className="container mt-4" style={{width:50+"vw"}}>
            <h1>Add User</h1>
            <div className="row">
                <form className="bg-dark text-light mt-2 pt-4 pb-4  ">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input 
                            onChange={(e) => onValueChange(e)}
                            type="text" 
                            class="form-control" 
                            name="name" 
                            value={name} 
                            placeholder="Enter Your Name"  
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Uername</label>
                        <input 
                            onChange={(e) => onValueChange(e)}
                            type="text" 
                            class="form-control" 
                            name="username" 
                            value={username}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input 
                            onChange={(e) => onValueChange(e)}
                            type="email" 
                            class="form-control" 
                            name="email" 
                            value={email}
                            
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                        <input 
                            onChange={(e) => onValueChange(e)}
                            type="text" 
                            class="form-control" 
                            name="phone" 
                            value={phone} 
                            
                        />   
                    </div>
                    
                    <Link className="btn btn-primary" onClick={() => addUserDetails()} to='/' >Add</Link>
                </form>
            </div>   
        </div> 
    );
};

export default AddUser;