import Link from 'next/link';

export async function getStaticProps() {
  const res = await fetch('https://demo.modifyed.xyz/wp-json/wp/v2/pages');
  const pages = await res.json();

  return {
    props: {
      pages
    }
  };
}

export default function Pages({ pages }) {
  return (
    <div className="container py-5">
      <h1>Pages</h1>
      <ul className="list-group">
        {pages.map(page => (
          <li key={page.id} className="list-group-item">
            <Link href={`/pages/${page.id}`}>{page.title.rendered}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
