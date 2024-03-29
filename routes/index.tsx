/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-sm`}>
      <img
        src="/logo.svg"
        height="300px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`text-xl my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}
