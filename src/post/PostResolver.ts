import { Resolver, FieldResolver, Query, Arg, Ctx, Root } from "type-graphql";

import { Context } from "types";
import { User } from "user";
import Post from "./Post";

@Resolver(Post)
class PostResolver {
  @FieldResolver()
  async author(@Root() post: Post, @Ctx() { prisma }: Context): Promise<User | null> {
    const author = await prisma.post
      .findUnique({ where: { id: post.id } })
      .author();

    return author;
  }

  @Query(() => Post, { nullable: true })
  async post(
    @Arg("id") id: number,
    @Ctx() { prisma }: Context
  ): Promise<Post | null> {
    const post = await prisma.post.findUnique({ where: { id } });

    return post;
  }
}

export default PostResolver;
