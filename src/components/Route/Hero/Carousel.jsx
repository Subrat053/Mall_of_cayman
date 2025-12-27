import React from "react";
import './Carousel.css';
export default function Carousel() {
    const slides = [
        {
            id: 1,
            title: "Sell Smarter\nWelcome to Mall of CayMan",
            buttonText: "Sell Now",
            image: "https://caymall.com/wp-content/uploads/2025/04/ChatGPT-Image-Apr-5-2025-02_32_28-PM.png"
        },
        {
            id: 2,
            title: "Shop Smart\nFind Everything",
            buttonText: "Shop Now",
            image: "🛍️",
            image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/0b433787-92ae-499b-981c-a47233097f30.png"
        },
        {
            id: 3,
            title: "Deliver Fast\nReach Your Customers",
            buttonText: "Get Started",
            image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/0b433787-92ae-499b-981c-a47233097f30.png"
        }
    ];
    const features = [
        {
            icon: "🛒",
            title: "Buy, Sell, Deliver",
            description: "Discover products and services effortlessly from local businesses. Authorized businesses can open a virtual store here and sell seamlessly with payments to their bank accounts.",
            buttonText: "Learn More"
        },
        {
            icon: "⚡",
            title: "Shop On-Demand",
            description: "Find what you need without the hassle of searching store to store. Browse curated products from trusted sellers all in one place.",
            buttonText: "Start Selling Here"
        },
        {
            icon: "📦",
            title: "Convenient Pickup",
            description: "Opt to collect your purchases easily with RaidLox secure smart lockers or pick-up in store. Fast, safe, and convenient delivery options.",
            buttonText: "Explore More"
        }
    ];
    function FeatureCard({ icon, title, description, buttonText }) {
        return (
            <div className="feature-card">
                <div className="feature-icon">{icon}</div>
                <h3 className="backdrop-saturate-125">{title}</h3>
                <p>{description}</p>
                <button className="feature-btn bg-indigo-500">{buttonText}</button>
            </div>
        );
    }


    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [autoplay, setAutoplay] = React.useState(true);

    React.useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [autoplay, slides.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 5000);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 5000);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 5000);
    };

    return (
        <>

            <div className="carousel-container">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <div className="carousel-content" style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>
                            <div className="carousel-text">
                                <h1>
                                    {slide.title.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i === 0 && <br />}
                                        </React.Fragment>
                                    ))}
                                </h1>
                                <button className="carousel-btn bg-indigo-500">{slide.buttonText}</button>
                            </div>
                            {/* <div className="carousel-image">
                                <img
                                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 400'%3E%3Crect fill='%23fff' width='200' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='100' text-anchor='middle' dominant-baseline='middle'%3E${slide.image}%3C/text%3E%3C/svg%3E`}
                                    alt="Slide"
                                    style={{ width: '250px', height: 'auto' }}
                                />
                            </div> */}
                        </div>
                    </div>
                ))}

                <button className="carousel-arrow left" onClick={prevSlide}>
                    ❮
                </button>
                <button className="carousel-arrow right" onClick={nextSlide}>
                    ❯
                </button>

                <div className="carousel-nav">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></div>
                    ))}
                </div>

            </div>
            <div className="feature-grid">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        buttonText={feature.buttonText}
                    />
                ))}
            </div>
        </>
    );
}


// Feature Grid Component
// export default function FeatureGrid() {

//     return (
//         <div className="feature-grid">
//             {features.map((feature, index) => (
//                 <FeatureCard
//                     key={index}
//                     icon={feature.icon}
//                     title={feature.title}
//                     description={feature.description}
//                     buttonText={feature.buttonText}
//                 />
//             ))}
//         </div>
//     );
// }