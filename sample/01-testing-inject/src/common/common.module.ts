import { Module } from '@nestjs/common';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
    imports: [
        RedisModule.forRoot({
            readyLog: true,
            config: {
                host: 'localhost',
                port: 6380,
                password: 'bitnami'
            }
        })
    ]
})
export class CommonModule {}
