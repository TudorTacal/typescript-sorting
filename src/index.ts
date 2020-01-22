import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const collection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(collection);
// sorter.sort();
// console.log(sorter.collection);

// const charactersCollection = new CharactersCollection('dcba');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(1);
linkedList.add(10);
linkedList.add(-27);
const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();