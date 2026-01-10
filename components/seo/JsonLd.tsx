import React from "react";

const JsonLd = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "PraxisFlow Automations",
        url: "https://www.praxisflow.com",
        logo: "https://www.praxisflow.com/favicon-32x32.png",
        description: "We simplify complex legal operations through intelligent, custom automation.",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Westford",
            addressRegion: "MA",
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
