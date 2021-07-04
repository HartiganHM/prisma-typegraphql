import { Resolver, FieldResolver, Query, Root, Ctx, Arg } from "type-graphql";
import { Context } from "types";
import { User } from "user";

import Profile from "./Profile";

@Resolver(Profile)
class ProfileResolver {
  @FieldResolver(() => User)
  async user(
    @Root() profile: Profile,
    @Ctx() { prisma }: Context
  ): Promise<User | null> {
    const user = await prisma.profile
      .findUnique({ where: { id: profile.id } })
      .user();

    return user;
  }

  @Query(() => Profile)
  async profile(
    @Arg("id") id: number,
    @Ctx() { prisma }: Context
  ): Promise<Profile | null> {
    const profile = await prisma.profile.findUnique({ where: { id } });

    return profile;
  }

  @Query(() => [Profile])
  async profiles(@Ctx() { prisma }: Context): Promise<Profile[]> {
    const profiles = await prisma.profile.findMany();

    return profiles;
  }
}

export default ProfileResolver;
