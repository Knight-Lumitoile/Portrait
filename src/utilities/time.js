function sleep(second) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, second * 1000);
    });
}

export { sleep };
