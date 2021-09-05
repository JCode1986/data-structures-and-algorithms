'use strict';

var minKnightMoves = function(x, y) {
    const map = new Map();
    const memoize = (x, y) => {
        x = Math.abs(x);
        y = Math.abs(y);
        const key = `${x},${y}`;
        if (map.has(key)) {
            return map.get(key);
        }
        if (x + y === 0) {
            map.set(key, 0);
            return 0;
        }
        if (x + y === 2) {
            map.set(key, 2);
            return 2;
        }
        const value = Math.min(memoize(x - 1, y - 2), memoize(x - 2, y - 1)) + 1;
        map.set(key, value);
        return value;
    };
    return memoize(x, y); 
};