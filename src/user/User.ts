import { Post } from 'post';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
class User {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field(() => String, { nullable: true })
  name?: string | null;

  @Field(() => [Post], { nullable: true })
  posts?: Post[];
}

export default User;