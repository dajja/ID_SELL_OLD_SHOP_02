import '../sass/catalog.scss';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from '../componentLittle/Breadcrumb';
import Item from './Item';

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SweetPagination from 'sweetpagination';
import { useSelector, useDispatch } from 'react-redux';
function Catalog() {
    let tagData = [
        'Sneakers', 'Running', 'Sport', 'Casual', 'Clothing', 'Adidas'
    ]
    let dispatch = useDispatch();
    useEffect(() => {
        fetch("http://localhost:8000/productsMain")
            .then((res) => res.json())
            .then((data) => dispatch({ type: "SAVE_PRODUCTS", payload: data }))
            .catch((err) => console.log(err));
    }, [dispatch])
    let productsMain = useSelector((state) => state.products);
    const [currentPageData, setCurrentPageData] = useState(productsMain);
    return (
        <>
            <div className="catalog-container">
                <Header />
                <Breadcrumb />
                <div className="catalog-filter pad-15-20 col-8">
                    <div className="catalog-filter-1 col-6">
                        <p className="catalog-filter-p">View: </p>
                        <div>
                            <select name="sort" className="select" defaultValue={0}>
                                <option value={0}>Sort</option>
                                <option value={1}> Theo chu cai (A-&gt;Z)</option>
                                <option value={2}> Theo chu cai (Z-&gt;A)</option>
                                <option value={3}> Theo so tien (S-&gt;B)</option>
                                <option value={4}> Theo so tien (B-&gt;S)</option>
                            </select>
                        </div>
                    </div>
                    <div className="catalog-filter-2 col-8">
                        <select name="filter" className="select col-8" defaultValue={0}>
                            <option value={0}>View filter</option>
                            <option value={1}> Giày</option>
                            <option value={2}> Túi</option>
                            <option value={3}> Khác</option>
                        </select>
                    </div>
                </div>
                <div className="catalog-listItem pad-15-20">
                    <div className="catalog-list-grid">
                        {currentPageData.map((item, i) => (
                            <Item key={item.id} element={item} />
                        ))}
                    </div>
                </div>
                <div className="catalog-btn">
                    <SweetPagination
                        currentPageData={setCurrentPageData}
                        getData={productsMain}
                        dataPerPage={12}
                        navigation={true}
                        getStyle={'style-1'}
                    />
                </div>
                <div className="ctl-divide" />
                <div className="tag col-10">
                    {tagData.map((item, i) => {
                        return (
                            <div key={i} className="tag-item">{item}</div>
                        )
                    })}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Catalog;