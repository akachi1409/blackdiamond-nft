import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'

import {
        SecTrustContent,
        Services,
        SmartContractinfo,
        Features2InfoTop,
        Features2InfoDown,
        OurTeamInfo,
        OurBlogInfo
       } from '../../data/data-containers/HomeDemo1/data-HomeDemo1.js';

import OurJoinUsFirst from '../../data/data-containers/HomeDemo1/data-OurJoinUsFirst.json';
import OurJoinUsSecond from '../../data/data-containers/HomeDemo1/data-OurJoinUsSecond.json';
import PlatformIco from '../../data/data-containers/HomeDemo1/data-PlatformIco.json';
import SecPricesInfo from '../../data/data-containers/HomeDemo1/data-SecPricesInfo.json';
import TokenDistributionInfo from '../../data/data-containers/HomeDemo1/data-TokenDistributionInfo.json';
import RoadmapInfo from '../../data/data-containers/HomeDemo1/data-RoadmapInfo.json';
import FaqInfo from '../../data/data-containers/HomeDemo1/data-FaqInfo.json';

import {
        HomeDemo1Platform1,
        HomeDemo1Wwhitepaper,
        HomeDemo1About1
        } from '../../utils/allImgs'

import './style/HomeDemo1.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from '../../components/HeroSection'
import SecAbout from '../../components/SecAbout'
import AboutOther from '../../components/AboutOther'
import Features2 from '../../components/Features2'
import SpreadMap from '../../components/SpreadMap'
import SmartContract from '../../components/SmartContract'
import SecPrices from '../../components/SecPrices'
import TokenDistribution from '../../components/TokenDistribution'
import Roadmap from '../../components/Roadmap'
import Faq from '../../components/Faq'
import OurTeam from '../../components/OurTeam'
import Subscribe from '../../components/Subscribe'
import OurBlog from '../../components/OurBlog'

import JoinUs from './JoinUs'
import SecTrust from './SecTrust'
import OurServices from "./OurServices"
import OurPlatform from "./OurPlatform"

const HomeDemo1Container = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (
      <div>
        <Header Title="Home Template1" />
        <SecHeroSection
          ClassSec="hero-section moving section-padding"
          ClassDiv="col-12 col-lg-5 col-md-12"
          specialHead="Creative landing page template"
          title="Decenteralized Crypto Trading Platform"
          link1="Whitepaper"
          link2="Buy Token"
          img={HomeDemo1Platform1}
        />
        <div className="clearfix" />
        <SecAbout
          imgDwon={false}
          title="Decentralized Trading Platform"
          text="Connect blockchain to the real world and start crypto tading."
          img={HomeDemo1About1}
        />
        <JoinUs
          OurJoinUsFirst={OurJoinUsFirst}
          OurJoinUsSecond={OurJoinUsSecond}
        />
        <AboutOther />
        <SecTrust data={SecTrustContent} />
        <OurServices data={Services} />
        <SmartContract data={SmartContractinfo} />
        <OurPlatform data={PlatformIco} />
        <SecPrices data={SecPricesInfo} />
        <div className="clearfix" />
        <SpreadMap
            Wwhitepaper={HomeDemo1Wwhitepaper}
        />
        <TokenDistribution data={TokenDistributionInfo} />
        <Roadmap data={RoadmapInfo} />
        <Features2
            icoCounterClass="ico-counter mb-30"
            Features2InfoTop={Features2InfoTop}
            Features2InfoDown={Features2InfoDown}
        />
        <Faq data={FaqInfo} />
        <OurTeam data={OurTeamInfo} />
        <Subscribe />
        <OurBlog data={OurBlogInfo} />
        <FooterPages />
      </div>
    );
};

export default HomeDemo1Container