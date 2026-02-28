import React from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import productsData from "../data/productsData";

export default function ProductDetails() {
    const { category, slug } = useParams();

    const categoryData = productsData.find(
        (cat) => cat.categorySlug === category
    );

    const product = categoryData?.items.find(
        (item) => item.slug === slug
    );

    if (!product) {
        return (
            <div className="container py-5">
                <h2>Product Not Found</h2>
            </div>
        );
    }

    return (
        <main className="main">

            {/* PAGE TITLE */}
            <div className="page-title dark-background">
                <div className="container position-relative">
                    <h1>{product.title}</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>{categoryData.category}</li>
                            <li className="current">{product.title}</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section className="service-details section">
                <div className="container">
                    <div className="row gy-5">

                        {/* RIGHT SIDEBAR */}
                        <div className="col-lg-4">
                            <div className="service-sidebar">

                                <h4>Other Products</h4>
                                <div className="menu-list mt-3">
                                    {categoryData.items.map((item, i) => (
                                        <NavLink
                                            key={i}
                                            to={`/products/${category}/${item.slug}`}
                                            className={({ isActive }) =>
                                                `menu-item ${isActive ? "active" : ""}`
                                            }
                                        >
                                            {item.title}
                                        </NavLink>
                                    ))}
                                </div>

                                <div className="contact-card mt-4">
                                    <div className="contact-content">
                                        <h4>Need Help?</h4>
                                        <p>Contact our engineering team for technical consultation.</p>
                                        <div className="contact-info">
                                            <div className="contact-item">
                                                <i className="bi bi-telephone"></i>
                                                <span>+91 98250 95243</span>
                                            </div>
                                            <div className="contact-item">
                                                <i className="bi bi-envelope"></i>
                                                <span>aplexengg@gmail.com</span>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-primary mt-3">
                                            Request Quote
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* LEFT CONTENT */}
                        <div className="col-lg-8">
                            <div className="service-content">

                                <div className="service-hero">
                                    <img
                                        src={product.image || "https://bootstrapmade.com/content/demo/Passion/assets/img/services/services-7.webp"}
                                        alt={product.title}
                                        className="img-fluid"
                                    />
                                    <div className="service-badge">
                                        <span>Premium Product</span>
                                    </div>
                                </div>

                                <div className="service-header">
                                    <h2>{product.title}</h2>
                                    <p className="service-intro">
                                        {product.fullDescription}
                                    </p>
                                </div>

                                <div className="row">
                                    {/* WORKING PRINCIPLE */}
                                    {product.workingPrinciple && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Working Principle</h4>
                                            <ul>
                                                {product.workingPrinciple.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* MAIN COMPONENTS */}
                                    {product.mainComponents && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Main Components</h4>
                                            <ul>
                                                {product.mainComponents.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* TYPES */}
                                    {product.types && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Types</h4>
                                            <ul>
                                                {product.types.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* FEATURES */}
                                    {product.features && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Key Features</h4>
                                            <ul>
                                                {product.features.map((feature, i) => (
                                                    <li key={i}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* APPLICATIONS */}
                                    {product.applications && (
                                        <div className="row mt-4">
                                            <h4>Applications</h4>

                                            {/* If applications is object (grouped) */}
                                            {typeof product.applications === "object" &&
                                                !Array.isArray(product.applications) ? (
                                                Object.entries(product.applications).map(([key, values]) => (
                                                    <div key={key} className="col-lg-3 mb-3">
                                                        <h6 className="fw-bold text-capitalize">
                                                            {key.replace(/([A-Z])/g, " $1")}
                                                        </h6>
                                                        <ul>
                                                            {values.map((v, i) => (
                                                                <li key={i}>{v}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))
                                            ) : (
                                                <ul>
                                                    {product.applications.map((app, i) => (
                                                        <li key={i}>{app}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}

                                    {/* ADVANTAGES */}
                                    {product.advantages && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Advantages</h4>
                                            <ul>
                                                {product.advantages.map((adv, i) => (
                                                    <li key={i}>{adv}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* LIMITATIONS */}
                                    {product.limitations && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Limitations</h4>
                                            <ul>
                                                {product.limitations.map((dis, i) => (
                                                    <li key={i}>{dis}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* OPTIONAL FEATURES */}
                                    {product.optionalFeatures && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Optional Features</h4>
                                            <ul>
                                                {product.optionalFeatures.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* INDUSTRIES */}
                                    {product.industries && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Industries Served</h4>
                                            <ul>
                                                {product.industries.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* WHY Use */}
                                    {product.whyUse && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Why Closed-Loop?</h4>
                                            <ul>
                                                {product.whyUse.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* VARIANTS */}
                                    {product.variants && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Variants / Types</h4>
                                            <ul>
                                                {product.variants.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* KEY SELECTION PARAMETERS */}
                                    {product.keySelectionParameters && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Key Selection Parameters</h4>
                                            <ul>
                                                {product.keySelectionParameters.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* HYGIENIC DESIGN FEATURES */}
                                    {product.hygienicDesignFeatures && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Hygienic Design Features</h4>
                                            <ul>
                                                {product.hygienicDesignFeatures.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* HYGIENE & REGULATORY STANDARDS */}
                                    {product.hygieneStandards && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Hygiene & Regulatory Standards</h4>
                                            <ul>
                                                {product.hygieneStandards.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* PRODUCT VARIANTS */}
                                    {product.productCategories && (
                                        <div className="col-12 mt-4">
                                            <h4>Product Variants</h4>
                                            <div className="row">
                                                {product.productCategories.map((cat, index) => (
                                                    <div key={index} className="col-lg-6 mb-3">
                                                        <h6 className="fw-bold">{cat.name}</h6>
                                                        <ul>
                                                            {cat.features.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* DESIGN FEATURES */}
                                    {product.designFeatures && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Design Features</h4>
                                            <ul>
                                                {product.designFeatures.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* LIMITATIONS */}
                                    {product.limitations && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Limitations</h4>
                                            <ul>
                                                {product.limitations.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* PLANT COMPONENTS */}
                                    {product.plantComponents && (
                                        <div className="col-lg-6 mt-4">
                                            <h4>Plant Components</h4>
                                            <ul>
                                                {product.plantComponents.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}









                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
