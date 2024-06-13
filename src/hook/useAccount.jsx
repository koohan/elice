import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const useAccount = () => {
  const [cookies] = useCookies(['userCookie', 'adminCookie', 'email']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const deleteAccount = async () => {
    setLoading(true);
    setError('');
    try {
      const Token = cookies.userCookie || cookies.adminCookie;
      const email = cookies.email;

      console.log("Auth Token:", Token);
      console.log("Email:", email);

      if (!Token) {
        throw new Error('인증 토큰이 없습니다.');
      }

      if (!email) {
        throw new Error('이메일이 없습니다.');
      }

      const response = await fetch(`/api/delete/${email}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`
        },
        credentials: 'include'
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || '계정 삭제에 실패했습니다.');
      }

      console.log('계정이 성공적으로 삭제되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('계정 삭제 중 오류 발생:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteAccount, loading, error };
};

export default useAccount;
