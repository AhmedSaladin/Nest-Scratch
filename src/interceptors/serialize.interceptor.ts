import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

interface ClassConstructor {
  // eslint-disable-next-line @typescript-eslint/ban-types
  new (...args: any[]): {};
}

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializerInterceptor(dto));
}

class SerializerInterceptor implements NestInterceptor {
  constructor(private dto: ClassConstructor) {}
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    return next.handle().pipe(
      map((data: ClassConstructor) => {
        return plainToClass(this.dto, data, { excludeExtraneousValues: true });
      }),
    );
  }
}
