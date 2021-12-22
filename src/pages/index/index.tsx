import type { VFC } from "react";
import { proxy } from "valtio";

const state = proxy({ count: 0, text: "hello" });

export const Index: VFC = () => {
  const handleClick = () => {
    ++state.count, 1000;
  };

  return (
    <div>
      <h2>Index</h2>
      <button className="p-2" onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
};
