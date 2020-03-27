function chessboard(size) {
    for (let i = 0; i < size; i++) {
        let line = "";
        for (let j = 0; j < size; j++) {
            line += `# `;
        }
        (i % 2 === 0) ? console.log(line) : console.log(` ${line}`);
    }
}

chessboard(5);
