import "./helloWorld.scss";
class HelloWorld {
  btnClass = "hello-world-btn";
  render() {
    const body = document.querySelector("body");
    const btn = document.createElement("button");
    btn.innerHTML = "Hello World";
    btn.classList.add(this.btnClass);
    body.appendChild(btn);
    btn.onclick = function () {
      console.log("100", 100);
      const p = document.createElement("p");
      p.classList.add("hello-world-text");
      p.innerHTML = "Hello World";
      console.log("p", p);
      body.appendChild(p);
    };
  }
}

export default HelloWorld;
