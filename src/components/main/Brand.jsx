import React from "react";
import BrandList from "./BrandList";

function Brand() {
    const images = [
        { id: 1, src: "/src/assets/adidas.webp" },
        { id: 2, src: "/src/assets/adidas.webp" },
        { id: 3, src: "/src/assets/adidas.webp" },
        { id: 4, src: "/src/assets/adidas.webp" },
        { id: 5, src: "/src/assets/adidas.webp" },
        { id: 6, src: "/src/assets/adidas.webp" },
        { id: 7, src: "/src/assets/adidas.webp" },
    ];

    const brands = [
        "브랜드1",
        "브랜드2",
        "브랜드3",
        "브랜드4",
        "브랜드5",
        "브랜드6",
        "브랜드7",
    ];

    return (
        <div>
            <BrandList images={images} brands={brands} />
        </div>
    );
}

export default Brand;
