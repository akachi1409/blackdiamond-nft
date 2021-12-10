import {useEffect} from 'react'

// import All Of Data
import Logo from '../../data/data-layout/Header/data-Logo.js';
import MenuInfo from '../../data/data-layout/Header/data-MenuInfo.json';
import dropdownItem from '../../data/data-layout/Header/data-dropdownItem.json';


import {Addshrink , moveSmooth} from "../../utils/"

import './header.css'

import Preloader from '../../components/Preloader'

import SecHeader from './SecHeader'


const Header = ({Title}) => {

  useEffect(() => {
      Addshrink()
  },[])

  useEffect(() => {
      moveSmooth()
  },[])

  return (
    <>
      <Preloader Title={Title} />
      <SecHeader Logo={Logo} dropdownItem={dropdownItem} MenuInfo={MenuInfo} />

    </>
  );
}

export default Header;