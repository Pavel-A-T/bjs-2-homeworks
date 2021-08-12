function cachingDecoratorNew(func) {
    let cashe = {};
    let counter = 0;

    function wrapper(...args) {
        const hash = args.join(",");
        if (hash in cashe) {
            return "Из кэша: " + cashe[hash];
        }
        if (counter >= 5) {
            delete cashe[Object.keys(cashe)[0]];
        }
        counter++;
        cashe[hash] = func(...args);
        return "Вычисляем: " + cashe[hash];
    }

    return wrapper;
}

function debounceDecoratorNew(func, timeout) {
    let flag = false;
    return function (...args) {
        if (flag) return;
        func.apply(this, args);
        flag = true;
        setTimeout(function () {
            flag = false;
            func.apply(this, args);
        }, timeout);
    }
}

function debounceDecorator2(func, timeout) {
    let flag = false;

    function wrapper(...args) {
        if (flag) return;
        wrapper.count++;
        func.apply(this, args);
        flag = true;
        setTimeout(function () {
            flag = false;
            func.apply(this, args);
        }, timeout);
    }

    wrapper.count = 0;
    return wrapper;
}
