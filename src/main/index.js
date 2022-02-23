import "./style.css";
import axios from "axios";
import React from "react";
import {Link} from 'react-router-dom';

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://f6dc6733-8e77-4567-8f22-ec3d9bbe144b.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {
            // products 배열에 있는 값을 반복해서 꺼내서 처리하기
            products.map(function (product, index) {
              return (
                <div key={index} className="product-card">
                  {/* /<Link className="product-link" to={'/product/'+index}> */}
                  <Link className="product-link" to={`/product/${index}`}>
                    {/* index는 map 배열의 인덱스이고 0부터 시작. 첫번째 카드가 0 */}
                  <div>
                    <img className="product-img" src={product.imageUrl} />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}원</span>
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/icons/avatar.png"
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                  </Link>
                </div>
              );
            })
          }
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
