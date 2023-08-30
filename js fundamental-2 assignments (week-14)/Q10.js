function countWords(sentence) {
    const words = sentence.split(/\s+/);
    const wordCounts = words.reduce((counts, word) => {
      counts[word] = (counts[word] || 0) + 1;
      return counts;
    }, {});
    return wordCounts;
  }
  
  const sentence = "please please submit your assignment on time your assignment is important";
  const wordCounts = countWords(sentence);
  
 
  Object.keys(wordCounts).forEach(word => {
    const count = wordCounts[word];
    console.log(`'${word}' = ${count} times.`);
  });
  