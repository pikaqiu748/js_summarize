1、依赖就是watcher。只有watcher触发的getter才会收集依赖，哪个watcher触发了getter，就把哪个watcher收集到Dep中。
Dep使用发布订-阅模式，当数据发生变化时，会循环依赖列表，把所有的watcher都通知一遍。

2、代码实现的巧妙之处: watcher把自己设置到全局的一个指定位置，然后读取数据，因为读取了数据，所以会触发这个数据的getter。在getter中就能得到当前正在读取数据的watcher，并把这个watcher收集到Dep中。

3、把依赖收集的代码封装成一个Dep类，它专门用来管理依赖，每个Observer的实例，成员中都有一个Dep的实例;
Watcher是一个中介，数据发生变化时通过watcher中转，通知组件。

