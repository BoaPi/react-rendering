interface Header {
  count: number
}

export default function Header({ count }: Header) {

  console.log('Header - render', count)

  return (
    <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] text-[hsl(280,100%,70%)]">
      React Performance Analyzer {count}
    </h1>
  );
}