import React from "react";

const JsonLd = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "PraxisFlow Automations",
        url: "https://praxisflow.com",
        logo: "https://praxisflow.com/logo.svg",
        description: "We simplify complex legal operations through intelligent, custom automation.",
        address: {
            "@type": "PostalAddress",
            addressLocality: "San Francisco", // Placeholder
            addressRegion: "CA",
            addressCountry: "US",
        },
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "contact@praxisflow.com", // Placeholder
        },
        sameAs: [
            "https://twitter.com/praxisflow", // Placeholder
            "https://www.linkedin.com/company/praxisflow", // Placeholder
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default JsonLd;
