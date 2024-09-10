function printHello(event) {
  console.log("Hello Shubham");
  console.log(event);
}
function printBye() {
  console.log("Bye!");
}
export default function Button() {
  return (
    <div>
      <button onMouseOver={printHello}>Click Me!</button>
      <p onMouseOver={printBye}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eius
        exercitationem fuga. Quis rerum enim atque laudantium eaque tenetur quam
        inventore tempore, exercitationem totam quia itaque corporis aut libero
        odit.
      </p>
    </div>
  );
}
