import type { VFC } from "react";
import { proxy, useSnapshot } from "valtio";

export const countState = proxy({
  count: 0,
  increment: () => {
    countState.count++;
  },
  decrement: () => {
    countState.count--;
  },
});

export const Index: VFC = () => {
  const snap = useSnapshot(countState);

  const handleClick = countState.increment;

  return (
    <div>
      <h2 className="text-5xl">{snap.count}</h2>
      <button className="p-2" onClick={handleClick}>
        Count up!
      </button>
    </div>
  );
};
