// 보내주는 export 방식에 따라 {}을 사용한다.
// {} 모듈에서 export 한 것 중에 원하는 것을 가져온다.
// export default로 정의한 모듈은 {}안쓰고 가져올 수 있다.11
import a, {IUser, k} from './interface';

//타입 number
const add = (a: number, b: number) => {
    return a + b;
}

const sum: number = add(1, 2);
console.log(sum);

//배열
// let array: Array<string> = ['1', '2', '3'];
let array: string[] = ['1', '2', '3'];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// any => 타입을 단언 할 수 없다면, 모든 타입을 의미함.
let anyArray: any[] = [0, '일', false];

for (let i = 0; i < array.length; i++) {
    console.log(anyArray[i]);
}

let userArr: IUser[] = [
    {
        name: "aa",
        age: 85,
        isValid: true
    },
    {
        name: "bb",
        age: 75,
        isValid: false
    }
]

console.log(userArr);
console.log(k);
console.log(a);

//void 일반적으로 값을 반환하지 않는 함수에서 사용함.

function hello(message: string): void {
    console.log(`hello${message}`)
}

hello("타입스크립트");

//for-each 주어진 함수를 배열 요소 각각에 대해 실행합니다.

const forEachArray = ['a', 'b', 'c', 'd'];

forEachArray.forEach((data, index) => {
    console.log(data, index);
});

//map() 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

const mapArray = [1, 4, 9, 16, 25, 36];

const mapData = mapArray.map((data, index) => {
    return data * index;
});

console.log(mapData);