//routes/search.tsx

/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts"

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"]

interface Data {
    results: string[];
    query: string;
}

export const handler: Handlers<Data> = {
    GET(req, ctx){
        const url = new URL(req.url);
        const query = url.searchParams.get("q") || "";
        const results = NAMES.filter((name) => name.includes(query));
        return ctx.render({results, query});
    }
}

export default function Page({data}: PageProps<Data>) {
    const { results, query } = data;

    return (
        <div>
            <form action="">
                <input class={tw`m-6 px-2 border-2`} type="text" name="q" value={query} />
                <button class={tw`px-2 bg-blue-200 border-1 border-black`}type="submit">Search</button>
            </form>
            <ul>
              { results.length >0 ? 
                    results.map((name) => <li key={name}>{name}</li>) :
                    <p>No results Found!</p> 
              }
            </ul>
        </div>
    );
}