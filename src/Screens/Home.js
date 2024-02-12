import Header from '../Components/Header'
import Categories from '../Components/Categories'

const Home = ({selectedCategoryState}) => {
    
  return (
    <>
        <Header title="Home"/>
        <Categories selectedCategoryState={selectedCategoryState}/>
    </>
  )
}

export default Home

