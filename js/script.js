'use strict';

const num = prompt('Input number');
if (isNaN(num)) {
    alert('не число');
} else if (num[num.length - 1] == 1) {
    alert(`${num} год`);
} else if (num[num.length - 1] >= 2 && num[num.length - 1] <= 4){
    alert(`${num} года`);
} else if (num[num.length - 1] >= 5 && num[num.length - 1] <=9 || num[num.length - 1] == 0) {
    alert(`${num} лет`);
}
