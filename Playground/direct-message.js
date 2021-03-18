 const { IgApiClient } = require('instagram-private-api')
 require('dotenv')
const request=require('request')

// import { sample } from 'lodash';

// You must generate device id's before login.
// Id's generated based on seed
// So if you pass the same value as first argument - the same id's are generated every time
const ig = new IgApiClient();


const login=async ()=>{
    ig.state.generateDevice(${UId})
    
    await ig.simulate.preLoginFlow()//acts like a real user does some stuf that normally people do
    const logeInAccount= await ig.account.login(${UId},${pass})
    await ig.simulate.postLoginFlow()
    
}

// module.exports=login
// console.log(acc)

const getId=async (id)=>{
    const _id=await ig.user.getIdByUsername(id)
    return _id.toString()
}
login().then(async ()=>{
    
    // const userId = await ig.user.getIdByUsername('ayushsharma4622');
    // console.log(userId)
    const id=${SendTOId}
    const UId=await getId(id) 
    const thread = ig.entity.directThread([UId]);
    for(let i=0;i<50;i++)
    await thread.broadcastText('Hello World!!'+i);
    console.log('Message sent')

    // directInbox = await ig.feed.directInbox(UId);
    // threads = await directInbox.items();
    // console.log('threads',threads)
})