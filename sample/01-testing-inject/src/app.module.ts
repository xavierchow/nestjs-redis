import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { CatsModule } from './cats/cats.module';

@Module({
    imports: [CommonModule, CatsModule]
})
export class AppModule {}
