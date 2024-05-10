import { FC, ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
}

interface TypographyListProps {
  children: string[];
}

export const TypographyH1: FC<TypographyProps> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};

export const TypographyH2: FC<TypographyProps> = ({ children }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};

export const TypographyH3: FC<TypographyProps> = ({ children }) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};

export const TypographyH4: FC<TypographyProps> = ({ children }) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
};

export const TypographyP: FC<TypographyProps> = ({ children }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};

export const TypographyBlockquote: FC<TypographyProps> = ({ children }) => {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
};

export const TypographyList: FC<TypographyListProps> = ({ children }) => {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {children.map((element) => (
        <li key={element}>{element}</li>
      ))}
    </ul>
  );
};

export const TypographyInlineCode: FC<TypographyProps> = ({ children }) => {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
};

export const TypographyLead: FC<TypographyProps> = ({ children }) => {
  return <p className="text-xl text-muted-foreground">{children}</p>;
};

export const TypographyLarge: FC<TypographyProps> = ({ children }) => {
  return <div className="text-lg font-semibold">{children}</div>;
};

export const TypographySmall: FC<TypographyProps> = ({ children }) => {
  return <small className="text-sm font-medium leading-none">{children}</small>;
};

export const TypographyMuted: FC<TypographyProps> = ({ children }) => {
  return <p className="text-sm text-muted-foreground">{children}</p>;
};
