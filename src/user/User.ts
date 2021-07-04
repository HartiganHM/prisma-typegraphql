import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field(() => String, { nullable: true })
  name?: string | null
}

export default User;