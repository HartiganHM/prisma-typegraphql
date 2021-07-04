import 'reflect-metadata';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
import { buildSchemaSync } from 'type-graphql';

import { Context } from 'types';
import { UserResolvers } from 'user';

const PORT = 4000;
const prisma = new PrismaClient();

//* Build schema with resolvers through Type GraphQL
const schema = buildSchemaSync({
  resolvers: [UserResolvers],
});
const server = new ApolloServer({
  schema,
  //* Prisma must be privided to other resolvers through context
  context: (): Context => ({ prisma }),
});

// * App listen on port 4000
server.listen(PORT, () =>
  console.log(`🚀  Server running on http://localhost:${PORT}/graphql`),
);

// ---------------------------- Other Implementations Below ----------------------------

//* For implementation #3
//! Should be top-most import
// import 'reflect-metadata';
//! Requires re-implementation of typegraphql generator in schema.prisma
// import { resolvers } from 'prisma/generated/type-graphql';
// import { ApolloServer } from 'apollo-server';
// import { Context } from 'apollo-server-core';
// import { buildSchemaSync } from 'type-graphql';

/**
 * ! #3
 * * Apollo Server with generated Type GraphQL through typegraphql-prisma
 */
// const schema = buildSchemaSync({
  // * Resolvers generated by typegraphql-prisma
//   resolvers,
//   validate: false,
// })

// const server = new ApolloServer({
//   schema,
  //* Prisma must be privided to typegraphql-prisma resolvers through context
//   context: (): Context => ({ prisma }),
// });

// * App listen on port 4000
// server.listen(PORT, () =>
//   console.log(`🚀  Server running on http://localhost:${PORT}/graphql`),
// );

//* For implementation #2
//! Should be top-most import
// import 'reflect-metadata';
// import { buildSchemaSync } from 'type-graphql';
// import { ApolloServer } from 'apollo-server';

/**
 * ! #2
 * * Apollo Server with Type GraphQL
 * * Winner
 * *  - Allows for more control of resolvers
 * *  - Allows for more indepth learning of Type GraphQL
 */
// @ObjectType()
// export class User {
//   @Field()
//   id: number;

//   @Field()
//   email: string;

//   @Field(() => String, { nullable: true })
//   name?: string | null
// }

// //* User Resolvers
// @Resolver(User)
// export class UserResolver {
//   //* GQL Type of single User
//   @Query(() => User, { nullable: true })
//   async user(
//     //* Arg of id with TS type number
//     @Arg('id') id: number
//   //* TS return type of User or null (if user does not exist) !important
//   ): Promise<User | null> {
//     //* Use Prisma generated resolvers to access DB
//     const user = await prisma.user.findUnique({ where: { id }});

//     return user;
//   }
//   //* GQL Types of an array of Users
//   @Query(() => [User], { nullable: true })
//   //* TS return type of Promise that resolves to an array of Users !important
//   async allUsers(): Promise<User[]> {
//     //* Use Prisma generated resolvers to access DB
//     const allUsers = await prisma.user.findMany();

//     return allUsers;
//   }
// }

/**
 * ! #1
 * * Base Node.js implementation
 */
// async function main() {
  //* Create initial user
  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //     posts: {
  //       create: { title: 'Hello World' },
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles' },
  //     },
  //   },
  // })

  //* Grab all users
  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true,
  //   }
  // });
  // console.dir(allUsers, { depth: null });

  //* Update post by id of 1
  // const post = await prisma.post.update({
  //   where: { id: 1 }, // Grab post by id of 1
  //   data: { published: true }, // Update published prop to true
  // });
  // console.log(post);
// }

//* Executes main function immediately and disconnects from prisma
// main()
//   .catch((error) => {
//     throw error;
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })