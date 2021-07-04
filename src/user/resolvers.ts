import { Resolver, Query, Arg, Ctx } from "type-graphql";

import { Context } from "types";
import User from "./User";

@Resolver(User)
class UserResolvers {
  //* GQL Type of single User
  @Query(() => User, { nullable: true })
  async user(
    //* Arg of id with TS type number
    @Arg("id") id: number,
    @Ctx() { prisma }: Context
  ): //* TS return type of User or null (if user does not exist) !important
  Promise<User | null> {
    //* Use Prisma generated resolvers to access DB
    const user = await prisma.user.findUnique({ where: { id } });

    return user;
  }
  //* GQL Types of an array of Users
  @Query(() => [User], { nullable: true })
  //* TS return type of Promise that resolves to an array of Users !important
  async allUsers(@Ctx() { prisma }: Context): Promise<User[]> {
    //* Use Prisma generated resolvers to access DB
    const allUsers = await prisma.user.findMany();

    return allUsers;
  }
}

export default UserResolvers;
