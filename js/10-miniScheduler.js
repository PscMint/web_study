class Scheduler {
    constructor(){
        this.wait=[];//等待队列
        this.running=[];//运行队列
        this.maxNum=2;//任务限制数量
    }
  add(promiseMaker) {
    //如果运行队列有空位，任务拿去运行
      if(this.running.length<this.maxNum){
          this.run(promiseMaker)
      }else{
        //否则放入等待队列
          this.wait.push(promiseMaker)
      }
  }
  run(promiseMaker){
      const len=this.running.push(promiseMaker);
      const index=len-1;
      //运行任务，并且从任务队列中移除，检查等待队列是否有需要运行的任务
      promiseMaker().then(()=>{
          this.running.splice(index,1);
          if(this.wait.length>0){
              this.add(this.wait.shift())
          }
      })
      
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();
//由调度器负责的异步任务，本题要求同时运行2项任务
const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
// output：2 3 1 4
// 一开始，1，2两个任务进入队列。
// 500ms 时，2完成，输出2，任务3入队。
// 800ms 时，3完成，输出3，任务4入队。
// 1000ms 时，1完成，输出1。
