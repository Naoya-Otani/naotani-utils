const romanValues: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const arabicValues: [number, string][] = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export function romanToArabic(roman: string): number {
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = romanValues[roman[i]];
    const next = romanValues[roman[i + 1]];
    if (next && current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  return result;
}

export function arabicToRoman(arabic: number): string {
  let result = "";
  for (const [value, symbol] of arabicValues) {
    while (arabic >= value) {
      result += symbol;
      arabic -= value;
    }
  }
  return result;
}

export function determineInputType(
  input: string,
): "arabic" | "roman" | "other" {
  if (/^[0-9]+$/.test(input)) {
    return "arabic";
  } else if (/^[IVXLCDM]+$/.test(input)) {
    return "roman";
  } else {
    return "other";
  }
}

type ProcessInputStatus = Success | Failure | Waiting;
type Success = {
  status: "success";
  result: string | number;
};
type Failure = {
  status: "failure";
  errorMessage: string;
};
type Waiting = {
  status: "waiting";
};

export function processInput(input: string): ProcessInputStatus {
  if (input.trim() === "") {
    return {
      status: "waiting",
    };
  }
  const inputType = determineInputType(input);

  switch (inputType) {
    case "arabic":
      const arabic = parseInt(input, 10);
      if (arabic > 9999) {
        return {
          status: "failure",
          errorMessage: "10000以上のアラビア数字は変換できません。",
        };
      }
      if (arabic <= 0) {
        return {
          status: "failure",
          errorMessage: "0以下の数字は変換できません。",
        };
      }
      return {
        status: "success",
        result: arabicToRoman(arabic),
      };
    case "roman":
      try {
        const arabicResult = romanToArabic(input);
        return {
          status: "success",
          result: arabicResult,
        };
      } catch (error) {
        return {
          status: "failure",
          errorMessage: "無効なローマ数字です。",
        };
      }
    case "other":
      return {
        status: "failure",
        errorMessage: "有効なアラビア数字またはローマ数字ではありません。",
      };
  }
}
