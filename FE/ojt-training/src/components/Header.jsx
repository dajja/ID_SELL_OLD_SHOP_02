export default function Header() {
    return (
        <>
            <div className="header">
                <div className="header-3 col-10">
                    <div className="header-3a header-3-item col-3">
                        <div>
                            <img src="./image/3dots.svg" alt="" />
                        </div>
                        <div className="header-3a header-3-item-2">Sale</div>
                        <div className="header-3a header-3-item-2">Men</div>
                        <div className="header-3a header-3-item-2">Woman</div>
                    </div>
                    <div className="header-3b header-3-item col-4">
                        <div>
                            <h2 style={{ fontWeight: 600 }}>MESSTO</h2>
                        </div>
                    </div>
                    <div className="header-3c header-3-item col-4">
                        <div><i className="fa-solid fa-magnifying-glass" /></div>
                        <div>En | USD</div>
                        <div><i className="fa-solid fa-cart-shopping" /></div>
                    </div>
                </div>
            </div>
        </>
    )
}