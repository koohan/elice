import React, { useState } from 'react';
import usePostRequest from '../../hook/usePostRequest.jsx';
import RegisterBtn from './RegisterBtn';
import RegisterInput from './RegisterInput';
import { useNavigate } from 'react-router-dom';
import Notification from '../notification/Notification.jsx';
import API_PATHS from '../../utils/apiPaths';
import { validateForm } from '../../utils/validation';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const RegisterBox = () => {
    const navigate = useNavigate();
    const [notification, setNotification] = useState("");
    const { loading, postData } = usePostRequest(API_PATHS.REGISTER);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setNotification("Passwords do not match.");
            await delay(1500);
            setNotification("");
            return;
        }

        const validationError = validateForm(formData);
        if (validationError) {
            setNotification(validationError);
            await delay(1500);
            setNotification("");
            return;
        }

        const { name, email, password, phoneNumber } = formData;
        try {
            await postData({ name, email, password, phoneNumber });
            setNotification("회원가입이 완료되었습니다!");
            await delay(1500);
            setNotification("");
            navigate("/login");
        } catch (e) {
            console.error('Registration failed:', e);
            setNotification("회원가입에 실패했습니다. 다시 시도해주세요.");
            await delay(1500);
            setNotification("");
        }
    };

    return (
        <>
            {notification && <Notification message={notification} />}
            <form onSubmit={handleSubmit}>
                <RegisterInput type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <RegisterInput type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <RegisterInput type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                <RegisterInput type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                <RegisterInput type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
                <RegisterBtn loading={loading} />
            </form>
        </>
    );
};

export default RegisterBox;
