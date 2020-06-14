import * as t from 'io-ts/lib/Decoder';
export declare const query: t.Decoder<{
    a: number;
    b: {
        c: any;
    };
}>;
declare type Query = t.TypeOf<typeof query>;
export declare function useIt(query: Query): void;
export {};
