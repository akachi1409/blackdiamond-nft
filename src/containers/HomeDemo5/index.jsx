import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'

import {
        SecTrustContent,
        Services,
        OurTeamInfo,
        OurBlogInfo
       } from '../../data/data-containers/HomeDemo5/data-HomeDemo5.js';


import PlatformIco from '../../data/data-containers/HomeDemo4/data-PlatformIco.json';

import SecPricesInfo from '../../data/data-containers/HomeDemo5/data-SecPricesInfo.json';
import FeaturesOtherTop from '../../data/data-containers/HomeDemo5/data-FeaturesOtherTop.json';
import FeaturesOtherDown from '../../data/data-containers/HomeDemo5/data-FeaturesOtherDown.json';
import TokenDistributionInfo from '../../data/data-containers/HomeDemo5/data-TokenDistributionInfo.json';
import RoadmapInfo from '../../data/data-containers/HomeDemo5/data-RoadmapInfo.json';
import FaqInfo from '../../data/data-containers/HomeDemo5/data-FaqInfo.json';

import {
        HomeDemo4Wwhitepaper,
        HomeDemo5HeroImg
        } from '../../utils/allImgs'

import './style/HomeDemo5.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from '../../components/HeroSection'
import AboutOther from '../../components/AboutOther'
import SecPrices from '../../components/SecPrices'

import Features2 from '../../components/Features2'
import SpreadMap from '../../components/SpreadMap'
import TokenDistribution from '../../components/TokenDistribution'
import Roadmap from '../../components/Roadmap'
import Faq from '../../components/Faq'
import OurTeam from '../../components/OurTeam'
import Subscribe from '../../components/Subscribe'
import OurBlog from '../../components/OurBlog'

import SecTrust from './SecTrust'
import OurServices from './OurServices'
import OurPlatform from './OurPlatform'



const HomeDemo4Container = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (
      <div>
        <Header Title="Home Template5" />
        <SecHeroSection
          ClassSec="hero-section moving-2 section-padding"
          ClassDiv="col-12 col-lg-6 col-md-12"
          specialHead="Creative landing page template"
          title="Decenteralized ICO and Crypto Trading Platform"
          link1="Whitepaper"
          link2="Buy Token"
          img={HomeDemo5HeroImg}
        />
        <div className="clearfix" />
        <OurServices data={Services} />
        <SecTrust data={SecTrustContent} />
        <div className="clearfix" />
        <AboutOther
            ClassTitle="gradient-text"
        />
        <OurPlatform data={PlatformIco} />
        <SecPrices
            ClassSec="features section-padding-0-100"
            data={SecPricesInfo}
        />
        <SpreadMap
            Wwhitepaper={HomeDemo4Wwhitepaper}
        />
        <TokenDistribution
            data={TokenDistributionInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <Roadmap
            data={RoadmapInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <Features2
            icoCounterClass="ico-counter dotted-bg mb-30"
            addOther={true}
            FeaturesOtherTop={FeaturesOtherTop}
            FeaturesOtherDown={FeaturesOtherDown}
        />
        <Faq
            data={FaqInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <OurTeam
            data={OurTeamInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <Subscribe />
        <OurBlog
            data={OurBlogInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <FooterPages
            ClassSpanTitle="gradient-text blue"
        />
      </div>
    );
};

export default HomeDemo4Container