const comment = "TypeScript is a strongly typed programming language"

export function shortenComment(commentt: string): string {
  return commentt
    .split(" ")
    .filter((m) => m.length >= 5 && m.length <= 10)
    .join(" ");
}
