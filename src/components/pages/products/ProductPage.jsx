import ProductList from '../../templates/products/ProductList';
import Sidebar from '../../molecules/sidebar/Sidebar';
import styled from 'styled-components';
import myImg from '../../../assets/test.jpg';

const PageContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const products = [
  {
    id: 1,
    imageSrc: myImg,
    name: '클래식 가죽 신발 (검은색)',
    description: '우아하고 편안한',
    price: '$59.99',
  },
  {
    id: 2,
    imageSrc: 'path/to/image2.jpg',
    name: '디자이너 핸드백 (갈색)',
    description: '패션 스테이트먼트',
    price: '$89.99',
  },
  {
    id: 3,
    imageSrc: 'path/to/image3.jpg',
    name: '디자이너 핸드백 (갈색)',
    description: '패션 스테이트먼트',
    price: '$89.99',
  },
  {
    id: 4,
    imageSrc: 'path/to/image4.jpg',
    name: '디자이너 핸드백 (갈색)',
    description: '패션 스테이트먼트',
    price: '$89.99',
  },
  {
    id: 5,
    imageSrc: 'path/to/image5.jpg',
    name: '디자이너 핸드백 (갈색)',
    description: '패션 스테이트먼트',
    price: '$89.99',
  }
];

const ProductPage = () => {
  return (
    <PageContainer>
      <Sidebar />
      <ContentContainer>
        <ProductList products={products} />
      </ContentContainer>
    </PageContainer>
  );
};

export default ProductPage;
