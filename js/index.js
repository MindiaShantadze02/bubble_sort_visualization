let ARR = [];
const random = Math.floor(Math.random() * 101);

UI.input.addEventListener('keyup', (ev) => {
    const { value } = ev.target;

    if (!/[0-9]/.test(ev.key)) return;

    ARR = value.split(",")
        .filter(item => {
            if (item && item !== ',') {
                return item;
            }
        })
        .map((item) => {
            item = item.trim();
            return Number(item);
        })

        console.log(ARR);
});

const isNumArr = (arr) => {
    arr.forEach((item) => {
        if (typeof item != 'number') {
            return false;
        }
    })

    return true;
}

const element = UI.renderArr(ARR);
UI.getArraySize(ARR);

UI.randomSortButton.addEventListener('click', () => {
    ARR = Array.from({ length: 35 }, () => Math.floor(Math.random() * 101));
    sort();
})

UI.button.addEventListener('click', () => {
    sort();
})

UI.renderArr(ARR);

const sort = () => {
    if (ARR.length === 0 || !isNumArr || ARR.length > 40) return;
    UI.getMax(ARR);

    let finalTime = 0;
    for (let i = 0; i < ARR.length - 1; i++) {
        setTimeout(() => {
            for (let j = 0; j < ARR.length - 1 - i; j++) {
                if (ARR[j] > ARR[j + 1]) {
                    let temp = ARR[j];
                    ARR[j] = ARR[j + 1];
                    ARR[j + 1] = temp;
                }
            }
            UI.renderArr(ARR);
            UI.getNumElementByIndex(ARR.length - 1 - i).style.backgroundColor = 'green';
        }, i * 500)

        finalTime = i;
    }

    setTimeout(() => {
        UI.iterateOverArray((element) => {
            element.style.backgroundColor = 'green';
        });
    }, finalTime * 500);
}
