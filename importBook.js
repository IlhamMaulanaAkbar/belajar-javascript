import * as book from './book.js';

console.log(book.title);
console.log(book.getBookInfo());

// atau

import {title, author, year, getBookInfo} from './book.js';

console.log(title);
console.log(getBookInfo());
