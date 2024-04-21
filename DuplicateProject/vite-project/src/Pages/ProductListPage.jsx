import MasterLayout from "../Component/MasterLayout.jsx";
import Products from "../Component/Products.jsx";

const ProductListPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <MasterLayout>
                        <Products/>
                    </MasterLayout>
                </div>
            </div>
        </div>
    );
};

export default ProductListPage;