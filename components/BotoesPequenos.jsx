import { TouchableOpacity, View, Image } from "react-native"

const BotoesPequenos = ({imagem}) => {
    return <View>
        <TouchableOpacity>
            <View>
                <Image source={imagem}></Image>
            </View>
        </TouchableOpacity>
    </View>
}

export default BotoesPequenos;