import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";

const components = {
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="mt-12 font-display text-2xl font-semibold text-ink"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="mt-8 font-display text-xl font-semibold text-ink"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="mt-5 text-[17px] leading-relaxed text-ink-2" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul
      className="mt-5 list-disc space-y-2 pl-5 text-[17px] leading-relaxed text-ink-2"
      {...props}
    />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol
      className="mt-5 list-decimal space-y-2 pl-5 text-[17px] leading-relaxed text-ink-2"
      {...props}
    />
  ),
  li: (props: ComponentProps<"li">) => <li className="pl-1" {...props} />,
  a: (props: ComponentProps<"a">) => (
    <a
      className="font-medium text-accent underline underline-offset-2 hover:text-accent-2"
      {...props}
    />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-ink" {...props} />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="mt-6 border-l-2 border-accent/30 pl-5 text-[17px] leading-relaxed text-ink-2 italic"
      {...props}
    />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      className="rounded-md bg-surface px-1.5 py-0.5 font-mono text-[15px] text-ink"
      {...props}
    />
  ),
};

export function PostContent({ source }: { source: string }) {
  return (
    <div className="mx-auto max-w-2xl">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
