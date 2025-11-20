const HTML_SORT_CANVAS_ITEM = `
        <div class="sort-canvas-item">{{number}}</div>
`;

const populate = (element, itemKey, itemValue) => {
    return element.replace(`{{${itemKey}}}`, itemValue);
}


class UI {
    static htmlNumber;
    static arrLength;
    static maxItem;
    static htmlSortDiv = document.querySelector('.sort-canvas');
    static button = document.querySelector('#sort');
    static randomSortButton = document.querySelector('#randomSort');
    static input = document.querySelector('#arr');

    static getArraySize(arr) {
        this.arrLength = arr.length;
    }

    static getMax(arr) {
        console.log(Math.max(...arr));
        this.maxItem = Math.max(...arr);
    }

    static renderArr(nums) {
        this.htmlSortDiv.innerHTML = '';
        nums.forEach((num) => {
            this.addNumber(num);
        })

        this.htmlNumber = document.querySelectorAll('.sort-canvas-item');
    }
    
    static addNumber(num) {
        const numElement = document.createElement('div');
        numElement.setAttribute('className', '.sort-canvas-item');
        numElement.innerHTML = populate(HTML_SORT_CANVAS_ITEM, "number", num);
        
        this.htmlSortDiv.appendChild(numElement);
        this.htmlNumber = document.querySelectorAll('.sort-canvas-item');
        this.calculateNumberStyle(numElement);

        return numElement;
    }

    static getNumElement(num) {
        const element = Array.from(this.htmlNumber).find(item => {
            return item.textContent == num;
        });

        return element;
    }

    static getNumElementByIndex(i) {
        const element = Array.from(this.htmlNumber).find((_, index) => {
            return index == i;
        });

        return element;
    }

    static calculateNumberStyle(element) {
        const numberHeight = (Number(element.textContent) / this.maxItem) * this.htmlSortDiv.offsetHeight;
        const numberWidth = this.htmlSortDiv.offsetWidth / this.arrLength;
        
        const elementHeight = `${numberHeight}px`;
        const elementWidth = `${Math.round(numberWidth)}px`;

        element.style.height = elementHeight;
        element.style.width = elementWidth;
    }
    
    static changeNumberColor(element, color) {
        element.style.backgroundColor = color;
    }

    static iterateOverArray(fn) {
        this.htmlNumber.forEach((element) => {
            fn(element);
        })
    }
}
