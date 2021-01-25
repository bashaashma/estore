import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: rgb(1, 77, 169);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: white;
  a {
    color: white;
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: black;
  }
`;

export default PageHero;
