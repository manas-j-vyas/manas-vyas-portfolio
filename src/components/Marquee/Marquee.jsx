import './Marquee.css';

const words = ['WORDPRESS', 'ELEMENTOR', 'PHP', 'JAVASCRIPT', 'WOOCOMMERCE', 'RESPONSIVE', 'PERFORMANCE', 'SEO'];

export function Marquee() {
  const content = [...words, ...words];
  return <section className="marquee-band" aria-label="Tools and technologies"><div className="marquee-track">{content.map((word, index) => <span key={`${word}-${index}`}>{word}<i>✦</i></span>)}</div></section>;
}
