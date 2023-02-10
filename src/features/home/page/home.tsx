import { Actions } from "../components/actions/actions";
import { Info } from "../components/info/info";
import { Keyboard } from "../components/keyboard/keyboard";

export function Home() {
  return (
    <section>
      <Info></Info>
      <div className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </div>
    </section>
  );
}