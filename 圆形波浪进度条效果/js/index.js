 // 获取进度条元素
 const progress = document.querySelector('.progress');
 const number = document.querySelector('.number');
 // 进度值
 let progressValue = 0;
 // 模拟获取进度
 let timer = setInterval(() => {
   progressValue += 1;
   // 更新波浪进度条的进度
   progress.style.setProperty('--progress', `${progressValue}%`);
   // 更新进度数字
   number.textContent = `${progressValue}%`;
   // 记得清除定时器
   if (progressValue === 100) {
     clearInterval(timer);
   }
 }, 40);