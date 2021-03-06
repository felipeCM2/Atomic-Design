import React from "react";

import { View, ImageProps } from "react-native";

import { styles } from "./styles";
import PostLikes from "../../atoms/PostLike";
import PostAboutProfileImage from "../../atoms/PostAboutProfileImage";

type Props = {
  likes: string;
  avatar: ImageProps;
};

const PostAbout: React.FC<Props> = ({ avatar, likes }) => {
  return (
    <View style={styles.postAbout}>
      <PostAboutProfileImage source={avatar} />
      <PostLikes value={likes} />
    </View>
  );
};

export default PostAbout;
