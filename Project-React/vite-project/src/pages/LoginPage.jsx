
import MasterLayout from '../components/MasterLayout';
import LoginForm from "../components/LoginForm.jsx";

const LoginPage = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <MasterLayout>
                        <LoginForm/>
                    </MasterLayout>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;