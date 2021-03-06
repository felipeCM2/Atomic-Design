import React from "react";

import { Image, ImageProps } from "react-native";
import { styles } from "./styles";

const PostAvatar: React.FC<ImageProps> = ({ ...rest }) => (
  <Image style={styles.postAvatar} {...rest} />
);

export default PostAvatar;
