import { useEffect } from 'react';
import { seoConfig } from '../../data/seo.js';

function setMeta(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export function SEO() {
  useEffect(() => {
    const { title, description, siteName, siteUrl, imagePath } = seoConfig;
    const pageUrl = siteUrl || window.location.origin;
    const imageUrl = siteUrl ? `${siteUrl}${imagePath}` : imagePath;

    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', 'Modern and responsive WordPress websites by Manas Vyas.');
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', pageUrl);
    setMeta('property', 'og:image', imageUrl);
    setMeta('property', 'og:site_name', siteName);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', imageUrl);
    if (siteUrl) setLink('canonical', pageUrl);

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          name: 'Manas Vyas',
          jobTitle: 'WordPress Developer',
          email: `mailto:${seoConfig.email}`,
          telephone: seoConfig.phone,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Nallasopara',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
          },
          ...(siteUrl ? { url: siteUrl } : {}),
          sameAs: [seoConfig.github],
        },
        {
          '@type': 'WebSite',
          name: siteName,
          description: 'Personal portfolio website of Manas Vyas, a WordPress Developer.',
          ...(siteUrl ? { url: siteUrl } : {}),
        },
      ],
    };
    let script = document.head.querySelector('#structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return null;
}
