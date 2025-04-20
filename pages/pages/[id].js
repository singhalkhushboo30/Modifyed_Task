export async function getStaticPaths() {
    const res = await fetch('https://demo.modifyed.xyz/wp-json/wp/v2/pages');
    const pages = await res.json();
  
    const paths = pages.map(page => ({
      params: { id: page.id.toString() }
    }));
  
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://demo.modifyed.xyz/wp-json/wp/v2/pages/${params.id}`);
    const page = await res.json();
  
    return {
      props: { page }
    };
  }
  
  export default function Page({ page }) {
    return (
      <div className="container py-5">
        <h1>{page.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </div>
    );
  }
  