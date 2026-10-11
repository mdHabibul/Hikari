import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/katakana")({
  component: Katakana,
});

function Katakana() {
  return null;
}