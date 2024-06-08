
const numbers = [61, 43, 994, 355, 213, 1907, 1264, 244, 376, 1268, 599, 853, 54, 374, 297, 93, 1242, 880, 1246, 973, 375, 501, 32, 229, 1441, 95, 359, 591, 387, 267, 55, 673, 226, 257, 975, 678, 44, 36, 58, 1340, 84, 241, 1808, 509, 592, 220, 233, 590, 502, 594, 224, 245, 49, 350, 852, 504, 1473, 299, 30, 995, 1671, 45, 243, 253, 1767, 1809, 20, 260, 263, 972, 91, 62, 962, 964,98, 353, 354, 34, 39, 967, 238, 7, 1345, 855, 237, 1, 3428, 974, 254, 357, 686, 86, 850, 57, 98, 269, 242, 3395, 506, 225, 53, 965, 996, 856, 371, 266, 231, 961, 218, 370, 423, 352, 230, 222, 261, 389, 265, 60, 223, 960, 356, 212, 596, 52, 691, 258, 373, 377, 976, 1664, 264, 674, 977, 227, 234, 31, 505, 64, 687, 47, 672, 971, 968, 92, 6809, 507, 675, 595, 48, 351, 1787, 262, 7, 250, 40, 503, 685, 378, 239, 966, 268, 1670, 248, 221, 1784, 1869, 1758, 381, 65, 963, 421, 386, 252, 249, 597, 1, 232, 992, 66, 886, 255, 1649, 228, 690, 676, 1868, 216, 993, 90, 256, 998, 380, 598, 298, 679, 63, 258, 33, 689, 385, 236, 235, 420, 56, 41, 46, 94, 593, 240, 291, 372, 251, 27, 82, 1876, 81]
function compareNumbers(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
 const numbers2 = numbers.sort(compareNumbers);
  
const telephoneCode = document.querySelector('#telephone-code');

numbers2.forEach(item => {
    const option = document.createElement('option');
    option.textContent = '+' + item;
    option.value = '+' + item;
    telephoneCode.append(option);
}) 

const button = document.querySelector('button');

button.addEventListener('click', () => { 
localStorage.name = document.querySelector('#name').value;
localStorage.surname = document.querySelector('#surname').value;
localStorage.patronomic = document.querySelector('#patronymic').value;
localStorage.code = document.querySelector('#telephone-code').value;
localStorage.number = document.querySelector('#number').value;
console.log(localStorage);
})
