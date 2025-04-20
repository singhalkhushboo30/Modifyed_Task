export async function getStaticPaths() {
    const res = await fetch('https://demo.modifyed.xyz/wp-json/wp/v2/posts');
    const posts = await res.json();
  
    const paths = posts.map(post => ({
      params: { id: post.id.toString() }
    }));
  
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://demo.modifyed.xyz/wp-json/wp/v2/posts/${params.id}`);
    const post = await res.json();
  
    return {
      props: { post }
    };
  }
  
  export default function Post({ post }) {
    return (
      <div className="container py-5">
        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    );
  }
  