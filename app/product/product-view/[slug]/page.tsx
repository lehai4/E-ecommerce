export default function Page({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  return <div>My Post: {params.slug}</div>;
}
