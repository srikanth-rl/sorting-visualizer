import { SelectOption } from "../types";

const INITIAL_ANIMATION_DELAY: number = 11; // ms
const INITIAL_ARRAY_SIZE: number = 100;

const COLOR = {
  RED: "red",
  GREEN: "greenyellow",
  YELLOW: "gold",
  PURPLE: "blueviolet",
  SORTED: ["forestgreen", "green", "darkgreen"],
  DEFAULT: ["silver", "darkgray", "gray"],
};

const OPTIONS: SelectOption[] = [
  { label: "Quicksort", value: "quickSort" },
  { label: "Mergesort", value: "mergeSort" },
  { label: "Heapsort", value: "heapSort" },
  { label: "Bubble Sort", value: "bubbleSort" },
  { label: "Insertion Sort", value: "insertionSort" },
  { label: "Selection Sort", value: "selectionSort" },
];

export { COLOR, INITIAL_ANIMATION_DELAY, INITIAL_ARRAY_SIZE, OPTIONS };
