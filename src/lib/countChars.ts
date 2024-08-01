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
  const spaces = (input.match(/[\s\u3000]/g) || []).length;
  const newlines = (input.match(/\n/g) || []).length;
  const manuscriptPages = Math.ceil(characters / 400);

  return {
    characters,
    lines,
    spaces,
    newlines,
    manuscriptPages,
  };
};
