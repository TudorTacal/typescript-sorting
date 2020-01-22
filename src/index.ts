import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const collection = new NumbersCollection([10, 3, -5, 0]);
collection.sort();
console.log(collection);

const charactersCollection = new CharactersCollection('dcba');
charactersCollection.sort();
console.log(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(1);
linkedList.add(10);
linkedList.add(-27);
linkedList.add(-1);

linkedList.sort();
linkedList.print();