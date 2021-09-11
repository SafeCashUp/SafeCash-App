import {Montserrat_400Regular,
        Montserrat_100Thin_Italic,
        Montserrat_600SemiBold,
        Montserrat_900Black,
        Montserrat_800ExtraBold} from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';

export default function CustomText() {
        const fonts = useFonts({
            Montserrat_400Regular,
            Montserrat_100Thin_Italic,
            Montserrat_600SemiBold,
            Montserrat_800ExtraBold,
            Montserrat_900Black
        });

        if(!fonts) {
            return <AppLoading />
        }
}