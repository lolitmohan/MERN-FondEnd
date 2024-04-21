
import MasterLayout from '../components/MasterLayout';
import ProductLIst from "../components/ProductLIst.jsx";

const ProductListPage = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <MasterLayout>
                        <ProductLIst/>
                    </MasterLayout>
                </div>
            </div>
        </div>
    );
};

export default ProductListPage;