import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createIconSetFromFontello } from 'react-native-vector-icons'

const customIcons = {};
const MaterialIconSet = createIconSetFromFontello(MaterialIcons, customIcons, MaterialIcons.ttf);
const FontAwesomeSet = createIconSetFromFontello(FontAwesome, customIcons, FontAwesome.ttf)
export { MaterialIconSet, FontAwesomeSet }
