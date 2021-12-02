import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SECRET', //protect this, move to env var
    });
  }

  async validate(payload: any) {
    // const user = this.userService.getById(payload.sub)
    return {
      id: payload.sub,
      name: payload.name,
    //   ...user,
    };
  }
}
