import {MikroORM} from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';

const main = async ()=>{
    let orm = await MikroORM.init({
        entities: [Post],
        dbName:'lireddit',
        type:'postgresql',
        debug: !__prod__,
    });

    let post = orm.em.create(Post,{title:'first lireddit post.'});
    await orm.em.persistAndFlush(post)
}

main().catch((err) =>{
    console.log(err);
});