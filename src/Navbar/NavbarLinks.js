import React,{ useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import NavbarDesign from './NavbarDesign';
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import ContactMe from "./Pages/ContactMe";

function NavbarLinks() {

    let value = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aspernatur ducimus enim tenetur eligendi beatae necessitatibus quos animi sit, eos maxime porro. Animi rem earum doloribus necessitatibus incidunt, quibusdam expedita sunt aliquid, fuga voluptatum veniam asperiores! Temporibus quae ut architecto. Vero, quia repudiandae quos dignissimos ullam exercitationem totam iste, nemo, nulla natus dicta dolores laboriosam minus. Voluptatum tenetur nisi quod, eligendi recusandae ut at reprehenderit dolore consequatur, impedit, rem consequuntur perspiciatis iure id itaque enim. Unde beatae temporibus nulla dolores eveniet architecto voluptatibus dolorem vero officiis, aspernatur ad, dicta quibusdam cum et minima saepe est blanditiis. Sit, error aperiam. Libero quasi delectus aliquid officiis rem. Enim amet incidunt accusamus sapiente nesciunt quasi nam harum quo, dolores laborum impedit id eveniet corrupti quaerat fuga optio ut eum ab culpa sed odit facere possimus minus tempore? Qui, tempora, nam sunt itaque provident voluptate eum voluptates officiis ipsa deleniti fuga impedit non minima fugit sapiente et dolor praesentium, id labore autem culpa veritatis voluptatibus tenetur! Tenetur dicta cupiditate vel quos dignissimos provident obcaecati beatae blanditiis, suscipit corrupti adipisci temporibus sed, consequuntur culpa iure. Molestiae rem iusto similique doloremque et distinctio, fugiat eum mollitia voluptatem nisi nulla doloribus beatae laborum. Eveniet rerum molestias repudiandae?";

    const [dataDesign, setDataDesign] = useState({
        color : "#BFA181"
    });

    const [divBack, setDivBack] = useState({
      backgroundColor : "white"
    });

  return (
    <Router>
        <div>
            <NavbarDesign design={dataDesign} toggleDesign={setDataDesign} divBack={divBack} setDivBack={setDivBack} />
            <Routes>
                <Route path="/aboutme" element={<AboutMe heading="ABOUT ME" data={value} design={dataDesign} divBack={divBack} /> } />
                <Route path="/skills" element={<Skills heading="SKILLS" data={value} design={dataDesign} divBack={divBack} /> }  />
                <Route path="/projects" element={<Projects heading="PROJECTS" data={value} design={dataDesign}  divBack={divBack} /> } />
                <Route path="/contactme" element={<ContactMe heading="CONTACT ME" data={value} design={dataDesign}  divBack={divBack} /> } />
                <Route path="/" element={<Home heading="HOME" data={value} design={dataDesign}  divBack={divBack} /> } />
            </Routes>
        </div>
    </Router>
  )
}

export default NavbarLinks;
