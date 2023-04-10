import '../sass/catalog.scss';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from '../componentLittle/Breadcrumb';
import Item from './Item';

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
    let productFilter = useSelector((state) => state.productFilter);
    console.log(productFilter);
    const [currentPageData, setCurrentPageData] = useState(productsMain);
    let sortProduct = (event) => {
        if (event.target.value === "name_asc") {
            dispatch({ type: "SORT_NAME_ASC" })
        } else if (event.target.value === "name_desc") {
            dispatch({ type: "SORT_NAME_DESC" })
        } else if (event.target.value === "price_asc") {
            dispatch({ type: "SORT_PRICE_ASC" })
        } else if (event.target.value === "price_desc") {
            dispatch({ type: "SORT_PRICE_DESC" })
        }
    }
    let filterProduct = (event) => {
        dispatch({ type: "FILTER_PRODUCT", payload: event.target.value });
    }
    useEffect(() => {
        setCurrentPageData(productsMain);
    }, [])
    return (
        <>
            <div className="catalog-container">
                <Header />
                <Breadcrumb />
                <div className="catalog-filter pad-15-20 col-8">
                    <div className="catalog-filter-1 col-6">
                        <p className="catalog-filter-p">View: </p>
                        <div>
                            <select name="sort" className="select" defaultValue="" onChange={(e) => sortProduct(e)}>
                                <option value="">Sort</option>
                                <option value="name_asc"> Theo chu cai (A-&gt;Z)</option>
                                <option value="name_desc"> Theo chu cai (Z-&gt;A)</option>
                                <option value="price_asc"> Theo so tien (S-&gt;B)</option>
                                <option value="price_desc"> Theo so tien (B-&gt;S)</option>
                            </select>
                        </div>
                    </div>
                    <div className="catalog-filter-2 col-8">
                        <select name="filter" className="select col-8" defaultValue="all" onChange={(e) => filterProduct(e)} >
                            <option value="all">All products</option>
                            <option value="giay"> Giày</option>
                            <option value="tui"> Túi</option>
                            <option value="khac"> Khác</option>
                        </select>
                    </div>
                </div>
                <div className="catalog-listItem pad-15-20">
                    <div className="catalog-list-grid">
                        {productFilter.length > 0 ? productFilter.map((item, i) => (
                            <Item key={item.id} element={item} />
                        )) : currentPageData.map((item, i) => (
                            <Item key={item.id} element={item} />
                        ))}
                    </div>
                </div>
                <div className="catalog-btn">
                    : <SweetPagination
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