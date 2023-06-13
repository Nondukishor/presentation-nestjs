import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewUserInput {
  @Field()
  @MaxLength(30)
  id: string;

  @Field({ nullable: true })
  @Length(30, 255)
  name?: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  password: string;
}