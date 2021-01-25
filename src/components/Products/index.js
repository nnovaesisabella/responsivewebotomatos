import React from 'react';
import { ProductsContainer, ProductsHeading, ProductWrapper, ProductsCard, ProductImg,ProductInfo, ProductTitle,
    ProductDesc, ProductPrice, ProductButton} from './ProductsElements';

function Products({heading, data}) {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper> 
                {data.map((product, index)=>{

                    return(
                        <ProductsCard key={index}> 
                        <ProductImg src={product.img} alt={product.alt}/>
                        <ProductInfo> 
                            <ProductTitle>{product.name} </ProductTitle>
                                <ProductDesc>{product.desc} </ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                        </ProductInfo>
                             
                        </ProductsCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products;
