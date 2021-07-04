import { Resolver, Query, Arg, Ctx } from "type-graphql";

import { Context } from "types";
import Post from "./Post";

@Resolver(Post)
class PostResolvers {
  @Query(() => Post, { nullable: true })
  async post(
    @Arg("id") id: number,
    @Ctx() { prisma }: Context
  ): Promise<Post | null> {
    const post = await prisma.post.findUnique({ where: { id } });

    return post;
  }
}

export default PostResolvers;
