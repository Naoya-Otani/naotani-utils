export interface TextStats {
  characters: number;
  lines: number;
  spaces: number;
  newlines: number;
  manuscriptPages: number;
}
export const calculateStats = (input: string): TextStats => {
  const characters = input.length;
  const lines = input.trim() ? input.trim().split("\n").length : 0;
  const halfWidthSpaces = (input.match(/\s/g) || []).length;
  const fullWidthSpaces = (input.match(/\u3000/g) || []).length;
  const tabs = (input.match(/\t/g) || []).length;
  const spaces = halfWidthSpaces + fullWidthSpaces + tabs;
  const newlines = (input.match(/\n/g) || []).length;
  const charactersWithoutSpaces = characters - spaces;
  const manuscriptPages = Math.ceil(charactersWithoutSpaces / 400);

  return {
    characters,
    lines,
    spaces,
    newlines,
    manuscriptPages,
  };
};
