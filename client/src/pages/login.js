import React from 'react';
import "../styles/Loginstyle.css"; // import the css file
import { Form } from 'antd';
import {Link} from 'react-router-dom';
const login = () => {
    
    const onFinishHandler = (values) => {
        console.log('Received values of form: ', values);
    };

  return (
    <>  
        <div className="form-container">
            <Form layout="vertical" onFinish={onFinishHandler} className='register-form'>
                <h1 className="text-center">Login page</h1>

                

                <Form.Item label="Email" name="email">
                    <input type="email" className="form-control" placeholder='Enter email' />
                </Form.Item>

                <Form.Item label="Password" name="password">

                    <input type="password" className="form-control" placeholder='Enter password' />
                    
                    


                </Form.Item>

                <button className='btn btn-primary' type='submit'>
                    Login
                </button>
                
                <div className="text-center">
                    <p className="text"><b>Don't have an account?</b>
                        <Link to='/register' className='ms-2 text nounderline'> Register</Link>

                    </p>
                </div>


            </Form>
        </div>
    </>
  )
}
export default login