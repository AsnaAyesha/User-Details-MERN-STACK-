import { Link , useHistory ,useParams } from "react-router-dom";
import {editUser, getUser} from "../../../service/api"
import {useState,useEffect} from "react";

const initialValue={
    name:" ",
    username:" ",
    email:" ",
    phone:" "
}

const EditUser = () => {

    const [user, setuser] = useState(initialValue);

    const {name,username,email,phone} = user;

    const history = useHistory();

    const {id} = useParams();

    useEffect(() => {
        loadUserDetails();
    }, [])

    const loadUserDetails = async () => {
       const response = await getUser(id);
       setuser(response.data);
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setuser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const editUserDetails = async () => {
        await editUser(id,user);
        history.push('/')
    }
    return (
        <div className="container mt-4" style={{width:50+"vw"}}>
            <h1>Edit User</h1>
            <div className="row">
                <form className="bg-dark text-light mt-2 pt-4 pb-4 ">
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
                    
                    <Link className="btn btn-warning" onClick={() => editUserDetails()}  >Edit</Link>
                </form>
            </div>   
        </div> 
    )
}

export default EditUser;