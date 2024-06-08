import { useState, useEffect } from 'react';



// 커스텀 훅 설명 props로 전달하는 url에 useFetchData('/data.json'); 이런식으로 작성하면 됨
// 스테이트 3개 [데이터, 로딩, 에러] 전달 하는 중이니 구조 분해를 사용
// const {data, loading, error} = useFetchData("데이터 가져올 api 주소")
// 프론트에서 테스트시 백엔드 프로젝트 클론 받고 로컬주소/api경로
// 백엔드 프론트엔드 로컬 서버 띄워놓고 잘 작동하는지 테스트
// 커스텀 훅 사용하는 페이지에서 url 변수 선언해 놓으면 사용하기 용이함 

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error Data not Found');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
