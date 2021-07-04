import { ObjectType, Field, ID } from "type-graphql";
import { User } from "user";

@ObjectType()
class Profile {
  @Field(() => ID)
  id: number;

  @Field(() => String, { nullable: true })
  bio?: string | null;

  @Field(() => User, { nullable: true })
  user?: User | null;

  @Field()
  userId: number;
}

export default Profile;
