import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "which is Object oriented programming Lang",
    answerA: "Python",
    answerB: "Javascript",
    votesA: 9,
    votesB: 10,
  },
]);

export default PollStore;
