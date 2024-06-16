import { useEffect, useState } from 'react';

const useUserInfo = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // api 문제 생겼는데 원인 찾기 불가
        // 맵핑해서 해봤고 백엔드 코드도 봤는데 이유를 모르겠음
        const response = await fetch("api/users/me", {
          credentials: 'include'
        });

        if (response.status === 401) {
          setUser(null);
        } else if (!response.ok) {
          throw new Error('Failed to fetch user data');
        } else {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};

export default useUserInfo;
