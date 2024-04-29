import React from 'react';
import MasterLayout from '../Component/MasterLayout';
import ProductList from '../Component/ProductList'

const ProductListPage = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <MasterLayout>
                        <ProductList/>
                    </MasterLayout>
                </div>
            </div>
        </div>
    );
};

export default ProductListPage;