import React from "react";
import BrandList from "./BrandList";

function Brand() {
    const images = [
        "/src/assets/adidas.webp",
        "/src/assets/adidas.webp",
        "/src/assets/adidas.webp",
        "/src/assets/adidas.webp",
        "/src/assets/adidas.webp",
        "/src/assets/adidas.webp",
        "/src/assets/adidas.webp",
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
