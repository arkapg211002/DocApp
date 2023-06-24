import React from "react";
import "../styles/Registerstyle.css"; // import the css file
import { Form, message } from "antd";
import axios from 'axios';
import {Link,useNavigate} from "react-router-dom";


const register = () => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const onFinishHandler = async (values) => {
        //console.log('Received values of form: ', values);
        try {
            const response = await axios.post('/api/v1/users/register', values);
            console.log(response);
            if (response.data.success) {
                message.success('Register successfully!');
                navigate('/login');
            } else {
                message.error(response.data.message);
            }
            
        } catch (error) {
            console.log(error);
            message.error('Internal server error');
        }
    };

  return (
    <>  
        <div className="form-container">
            <Form layout="vertical" onFinish={onFinishHandler} className='register-form'>
                <h1 className="text-center">Register page</h1>

                <Form.Item label="Username" name="username">
                    <input type="text" className="form-control" placeholder='Enter username'/>
                </Form.Item>

                <Form.Item label="Email" name="email">
                    <input type="email" className="form-control" placeholder='Enter email' />
                </Form.Item>

                <Form.Item label="Password" name="password">

                    <input type="password" className="form-control" placeholder='Enter password' />
                    
                    


                </Form.Item>

                <button className='btn btn-primary' type='submit'>
                    Register
                </button>
                
                <div className="text-center">
                    <p className="text"><b>Already have an account?</b>
                        <Link to='/login' className='ms-2 text nounderline'> Login</Link>

                    </p>
                </div>


            </Form>
        </div>
    </>
  )
}
export default register