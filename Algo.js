let sentence = "At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, character by character, and to determine.";


function lengthSentence(sent) {
    let a = 0;
    let b = 0;
    let c = 0;

    a = sent.length;
    b = sent.split(' ').length;
    c = sent.match(/[aeiou]/gi).length;
    return console.log(`The length of the sentence is ${a} , The number of words in the sentenc is ${b} , The number of vowels in the sentence is ${c}`);
}

lengthSentence(sentence);
