export function getFinalState(baseState, queue) {
  let finalState = baseState;

  queue.map((q) =>
    typeof q === 'function' ? (finalState = q(finalState)) : (finalState = q)
  );

  return finalState;
}
