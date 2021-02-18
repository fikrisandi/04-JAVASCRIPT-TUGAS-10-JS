var counter = 1;
var x;

function pengulangan() {
    for (x = 1; x <= 10; x++) {
        console.log(counter);
        counter++;
        counter = counter + x;
    }
}

pengulangan();