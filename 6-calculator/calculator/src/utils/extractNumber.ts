function extractNumber(text: string) {
  const match = text.match(/\d+/);
  return match ? match[0] : null;
}

export { extractNumber };
