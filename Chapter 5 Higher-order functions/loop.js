function loop(value, test, body, update) {
    if (!test(value)) {
        return;
    } else {
        body(value);
        update(value);
        loop(updated, test, body, update);
    }
}


loop(3, n => n > 0, n => n - 1, console.log);
