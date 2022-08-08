export function stops_word(n) {
  const text_forms = ["пересадка", "пересадки", "пересадок"];

  n = Math.abs(n) % 100;
  let n1 = n % 10;
  let result = `${n} `;

  if (n === 0) return "Без пересадок";

  if (n > 10 && n < 20) result += text_forms[2];
  else if (n1 > 1 && n1 < 5) result += text_forms[1];
  else if (n1 === 1) result += text_forms[0];
  else result += text_forms[2];

  return result;
}
