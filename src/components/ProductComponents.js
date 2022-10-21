import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Card, Feed, Image } from "semantic-ui-react";

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Card.Group key={id}>
        <Link to={`product/${id}`}>
          <Card style={{ margin: "22px" }}>
            <Image src={image}></Image>
            <Card.Content style={{ textAlign: "start" }}>
              <Card.Header>{title}</Card.Header>
              <Feed.Summary>{price}</Feed.Summary>
              <Card.Description>{category}</Card.Description>
            </Card.Content>
          </Card>
        </Link>
      </Card.Group>
    );
  });
  return <Card.Group>{renderList}</Card.Group>;
};

export default ProductComponents;
