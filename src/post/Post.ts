import { ObjectType, Field } from "type-graphql";

import { User } from "user";

@ObjectType()
class Post {
  @Field()
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date

  @Field()
  title: string;

  @Field()
  content: string | null;

  @Field()
  published: boolean;

  // @Field()
  // author: User;

  @Field()
  authorId: number;
}

export default Post;
