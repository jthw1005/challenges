function replaceBrackets(str: string) {
  return str.replace(/[{\[]/g, '(').replace(/[}\]]/g, ')');
}

export default replaceBrackets;
