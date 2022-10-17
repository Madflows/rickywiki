import { Characters } from "../components/Characters";

export default function Home() {
  return (
    <div className="pt-[10vh] pb-[4rem]">
      <h2 className="text-3xl text-center py-4 font-bold">Rick and Morty</h2>
      <Characters />
    </div>
  )
}
