
export function formatarValor(valor: number) {
	return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function cortarString(str: string, max_length: number, posfix: string = "..."): string {
  if (str.length <= max_length) {
    return str;
  }

  const actualMaxLength = Math.max(max_length - posfix.length, 0);
  const truncated = str.substring(0, actualMaxLength).trim();
  
  return truncated + posfix;
}