import { Stack } from 'expo-router';
import { TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';

const Layout = () => {
  return <Stack>
    <Stack.Screen name="loginEmail" options={{ headerShown: false }} />
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="homepage" options={{ headerShown: false }} />
    <Stack.Screen name="chatpage" options={{ 
            title: "Chat - IA",
            headerStyle: {
                backgroundColor: '#fff',
                
            },
            headerShadowVisible: false,
            headerLeft: () => (
                <TouchableOpacity onPress={() => router.push("homepage")}>
                        <Image source={require("../assets/seta-voltar.png")}
                            style={{ width: 24, height: 24, marginLeft: 10, marginRight: 10 }}></Image>
                </TouchableOpacity>
            ),
    }} />
  </Stack>
};

export default Layout;
