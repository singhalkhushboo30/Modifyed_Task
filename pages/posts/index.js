import Link from 'next/link';

export async function getStaticProps() {
  const res = await fetch('https://demo.modifyed.xyz/wp-json/wp/v2/posts');
  const posts = await res.json();

  return {
    props: {
      posts
    }
  };
}

export default function Posts({ posts }) {
  return (
    <div className="container py-5">
      <h1>Blog Posts</h1>
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">
            <Link href={`/posts/${post.id}`}>{post.title.rendered}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
