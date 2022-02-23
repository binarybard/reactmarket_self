import {useParams} from 'react-router-dom';

function ProductPage() {
  // const params = useParams();
  // console.log(params.id); // 이걸로 테스트 가능
  // 문법을 아래와 같이 축약 가능
  const {id} = useParams();  
  return <h1>상품 상세 페이지 {id}상품</h1>;
}

export default ProductPage;
