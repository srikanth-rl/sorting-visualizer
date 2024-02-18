import { COLOR } from "../other/constants";
import { AnimationGenerator, TAnimation } from "../types";

// Durstenfeld shuffle algorithm
function shuffle(arr: number[]): number[] {
  const shuffledArray = [...arr];
  for (let i = 0; i < shuffledArray.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return [...shuffledArray];
}

function generateArray(size: number): number[] {
  const newArray = [];
  for (let i = 1; i < size + 1; i++) {
    newArray.push(i);
  }
  return shuffle(newArray);
}

function getRandomIntFromRange(min: number, max: number): number {
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);
  return Math.floor(Math.random() * (intMax - intMin + 1) + intMin);
}

function sleep(delay: number): Promise<number> {
  return new Promise<number>((resolve) => setTimeout(resolve, delay));
}

function* swap(arr: number[], i: number, j: number): AnimationGenerator {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;

  yield colorIndices([
    [i, COLOR.RED],
    [j, COLOR.GREEN],
  ]);

  yield replaceIndices([
    [i, arr[i]],
    [j, arr[j]],
  ]);

  yield clearIndices([i, j]);
}

function* partition(
  arr: number[],
  startIdx: number,
  endIdx: number
): Generator<TAnimation, number, any> {
 
  let p = startIdx;

  for (let i = startIdx; i < endIdx; i++) {
    if (arr[i] < arr[endIdx]) {
      yield* swap(arr, i, p);
      p++;
    }
  }
  yield clearIndices([p]);
  yield* swap(arr, p, endIdx);
  yield colorIndices([[p, COLOR.PURPLE]]);
  
  return p;
}

function logBase2(n: number): number {
  return Math.floor(Math.log(n) / Math.log(2));
}

function colorIndices(indexColorPairs: [number, string][]) {
  return { toColor: indexColorPairs } as TAnimation;
}
function replaceIndices(indexValuePairs: [number, number][]) {
  return { toReplace: indexValuePairs } as TAnimation;
}
function clearIndices(indices: number[]) {
  return { toClear: indices } as TAnimation;
}

function getShuffleDelay(arraySize: number): number {
  return (0 * 100) / arraySize;
}
function getSortedDelay(arraySize: number): number {
  return (10 * 100) / arraySize;
}

export {
  getRandomIntFromRange,
  sleep,
  generateArray,
  shuffle,
  swap,
  partition,
  logBase2,
  colorIndices,
  clearIndices,
  replaceIndices,
  getShuffleDelay,
  getSortedDelay,
};
