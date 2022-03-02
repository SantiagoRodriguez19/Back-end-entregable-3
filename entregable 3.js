const Test = (word, interval, cb) => {
    return new Promise((resolve) => {

        const wordTest = word.split(' ');
        let j = wordTest.length;
        let i = 0


        const recorrePalabra = () => {
            if (i < j) {
                console.log(wordTest[i]);
                i++;
            } else {
                clearInterval(timer);
                cb();

            }
        }
        const timer = setInterval(() => { recorrePalabra(word) }, interval || 1000);
        setTimeout(() => {
            resolve(j)
        }, (interval * j) + 2000);



    }
    )
}

const procesar = async () => {
    let wordCount = 0;
    let text = ['Primero calentamos el aceite', 
    'Segundo rompemos los huevos', 
    'Tercero los freimos'];
    let intervals = ['500', '1000', '500', '500'];



    for (let i = 0; i < text.length; i++) {
        wordCount += await Test(text[i], intervals[i], () => { console.log('Continuamos') });
    }
    console.log(wordCount);
    console.log("fin proceso")
}

procesar()