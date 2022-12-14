const numbers = new Array(1000).fill(1);

const each = (array, fn) => {
    let i = 0;
    const last = array.length - 1;
    const next = i => {
        setTimeout(() => {
            fn(array[i], i);
            if (i !== last) next(++i);
        }, 0);
    }
    next(i);
}

let k = 0;

const timer = setInterval(() => {
    console.log('next ', k++);
}, 10);

const begin = process.hrtime.bigint();

each(numbers, (item, i) => {
    console.log(i);
    if (i === numbers.length - 1) {
        clearInterval(timer);
        const diff = (process.hrtime.bigint() - begin) / 1000000n;
        console.log('Time(ms):', diff.toString());
    }
})
