
import MasterLayout from '../components/MasterLayout';
import VerifyForm from "../components/VerifyForm.jsx";

const VerifyPage = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <MasterLayout>
                        <VerifyForm/>
                    </MasterLayout>
                </div>
            </div>
        </div>
    );
};

export default VerifyPage;