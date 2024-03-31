import { StyleSheet, Text, View ,Pressable, Button } from 'react-native'
import InputForm from '../Components/InputForm'
import {useState} from 'react'
import fonts from '../utils/globals/fuentes'
import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { loginSchema } from '../utils/validations/authSchema'
import { deleteSession, insertSession } from '../utils/db'

const Login = ({navigation}) => {

  const dispatch = useDispatch()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [errorEmail,setErrorEmail] = useState("")
  const [errorPassword,setErrorPassword] = useState("")
  const [triggerLogin] = useLoginMutation()


  const onSubmit = async () => {
    try {

      loginSchema.validateSync({email,password})
      const {data,error} = await triggerLogin({email,password})
    
      if(error){
        console.log(error.data.error.message)
        setModalVisible(true)
      }
      deleteSession()
      insertSession(data)
      dispatch(setUser({localId:data.localId,email:data.email,idToken:data.idToken}))

    } catch (error) {

      setErrorEmail("")
      setErrorPassword("")

      switch(error.path){
        case "email":
          setErrorEmail(error.message)
          break
        case "password":
          setErrorPassword(error.message)
          break
        default:
          break
      }

    }

  }


  return (
        <View style={styles.main}>
            <View style={styles.container}>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error={errorEmail}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={errorPassword}
                />
                <Button onPress={onSubmit} title="Iniciar Sesion"/>
                <Text style={styles.sub}>No tenes una cuenta?</Text>
                <Pressable onPress={()=> navigation.navigate("Register")} >
                    <Text style={styles.subLink}>Registro</Text>
                </Pressable>
            </View>
        </View>
  )
}

export default Login

const styles = StyleSheet.create({
    main:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    container:{
      width:"90%",
      backgroundColor:"green",
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:20
    },
    title:{
      fontSize:22,
      fontFamily:fonts.ProtestRiot
    },
    sub:{
      fontSize:14,
      fontFamily:fonts.ProtestRevolution
    },
    subLink:{
      fontSize:14,
      fontFamily:fonts.ProtestRevolution,
      color:"blue"
    }
})