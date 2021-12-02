import { User } from './entities/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import {
    ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  // constructor(private readonly usersService: UsersService) {}
  /*
  @Get()
  async createUserDB(): Promise<User[]> {
    // const user = await this.usersService.createUserDB("huy");

    // return this.usersService.updateUser(user.id, "something else");
    
    // return this.usersService.deleteUser(1);
    return this.usersService.getAllUsers()
  }


  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @Get('all')
  getUsers(@Query('name') name?: string): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @ApiOkResponse({ type: User, description: 'the user' })
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    const user = this.usersService.getOneById(id);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Post()
  createUser(@Body() body?: CreateUserDTO, ): Promise<User> {
    return this.usersService.createUserDB(body.name);
  }*/
}
