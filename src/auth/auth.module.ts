import { SessionSerializer } from './session.serializer';
import { LocalStrategy } from './local.strategy';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  // imports: [PassportModule.register({ session: true }), UserService],
  // providers: [AuthService, LocalStrategy, SessionSerializer, UserService],
  imports: [
    PassportModule,
    UserService,
    JwtModule.register({
      secret: 'SECRET', //put env variables
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, UserService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
