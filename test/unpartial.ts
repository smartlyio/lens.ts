import * as lens from '../src';

export type UnPartial<T> = { [K in keyof Required<T>]: UnPartial<NonNullable<T[K]>> };

type A = { a?: { b?: { c?: number}}}
type Ap = UnPartial<A>

function maybe<T>(a: T): UnPartial<T> {
  return a as any;
}


const a: A = { a: {b: { c: 1}}}
const b: A = {}

const cFromA: number = lens.lens<Ap>().a.b.c.get()(maybe(a)) // checks
console.log(cFromA);

const cFromB: number = lens.lens<Ap>().a.b.c.get()(maybe(b)) // checks
console.log(cFromB);

//lens.lens<A>().a.b.c.get()(maybe(a)) // type error
