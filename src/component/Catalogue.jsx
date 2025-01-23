import React, { useState } from "react";

function Catalogue() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Catalog data with nested products and variations
  const catalog = {
    "Solar Inverters": {
      Infinit: [
        {
          name: "100A",
          image:
            "https://www.ttnergy.com/wp-content/uploads/2023/01/Hd00034fc37044527b21b76f94337dd82R.jpg_960x960.webp",
        },
        {
          name: "80A",
          image:
            "https://www.ttnergy.com/wp-content/uploads/2023/01/Hd00034fc37044527b21b76f94337dd82R.jpg_960x960.webp",
        },
        {
          name: "60A",
          image:
            "https://www.ttnergy.com/wp-content/uploads/2023/01/Hd00034fc37044527b21b76f94337dd82R.jpg_960x960.webp",
        },
      ],
      Felicity: [
        {
          name: "100A",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZB2KAL880Gu-lM1zBZDG0r-AV88td36j_OQ&s",
        },
        {
          name: "80A",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxNz4spTNigikPFng7hcQLFei2_QdR70k-g&s",
        },
        {
          name: "120A",
          image:
            "https://seanelectromecco.com.ng/wp-content/uploads/2021/12/felicity-pwm-hybrid-inverter-2.jpg",
        },
      ],
      Luminous: [
        {
          name: "100A",
          image:
            "https://cdn11.bigcommerce.com/s-x3ki4mm/images/stencil/1280x1280/products/3180/4306/Solar_PCU_6KW_96V_Luminous__05300.1585725266.jpg?c=2?imbypass=on",
        },
        {
          name: "200A",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BuA9Da7Xfa4Hpiid-tDvzcTIK1D6DCvhgw&s",
        },
        {
          name: "120A",
          image:
            "https://cdn.prod.website-files.com/62d9fdb180261014e2020876/62da526c754c765220afc272_SOLAR_NXG%2B1500VA2.png",
        },
      ],
      Umios: [
        {
          name: "100A",
          image:
            "https://img-va.myshopline.com/image/store/2001488432/1661238295753/-20230706143623.png?w=950&h=950",
        },
        {
          name: "200A",
          image:
            "https://milesolar.com/storage/product/40/3.5KW-hybrid-solar-inverter.jpg",
        },
      ],
    },
    "Solar Batteries": {
      Tubular: [
        {
          name: "220W",
          image:
            "https://www.swiftermall.com/5260-home_default/starplus-220ah-12v-tubular-battery.jpg",
        },
        {
          name: "230W",
          image:
            "https://static.wixstatic.com/media/f68b61_d74ce711f66b41c6904c467b73b9a0ea~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f68b61_d74ce711f66b41c6904c467b73b9a0ea~mv2.jpg",
        },
      ],
      Lithium: [
        {
          name: "2KWh",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzFYeaKCdkyHLdwvrIq4X7TuYK0HIuj_PfQ&s",
        },
        {
          name: "10KWh",
          image:
            "https://www.xindun-power.com/uploadfile/upload/2022-05/24/lithiumionbatteryrechargeable4.jpg",
        },
        {
          name: "15KWh",
          image:
            "https://zit-market.s3.amazonaws.com/media/product_images/felicity-17-5kwh-48v-lifepo4-iron-lithium-battery_1.0.jpg",
        },
      ],
    },
    "Solar Fan": [
      {
        name: "18 Inches",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9i1_FNCtTHIF9Rlkc_KKSWLHPfo0Alb5LGA&s",
      },
      {
        name: "16 Inches",
        image:
          "https://www.3chub.com/cdn/shop/files/18inches_png.jpg?v=1723028471",
      },
    ],
    "Solar CCTV": [
      {
        name: "Ultra",
        image:
          "https://dropletscctv.com.ng/wp-content/uploads/2023/09/cctv-installation-sale-repairs-company-in-port-harcourt-owerri-uyo-eket-umuahia-aba-droplets-cctv-solar-4g-ptz-camera-2sdsjjkj-1.jpg",
      },
      {
        name: "Double Lens",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarBzneMheCrN8Ir00sYdLhJECPQ1ZGkJ3og&s",
      },
      {
        name: "4G Cellular Outdoor",
        image:
          "https://trueview.co.in/wp-content/uploads/2024/01/T18164-1.webp",
      },
    ],
    "Solar Street Light": [
      {
        name: "150W",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgVswuH3BQpsGfQ_DqGz48CRH7kznCNhT4nQ&s",
      },
      {
        name: "200W",
        image:
          "https://www-konga-com-res.cloudinary.com/f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/V/U/125947_1623431752.jpg",
      },
      {
        name: "60W",
        image:
          "https://energymall.ng/wp-content/uploads/2021/09/137625_1539358056.jpg",
      },
      {
        name: "100W",
        image:
          "https://www.gdaktlighting.com/uploads/202128756/solar-all-in-one-street-light15093051865.jpg",
      },
    ],
    "Solar Generator": [
      {
        name: "1000W",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaG808Wvr2PgBULpZv0tGh7BTeinAdoVulg&s",
      },
      {
        name: "2000W",
        image:
          "https://i0.wp.com/nexgennigeria.com/wp-content/uploads/2017/11/IMG_3527.jpg?fit=782%2C869&ssl=1",
      },
      {
        name: "5000W",
        image:
          "https://i0.wp.com/www.prostarsolar.net/wp-content/uploads/2020/05/PIM3000-solar-generator-3000w.jpg?resize=800%2C800&ssl=1",
      },
    ],
    "Solar Panels": {
      Monocrystalline: [
        {
          name: "350W",
          image:
            "https://eclipseenergy.co.uk/wp-content/uploads/2022/01/Solar-Panels-2.jpg",
        },
        {
          name: "550W",
          image:
            "https://astrumenergy.com.ng/wp-content/uploads/2019/02/Mono-Solar-Panel.jpg",
        },
        {
          name: "385W",
          image:
            "https://cdn.britannica.com/91/222691-050-E8BDF226/installing-solar-panels.jpg",
        },
        {
          name: "450W",
          image:
            "https://www.nexusappliances.com.ng/wp-content/uploads/2022/05/Solar-panel-scaled.jpg",
        },
      ],
    },
    MPPT: [
      {
        name: "100A",
        image:
          "https://control.spop.com.ng/pages/uploads/product/2024-11-17-93mOCVq1kdlhgRSJP0EX/IMG_2239.jpeg",
      },
      {
        name: "200A",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHZ4fn2NzzeWhzO2nrbxZvr7K0zxtDnJkzA&s",
      },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedProduct(null);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="w-full py-8 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Category View */}
        {selectedCategory === null && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.keys(catalog).map((category) => (
              <div
                key={category}
                className="relative h-62 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                <h2 className="text-lg md:text-xl font-semibold text-center">
                  {category}
                </h2>
                <img
                  className="mt-4 h-62 w-full object-cover  rounded-lg"
                  src={
                    catalog[category]?.[0]?.image ||
                    "https://via.placeholder.com/150"
                  } // Show the first product image as a preview
                  alt={category}
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
                  <p className="text-sm md:text-base text-white font-medium">
                    Click to view products
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Product View */}
        {selectedCategory !== null && selectedProduct === null && (
          <div>
            <button
              onClick={handleBackToCategories}
              className="mb-6 px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
            >
              Back to Categories
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Object.keys(catalog[selectedCategory]).map((product) => (
                <div
                  key={product}
                  className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
                  onClick={() => handleProductClick(product)}
                >
                  <h3 className="text-lg font-semibold">{product}</h3>
                  <img
                    className="mt-4 h-72 w-full object-center object-cover rounded-lg"
                    src={
                      catalog[selectedCategory][product]?.[0]?.image ||
                      "https://via.placeholder.com/150"
                    }
                    alt={product}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Product Variations */}
        {selectedProduct !== null && (
          <div>
            <button
              onClick={handleBackToProducts}
              className="mb-6 px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
            >
              Back to {selectedCategory}
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Array.isArray(catalog[selectedCategory][selectedProduct])
                ? catalog[selectedCategory][selectedProduct].map(
                    (product, index) => (
                      <div
                        key={index}
                        className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
                      >
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                        <img
                          className="mt-4 h-72 object-center w-full object-cover rounded-lg"
                          src={product.image}
                          alt={product.name}
                        />
                      </div>
                    )
                  )
                : Object.keys(catalog[selectedCategory][selectedProduct]).map(
                    (subProduct, index) => (
                      <div
                        key={index}
                        className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
                      >
                        <h3 className="text-lg font-semibold">{subProduct}</h3>
                        <img
                          className="mt-4 h-72 object-center w-full object-cover rounded-lg"
                          src={
                            catalog[selectedCategory][selectedProduct][
                              subProduct
                            ][0]?.image || "https://via.placeholder.com/150"
                          }
                          alt={subProduct}
                        />
                      </div>
                    )
                  )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Catalogue;
