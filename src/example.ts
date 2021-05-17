interface MyArray<T> {
  [n: number]: T;

  map<U>(fn: (el: T, i: number, arr: T[]) => U): U[];

  reduce<U, V>(fn: (acc: U, arg: T, i: number, arr: Array<T>) => U, initialState: V): U | V;
}

const array: MyArray<number> = [3, 3, 5];

array.map((i) => i + 1);
array.map((i) => `${i} + ''`);

function concat<T, U>(arg: T, arg1: U): string {
  return `${arg} ${arg1}`;
}

concat('gdfg', 3);
concat('gdf', [3, 5]);

const myHometask: MyHometask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

interface MyObject {
  howIDoIt: string;
  simeArray: [string, number];
}

interface MyHometask {
  howIDoIt: string;
  simeArray: Array<string | number>;
  withData: Array<MyObject>;
}

console.log(myHometask);
