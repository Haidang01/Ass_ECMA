import Header from "../components/Header"
import Skill from "../components/Skill"


export const AboutPage = () => {
  return `
  ${Header}
   <!-- About section -->
    <section
      id="about"
      class="section mt-3">
      <div class="container mt-5">
        <div class="row text-center text-md-left">
          <div class="col-md-3 border-none">
            <img
              src="/assets/imgs/man.jpg"
              alt=""
              class="img-thumbnail mb-4" />
          </div>
          <div class="pl-md-4 col-md-9">
            <h6 class="title">Hai Dang</h6>
            <p class="subtitle">Web Developer</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident, pariatur, aperiam aut autem voluptas odit. Odio ducimus
              delectus totam sed aliquam sequi praesentium mollitia, illum
              repudiandae quidem quod, magni magnam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
              eius, nam. Quo praesentium qui temporibus voluptatum, facilis
              aliquid eligendi fugiat beatae neque inventore non. Laborum
              repellendus consequatur ullam voluptatum asperiores.
            </p>
            <button class="btn btn-primary rounded mt-3">DOWNLOAD CV</button>
          </div>
        </div>
      </div>
    </section>
    ${Skill()}
  `
}
