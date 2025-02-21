import type { Route } from "./+types/home";
import { Welcome } from "../Searchbar/Searchbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "google.com" }
  ];
}

export default function Home() {
  return <Welcome />;
}
