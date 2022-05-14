import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firabase.init';

const AddUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [error1, setError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleEmail = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log((e.target.value))
    }
    const handleAdduser = (e) => {
        e.preventDefault();
        if (!email) {
            setError('Please Enter a Email!!!!!');
            return;
        }
        else if (!password) {
            setError('Please Enter a password!!!!!!');
            return;
        }
        else if (password.length < 6) {
            setError('Password at Least 6 Character!!!!!!');
            return;
        }
        // else if (password !== confirmPassword) {
        //     setError('Password Does not match!');
        //     return;
        // }
        else {
            setError('');
            createUserWithEmailAndPassword(email, password);
            const name = e.target.name.value;
            // const email = e.target.email.value;
            // const password = e.target.password.value;
            // console.log(name, email, password);
            const user = { name, email, password };
            // send data to the server 
            fetch('https://thawing-earth-85807.herokuapp.com/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    e.target.reset();
                    toast('success', data)
                })
        }

    }



    return (
        <div>
            <form onSubmit={handleAdduser} className='container w-50 mt-5'>
                {/* <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" name='name' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div> */}
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onBlur={handleEmail} type="email" class="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onBlur={handlePassword} type="password" class="form-control" id="exampleInputPassword1" name='password' placeholder="Password" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddUser;