import { PostModule } from '@lib/post/post.module';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
    imports: [PostModule],
    exports: [PostModule],
})
export class DomainsModule {}
