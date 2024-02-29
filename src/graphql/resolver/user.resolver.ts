import {
    Resolver,
    Query,
    Mutation,
    Args
} from "@nestjs/graphql";
import { CreateOneUserObject } from "../args/create-one-user.args";
import { UserObject } from "../objects/user.object";

@Resolver()
export class UserResolver {
    @Query(() => String)
    users() {
        return 'Hello world'
    }

    @Mutation(() => UserObject)
    createOneUser(@Args() args: CreateOneUserObject) {
        console.log(args)
        return args.data;
    }
}