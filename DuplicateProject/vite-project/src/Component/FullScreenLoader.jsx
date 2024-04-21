
const FullScreenLoader = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullScreenLoader;