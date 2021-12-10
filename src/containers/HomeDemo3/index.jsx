import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'

import {
        TokenFeaturesTop,
        TokenFeaturesMed,
        TokenFeaturesDown,
        SmartContractinfo,
        OurTeamInfo,
        OurBlogInfo
       } from '../../data/data-containers/HomeDemo3/data-HomeDemo3.js';

import OurPatformInfo from '../../data/data-containers/HomeDemo3/data-OurPatformInfo.json';

import FeaturesOtherTop from '../../data/data-containers/HomeDemo3/data-FeaturesOtherTop.json';
import FeaturesOtherDown from '../../data/data-containers/HomeDemo3/data-FeaturesOtherDown.json';
import TokenDistributionInfo from '../../data/data-containers/HomeDemo3/data-TokenDistributionInfo.json';
import RoadmapInfo from '../../data/data-containers/HomeDemo3/data-RoadmapInfo.json';
import FaqInfo from '../../data/data-containers/HomeDemo3/data-FaqInfo.json';

import {
        HomeDemo3Wwhitepaper,
        HomeDemo3About1
        } from '../../utils/allImgs'

import './style/HomeDemo3.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from '../../components/HeroSection'
import SecAbout from '../../components/SecAbout'
import FuelFeatures from '../../components/FuelFeatures'
import Features2 from '../../components/Features2'
import SpreadMap from '../../components/SpreadMap'
import SmartContract from '../../components/SmartContract'
import TokenDistribution from '../../components/TokenDistribution'
import Roadmap from '../../components/Roadmap'
import Faq from '../../components/Faq'
import OurTeam from '../../components/OurTeam'
import Subscribe from '../../components/Subscribe'
import OurBlog from '../../components/OurBlog'

import OurPlatform from './OurPlatform'
import TokenFeatures from "./TokenFeatures"



const HomeDemo3Container = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (
      <div>
        <Header Title="Home Template3" />
        <SecHeroSection
          ClassSec="hero-section de-3 section-padding"
          ClassDiv="col-12 col-lg-5 col-md-12"
          specialHead="Creative landing page template"
          title="Decenteralized Crypto Trading Platform"
          link1="Whitepaper"
          link2="Buy Token"
          HomeDemo1Or4Or5Or6={false}
        />
        <div className="clearfix" />
        <OurPlatform
            data={OurPatformInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <SecAbout
          imgDwon={true}
          title=" Best Trading Experience "
          text=" Trade crypto currency and refer new members to get bounes."
          img={HomeDemo3About1}
        />
        <FuelFeatures />
        <TokenFeatures
            TokenFeaturesTop={TokenFeaturesTop}
            TokenFeaturesMed={TokenFeaturesMed}
            TokenFeaturesDown={TokenFeaturesDown}
            ClassSpanTitle="gradient-text blue"
        />
        <SmartContract data={SmartContractinfo} />
        <div className="clearfix" />
        <SpreadMap
            Wwhitepaper={HomeDemo3Wwhitepaper}
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

export default HomeDemo3Container