import { createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (data, req): User => {

    //in example of cource it is with req.user - напрямую
    const request = req.switchToHttp().getRequest();
    return request.user;
  },
);
