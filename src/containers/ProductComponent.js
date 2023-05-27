import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { Grid, Image } from 'semantic-ui-react';
// import styles from "./Product.css";
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="eight column wide" style={{ width: '200px', minHeight: '100px' }} key={id}>
                {/* <div className="ui link cards" style={{width:'200px'}}> */}
                <Link to={'/product/${id}'}>
                    <div className="ui link cards" style={{ display: 'flex', flexWrap: 'wrap', minHeight: '100px' }}>
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">${price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            //     <Grid columns={3}>
            //         <Grid.Row>
            //             <Grid.Column>
            //                 <div className="shopy-card">
            //                     <div className="img-container">
            //                         <img src={image} alt={title}></img>
            //                     </div>
            //                     <div className="description">
            //                         <p>
            //                         <div className="content">
            //                    <div className="header">{title}</div>
            //                     <div className="meta price">${price}</div>
            //                     <div className="meta">{category}</div>
            //                </div>
            //                         </p>
            //                     </div>
            //                 </div>
            //             </Grid.Column>


            //         </Grid.Row>
            //    </Grid>

        );
    });
    return <>{renderList}</>;
};



export default ProductComponent;