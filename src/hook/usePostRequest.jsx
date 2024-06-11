import { useState } from "react";

const usePostRequest = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (body) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        credentials: 'include' 
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || '요청에 실패했습니다.');
      }

      const data = await response.json();
      setData(data);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      setError("요청에 실패했습니다.");
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
};

export default usePostRequest;
