function zeroPad(num, width) {
    let padded = String(num);
    while (padded.length < width) {
        padded = "0" + padded;
    }
    return padded;
}

zeroPad(2, 3);