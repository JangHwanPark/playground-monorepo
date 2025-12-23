import { insertionSort } from './exam01';
import { describe, it, expect } from 'vitest';

describe('insertionSort', () => {
  it('삽입정렬을 통해 배열을 정렬해야합니다.(should sort an array)', () => {
    const arr = [8, 4, 23, 42, 16, 15];
    insertionSort(arr);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });
});