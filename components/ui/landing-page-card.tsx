export default function LandingPageCard(props: {
  title: string;
  content: string;
}) {
  return (
    <div className="p-8 bg-neutral-800 text-center flex flex-col gap-4 rounded-xl border border-neutral-700">
      <h3 className="text-violet-400 text-2xl font-semibold">{props.title}</h3>
      <p className="text-neutral-300">{props.content}</p>
    </div>
  );
}
