import axios from 'axios'

export default function request(config){
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  //真正的发起网络请求
  //instance函数返回的本身就是一个promise函数
  instance(config).then(res => {
    console.log(res.data);
  }).catch(err => {
    console.log('err message');
  })
}