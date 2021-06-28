import {MikroORM} from '@mikro-orm/core';
import express from 'express';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import microConfig from './mikro-orm.config';

const main = async ()=>{
    let orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up()
    const app = express();
    // let post = orm.em.create(Post,{title:'first lireddit post.'});
    // await orm.em.persistAndFlush(post)
    app.get('/',(req,res)=>{
        console.log('root path')
    })

    app.listen(4000, ()=>{
        console.log("Server listening on port 4000.")
    });
}

main().catch((err) =>{
    console.log(err);
});