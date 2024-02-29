import { ArgsType, Field } from "@nestjs/graphql";
import { CreateOneUserInput } from "../input/create-one-user.input";

@ArgsType()
export class CreateOneUserObject {
    data: CreateOneUserInput
}