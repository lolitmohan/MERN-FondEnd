import React from 'react';
import MasterLayout from '../Component/MasterLayout';
import CardList from '../Component/CardList';
const CardListPage = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <MasterLayout>
                        <CardList/>
                    </MasterLayout>
                </div>
            </div>
        </div>
    );
};

export default CardListPage;