var censorwords=["sad","bad","mad"];
var customCensoredWords=[];
function censor(instr) {
	for(i in censorwords){
		instr=instr.replace(censorwords[i],"****");
	}
	for(i in customCensoredWords){
		instr=instr.replace(customCensoredWords[i],"****");
	}
	return instr;
}
function addCensoredWord(word){
	customCensoredWords.push(word);
}
function getCensoredWords(){
	return censorwords.concat(customCensoredWords);
}
exports.censor=censor;
exports.addCensoredWord=addCensoredword;
exports.getCensoredWords=getCensoredWords;