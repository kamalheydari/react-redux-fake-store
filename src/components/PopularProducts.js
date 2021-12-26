import React from "react";
import styled from "styled-components";

//? Redux
import { useSelector } from "react-redux";

//? Components
import { GridProducts, Loading, Error } from ".";

const PopularProducts = () => {
  const {
    popular_products: products,
    products_loading: loading,
    products_error: error,
  } = useSelector((state) => state.productsState);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper>
      <h2>Most popular products</h2>
      <GridProducts products={products.slice(0, 3)} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem;
  height: auto;

  h2 {
    margin-bottom: 1rem;
    color: var(--blue-color-1);
  }
`;

export default PopularProducts;
