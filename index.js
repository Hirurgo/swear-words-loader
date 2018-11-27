const normalWordsMap = {
  fuck: 'is amazing',
  fucking: 'interesting',
  shit: 'failure',
  damn: 'sadly',
  bitch: 'I don\'t think so',
};

const replaceSwearWords= word => normalWordsMap[word.toLowerCase()] || word;

module.exports = function(source, map) {
  this.cacheable();

  const result = source
    .split(' ')
    .map(replaceSwearWords)
    .join(' ')

  this.callback(
    null,
    "module.exports = " + JSON.stringify(result),
    map
  );
};
