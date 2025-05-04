'use client'
import React from "react";
import Script from "next/script"

const GoogleAnalytics = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-0B99LKCSSD`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-0B99LKCSSD', {
                      page_path: window.location.pathname,
                      });
                    `,
                }}
            />
        </>
    )
}

export default GoogleAnalytics
