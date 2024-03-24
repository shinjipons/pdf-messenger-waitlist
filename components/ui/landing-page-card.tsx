export default function LandingPageCard(props: {
  title: string;
  content: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-64 gap-4 p-8 text-center bg-neutral-800 rounded-xl border border-neutral-700">
      <h3 className="text-violet-400 text-2xl font-semibold">{props.title}</h3>
      <p className="text-neutral-300">{props.content}</p>
    </div>
  );
}
