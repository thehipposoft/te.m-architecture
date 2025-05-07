'use client'
import React from "react";
import Script from "next/script"

const SchemaOrg = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                type="application/ld+json"
                id="schema-org"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Te.M Architecture",
                        "url": "https://temarqui.com/",
                        "logo": "https://temarqui.com/assets/images/logo.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+39 342 326 5740",
                            "contactType": "customer service",
                            "areaServed": "ES",
                            "availableLanguage": "es"
                        },
                        "sameAs": [
                            "https://www.instagram.com/te.mstudiodesign/",
                            "https://www.linkedin.com/company/te-m/",
                        ]
                    }`,
                }}
            />
        </>
    )
}

export default SchemaOrg