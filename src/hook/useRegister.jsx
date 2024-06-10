import { useState } from 'react';

// 얘는 나중에 바디 구조 분해 할당이랑 url 변수로 빼서 쓰면 됨

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const register = async (name, email, password) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.errors ? data.errors[0].msg : 'Registration failed');
      }

      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error, success };
};

export default useRegister;
