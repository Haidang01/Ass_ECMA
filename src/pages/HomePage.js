import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Project from "../components/Project"
import Service from "../components/Service"


export const HomePage = () => {
    return `
 <!-- Page Header -->
 ${Header}
    <header class="header" id="home">
        <div class="container">
            <div class="infos">
                <h6 class="subtitle">Hello,I'm</h6>
                <h6 class="title">Hai Dang</h6>
                <p>Web developer</p>

                <div class="buttons pt-3">
                    <button class="btn btn-primary rounded">HIRE ME</button>
                    <button class="btn btn-dark rounded">DOWNLOAD CV</button>
                </div>      

                <div class="socials mt-4">
                    <a class="social-item" href="javascript:void(0)"><i class="ti-facebook"></i></a>
                    <a class="social-item" href="javascript:void(0)"><i class="ti-google"></i></a>
                    <a class="social-item" href="javascript:void(0)"><i class="ti-github"></i></a>
                    <a class="social-item" href="javascript:void(0)"><i class="ti-twitter"></i></a>
                </div>
            </div>              
            <div class="img-holder mr-5">
                <img  style="width:430px;border-radius:50%; object-fit:cover;margin-bottom:70px"  src="assets/imgs/man2.png" alt="">
            </div>      
        </div>  

        <!-- Header-widget -->
        <div class="widget">
            <div class="widget-item">
                <h2>99+</h2>
                <p>Happy Clients</p>
            </div>
            <div class="widget-item">
                <h2>99+</h2>
                <p>Project Completed</p>
            </div>
            <div class="widget-item">
                <h2>99+</h2>
                <p>Awards Won</p>
            </div>
        </div>
    </header>
    <!-- End of Page Header -->
    ${Service()}
    ${Project()}
    ${Contact()}
    ${Footer()}
  `
}
