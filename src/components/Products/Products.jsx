import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes', price: '$5', image: 'https://runningmagazine.ca/wp-content/uploads/2020/07/Screen-Shot-2020-07-07-at-2.53.19-PM-1082x675.png'},
    {id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$7', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-og-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604278672000'},
];

const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={4}> 
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products