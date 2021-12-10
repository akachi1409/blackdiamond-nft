import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'
import {dataUp , dataDown } from '../../data/data-containers/data-Home.js';

import FooterHome from '../../layouts/Footer/FooterHome'
import SectionHeading from '../../components/SectionHeading'
import Preloader from '../../components/Preloader'
import SectionDemo from './SectionDemo'

const HomeContainer = () => {

    useEffect(() => {
      addRemoveClassBody('light-version')
    },[])

    return (
      <>
        <Preloader Title="Home" />
        <section className="demo section-padding-100-0" id="demo">
          <div className="container">
            <SectionHeading
                      
                      title='Choose a demo'
            />
            <SectionDemo dataUp={dataUp} dataDown={dataDown} />
          </div>
        </section>
        <div class="clearfix"></div>
        <FooterHome />
      </>
    );
}

export default HomeContainer;

