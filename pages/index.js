import Link from 'next/link';

export default function Home() {
  return (
    <div className="container py-5">
      <h1>Welcome to the Blog</h1>
      <p>View <Link href="/posts">Posts</Link> or <Link href="/pages">Pages</Link>.</p>
    </div>
  );
}
