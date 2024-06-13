import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserInfo } from '../services/slices/form';

const Step1 = () => {
    const [userInfo, setUserInfoState] = useState({ name: '', email: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfoState({ ...userInfo, [name]: value });
    };

    const handleNext = () => {
        if (userInfo === null || userInfo.name === '' || userInfo.email === '') {
            return alert('Please fill all the fields');
        } else {
            dispatch(setUserInfo(userInfo));
            navigate('/step2');
        }

    };

    return (
        <div style={{ width: "30%", margin: "auto" }}>
            <h2>User Information</h2>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={userInfo.name}
                    onChange={handleChange}
                    style={{
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        width: "100%"
                    }}
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userInfo.email}
                    onChange={handleChange}
                    style={{
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        width: "100%"
                    }}
                />
            </div>

            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Step1;

