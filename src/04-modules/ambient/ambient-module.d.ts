// if you do not want to port your entire module library...
// same thing as ambient namespaces, but this time with a specific syntax for modules 
// (that need to be loaded dynamically)

// from the TypeScript docs:

declare module "my_url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?: any, slashesDenoteHost?: any): Url;
}

declare module "my_path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export var sep: string;
}