import { Module } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { UsersResolver } from './users.resolver';
import { UserService } from './users.service';

@Module({
  providers: [UsersResolver, UserService, DateScalar],
})
export class RecipesModule {}