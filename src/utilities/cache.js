const loadCache = (key) => {
    const cachedValue = localStorage.getItem(key);
    return cachedValue ? JSON.parse(cachedValue) : null;
};

const saveCache = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export { loadCache, saveCache };
