// Type extensions for react-native-reanimated to support string-based transforms
import 'react-native-reanimated';

declare module 'react-native-reanimated' {
  export interface AnimatedTransform {
    rotateX?: string;
    rotateY?: string;
    rotateZ?: string;
    rotate?: string;
  }
}
