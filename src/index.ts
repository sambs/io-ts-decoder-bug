import * as t from 'io-ts/lib/Decoder'

export const query = t.type({
  a: t.number,
  b: t.type({
    c: t.number,
  }),
})

type Query = t.TypeOf<typeof query>

export function useIt(query: Query) {
  console.log(query.b.c)
}
