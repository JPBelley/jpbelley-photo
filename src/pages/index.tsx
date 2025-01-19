import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from "../components/layout/layout";
import HeroCarousel from "../components/hero-carousel/hero-carousel";
import Columns from "../components/columns";



// Import Swiper styles
import 'swiper/css';
import '../styles/index.scss';

const IndexPage: React.FC<PageProps> = () => {


  return (
    <Layout>
      {/* Hero */}
      {/* <Hero>JP Belley</Hero> */}
      <HeroCarousel />

      {/* Portfolio */}
      {/* <h2 className="text-center my-16">Portfolio</h2> */}
      {/* <Columns /> */}
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
