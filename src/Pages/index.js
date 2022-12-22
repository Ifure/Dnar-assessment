import React from 'react'
import Overview from '../components/dashboard/overview'
import Layout from '../components/Layout'
import SearchBar from '../components/Navs/Searchbar'
import Navbar from '../components/Navs/Searchbar'

const IndexPage = () => {
  return (
    <Layout>
        <SearchBar/>
        <Overview/>
    </Layout>
  )
}

export default IndexPage