import { FlatList} from 'react-native'
import { useGetCategoriesQuery } from '../app/services/shop'
import CardCategory from './CardCategory'
import LoadingSpinner from './LoadingSpinner';




const Categories = ({navigation}) => {
  const {data:categories,isError,isLoading,isSuccess} = useGetCategoriesQuery()

  const onRetry = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    })
  }

  if(isLoading) return <LoadingSpinner/>
  
  
    return (
      <FlatList
      data={categories}
      keyExtractor={item => item}
      renderItem={({item})=> <CardCategory item={item} navigation={navigation} />}
      />
    )
  }
  

export default Categories
