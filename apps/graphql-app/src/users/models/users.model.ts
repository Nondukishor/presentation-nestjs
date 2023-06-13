import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Users ' })
export class Users {
  @Field(type => ID)
  id: string;

  @Directive('@upper')
  name: string;

  @Field({ nullable: false })
  email?: string;

  @Field()
  password: string;
}