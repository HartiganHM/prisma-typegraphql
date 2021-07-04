import { ObjectType, Field, ID } from "type-graphql";

import { User } from "user";

@ObjectType()
class Post {
  @Field(() => ID)
  id: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date

  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  content: string | null;

  @Field()
  published: boolean;

  @Field(() => User, { nullable: true })
  author?: User | null

  @Field()
  authorId: number;
}

export default Post;
