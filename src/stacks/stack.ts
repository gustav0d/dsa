import { Nullable } from "../utils/nullable";

type StackItems<T> = {
  [key: number]: T;
};

class Stack<T> {
  private _count = 0;
  private _items: StackItems<T> = {};

  add(newElement: T) {
    this._items[this._count] = newElement;
    this._count++;
  }

  peek(): Nullable<T> {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._items[this._count];
  }

  pop(): Nullable<T> {
    if (this.isEmpty()) {
      return undefined;
    }

    const removedElement = this._items[this._count];
    this._count--;
    delete this._items[this._count];
    return removedElement;
  }

  isEmpty() {
    return this._count === 0;
  }

  clear() {
    this._items = {};
    this._count = 0;
  }
}
