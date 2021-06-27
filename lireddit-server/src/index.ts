import {MikroORM} from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import microConfig from './mikro-orm.config';

const main = async ()=>{
    let orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up()
    let post = orm.em.create(Post,{title:'first lireddit post.'});
    await orm.em.persistAndFlush(post)
}

main().catch((err) =>{
    console.log(err);
});