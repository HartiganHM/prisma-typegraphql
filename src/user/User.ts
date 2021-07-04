import { Post } from "post";
import { Profile } from "profile";
import { ObjectType, Field } from "type-graphql";

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

  @Field(() => Profile, { nullable: true })
  profile?: Profile;
}

export default User;
