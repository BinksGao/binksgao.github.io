(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{438:function(s,e,a){s.exports=a.p+"assets/img/1.ed652adf.png"},439:function(s,e,a){s.exports=a.p+"assets/img/2.e4f3d89f.png"},440:function(s,e,a){s.exports=a.p+"assets/img/3.3efff013.png"},441:function(s,e,a){s.exports=a.p+"assets/img/4.2300be64.png"},442:function(s,e,a){s.exports=a.p+"assets/img/5.4efb5aed.png"},443:function(s,e,a){s.exports=a.p+"assets/img/6.1e691b30.png"},444:function(s,e,a){s.exports=a.p+"assets/img/7.321a760f.png"},445:function(s,e,a){s.exports=a.p+"assets/img/8.921a261c.png"},446:function(s,e,a){s.exports=a.p+"assets/img/9.e27e58c2.png"},447:function(s,e,a){s.exports=a.p+"assets/img/10.6ae3830b.png"},448:function(s,e,a){s.exports=a.p+"assets/img/11.3ec9a075.png"},449:function(s,e,a){s.exports=a.p+"assets/img/12.2dbd84dd.png"},450:function(s,e,a){s.exports=a.p+"assets/img/13.2bea6a78.png"},451:function(s,e,a){s.exports=a.p+"assets/img/14.6b2ff609.png"},452:function(s,e,a){s.exports=a.p+"assets/img/15.f58c322f.png"},453:function(s,e,a){s.exports=a.p+"assets/img/16.905cec51.png"},454:function(s,e,a){s.exports=a.p+"assets/img/17.abc17a44.png"},487:function(s,e,a){"use strict";a.r(e);var n=a(55),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"自动化部署vue项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署vue项目"}},[s._v("#")]),s._v(" 自动化部署Vue项目")]),s._v(" "),n("h3",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("h3",{attrs:{id:"docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),n("p",[s._v("Docker 是一个开源的应用容器引擎,Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。")]),s._v(" "),n("p",[s._v("Docker的应用场景:")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("1、 Web 应用的自动化打包和发布。\n2、 自动化测试和持续集成、发布。\n3、 在服务型环境中部署和调整数据库或其他的后台应用。\n4、 从头编译或者扩展现有的 OpenShift 或 Cloud Foundry 平台来搭建自己的 PaaS 环境。\n")])])]),n("p",[s._v("Docker的优点:")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("1、快速，一致地交付您的应用程序")]),s._v(" "),n("p",[s._v("Docker 允许开发人员使用您提供的应用程序或服务的本地容器在标准化环境中工作，从而简化了开发的生命周期")])]),s._v(" "),n("li",[n("p",[s._v("2、响应式部署和扩展")]),s._v(" "),n("p",[s._v("Docker 是基于容器的平台，允许高度可移植的工作负载。Docker 容器可以在开发人员的本机上，数据中心的物理或虚拟机上，云服务上或混合环境中运行。\nDocker 的可移植性和轻量级的特性，还可以使您轻松地完成动态管理的工作负担，并根据业务需求指示，实时扩展或拆除应用程序和服务。")])]),s._v(" "),n("li",[n("p",[s._v("3、在同一硬件上运行更多工作负载\nDocker 轻巧快速。它为基于虚拟机管理程序的虚拟机提供了可行、经济、高效的替代方案，因此您可以利用更多的计算能力来实现业务目标。Docker 非常适合于高密度环境以及中小型部署，而您可以用更少的资源做更多的事情。")])])]),s._v(" "),n("h3",{attrs:{id:"jenkins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins"}},[s._v("#")]),s._v(" Jenkins")]),s._v(" "),n("p",[s._v("Jenkins是一个开源的、提供友好操作界面的持续集成(CI)工具，起源于Hudson（Hudson是商用的），主要用于持续、自动的构建/测试软件项目、监控外部任务的运行。")]),s._v(" "),n("ul",[n("li",[s._v("持续集成（CI）\n持续集成指的是，频繁地（一天多次）将代码集成到主干。将软件个人研发的部分向软件整体部分交付，频繁进行集成以便更快地发现其中的错误。")])]),s._v(" "),n("p",[s._v("它的优点有两个:")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("1. 快速发现错误。每完成一点更新，就集成到主干，可以快速发现错误，定位错误也比较容易；\n2. 防止分支大幅偏离主干。如果不是经常集成，主干又在不断更新，会导致以后集成的难度变大，甚至难以集成。\n")])])]),n("ul",[n("li",[n("p",[s._v("持续交付")]),s._v(" "),n("p",[s._v("持续交付（Continuous delivery）指的是，频繁地将软件的新版本，交付给质量团队或者用户，以供评审。如果评审通过，代码就进入生产阶段。")])]),s._v(" "),n("li",[n("p",[s._v("持续部署")]),s._v(" "),n("p",[s._v("持续部署（continuous deployment）是持续交付的下一步，指的是代码通过评审以后，自动部署到生产环境。")]),s._v(" "),n("p",[s._v("持续部署的目标是，代码在任何时刻都是可部署的，可以进入生产阶段。")]),s._v(" "),n("p",[s._v("持续部署的前提是能自动化完成测试、构建、部署等步骤。")])])]),s._v(" "),n("h3",{attrs:{id:"安装docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[s._v("#")]),s._v(" 安装Docker")]),s._v(" "),n("p",[s._v("这里假设你已经有了一台Centos服务器，接下来就是安装Docker,以及使用Docker容器安装Jenkins")]),s._v(" "),n("ul",[n("li",[s._v("1、使用yum安装Docker")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo yum install docker\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("2、启动Docker")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("service docker start\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("3、设置开机启动docker")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("systemctl enable docker\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("4、查看docker是否安装成功")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker info\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("5、重启docker")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo service docker restart\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"docker安装jenkins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker安装jenkins"}},[s._v("#")]),s._v(" Docker安装Jenkins")]),s._v(" "),n("ul",[n("li",[s._v("1、使用docker命令下载Jenkins")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo docker pull jenkins\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("2、创建用于存放jenkins的文件夹")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mkdir /home/var/jenkins\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("3、cd进入/home/var/目录，设置jenkins文件夹的归属用户UID为1000")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo chown -R 1000:1000 jenkins/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("4、启动Jenkins")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sudo docker run -itd -p 8080:8080 -p 50000:50000 --name jenkins --privileged=true  -v /home/var/jenkins:/var/jenkins_home jenkins\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("5、Jenkins重启")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker restart jenkins\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("以上的安装是常规安装过程，安装 Jenkins 后，初始化下载插件总是失败，导致安装不成功，重试好几次都是卡在安装插件那。")]),s._v(" "),n("p",[s._v("安装插件失败，其实是拉取了官方的 Jenkins 镜像，然后在初始化安装插件时，会从国外的网站去获取，导致安装非常缓慢，或者安装失败。最好的解决方案时拉取 Jenkins 中文社区 提供的 Jenkins 镜像，即可解决。")]),s._v(" "),n("p",[s._v("下面的步骤是采用国内镜像的方式去安装Jenkins")]),s._v(" "),n("ul",[n("li",[s._v("1、获取国内镜像")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker pull jenkinszh/jenkins-zh:latest\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("2、设置容器挂载目录\nJenkins 容器启动后，会产生安装配置文件，需要把这些文件的生成地址改为，linux服务器上的目录。")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("创建 Jenkins 生成目录")]),s._v(" "),n("p",[s._v("mkdir /home/jenkins_home")])]),s._v(" "),n("li",[n("p",[s._v("目录授权")]),s._v(" "),n("p",[s._v("chmod 777 /home/jenkins_home    不授权启动后无法生成文件")])]),s._v(" "),n("li",[n("p",[s._v("启动命令")]),s._v(" "),n("p",[s._v("docker run -d -p 8085:8080 -p 50000:50000 --name myjenkins -v /home/jenkins_home/:/var/jenkins_home jenkinszh/jenkins-zh:latest")])]),s._v(" "),n("li",[n("p",[s._v("命令解释")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("run             运行容器\n-d              后台运行\n-p              linux服务器端口 与 Docker 容器端口映射\n--name          自定义容器别名\n-v              linux服务器目录 与 Docker 容器目录挂载\n最后名跟的时 拉取的镜像名和版本\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("注意：8085 是访问端口，只要没占用的都可以用。8080不可更改")]),s._v(" "),n("p",[s._v("-p 50000:50000 不可更改。")]),s._v(" "),n("p",[s._v("/home/jenkins_home/ 本地的生成目录，可以自定义，与上一步创建并授权的目录一致即可")]),s._v(" "),n("p",[s._v("/var/jenkins_home   Docker 容器目录，不可更改。")])])]),s._v(" "),n("h3",{attrs:{id:"jenkins的初始化使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins的初始化使用"}},[s._v("#")]),s._v(" Jenkins的初始化使用")]),s._v(" "),n("p",[s._v("1、获取初始化的管理员密码：在浏览器输入http://服务器IP:8085 打开jenkins，首次打开需要获取管理员的密码，如图：\n"),n("img",{attrs:{src:a(438),alt:"avatar"}}),s._v("\n2、获取初始化密码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker ps  获取当前运行容器的id\ndocker logs 容器的id\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:a(439),alt:"avatar"}}),s._v("\n3、安装插件：填入密码之后提交完成会跳到插件安装页面，选择第一个然后进行安装，如图：\n"),n("img",{attrs:{src:a(440),alt:"avatar"}})]),s._v(" "),n("p",[s._v("用中文社区提供的 Jenkins 镜像 无需设置，直接安装即可，速度飞快。")]),s._v(" "),n("p",[s._v("或者: jenkins插件清华大学镜像地址\nhttps://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json")]),s._v(" "),n("p",[s._v("更换地址方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1.进入jenkins系统管理\n2.进入插件管理\n3.点击高级，修改升级站点的地址为清华大学镜像地址\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("4、创建管理员账号\n"),n("img",{attrs:{src:a(441),alt:"avatar"}})]),s._v(" "),n("h3",{attrs:{id:"jenkins构建vue项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins构建vue项目"}},[s._v("#")]),s._v(" jenkins构建Vue项目")]),s._v(" "),n("p",[s._v("1、新建任务\n"),n("img",{attrs:{src:a(442),alt:"avatar"}}),s._v("\n2、配置github地址，以便方便构建项目\n"),n("img",{attrs:{src:a(443),alt:"avatar"}}),s._v("\n3、设置项目构建(此时只做测试，具体构建在下文)\n"),n("img",{attrs:{src:a(444),alt:"avatar"}}),s._v("\n4、返回Jenkins首页，找到刚才创建的任务，选择立即创建\n"),n("img",{attrs:{src:a(445),alt:"avatar"}}),s._v("\n5、查看构建详情")]),s._v(" "),n("p",[s._v("点击那个 w 列的🌞(太阳)，这里是构建的描述， 如果构建失败的话，你可以根据这里的提示定位问题。\n"),n("img",{attrs:{src:a(446),alt:"avatar"}}),s._v("\n6、因为部署的是Vue的项目，所以要用到Node，此时要进入全局设置的插件管理安装NodeJs\n"),n("img",{attrs:{src:a(447),alt:"avatar"}}),s._v("\n7、安装NodeJs插件\n"),n("img",{attrs:{src:a(448),alt:"avatar"}}),s._v("\n8、下载完后，我们去全局配置管理，发现对了 一个 NodeJs 选项。\n"),n("img",{attrs:{src:a(449),alt:"avatar"}}),s._v("\n9、重新设置JenkinsVue项目的构建环境\n"),n("img",{attrs:{src:a(450),alt:"avatar"}}),s._v("\n10、重新进行项目的构建\n"),n("img",{attrs:{src:a(451),alt:"avatar"}}),s._v("\n11、构建成功之后去查看构建项目所在的位置\n正确构建之后，项目会在服务器的/home/jenkins_home/workspace/文件夹下，即配置的Jenkins的安装目录下的工作空间\n"),n("img",{attrs:{src:a(452),alt:"avatar"}})]),s._v(" "),n("h3",{attrs:{id:"nginx部署构建的vue项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx部署构建的vue项目"}},[s._v("#")]),s._v(" Nginx部署构建的Vue项目")]),s._v(" "),n("p",[n("img",{attrs:{src:a(453),alt:"avatar"}})]),s._v(" "),n("p",[s._v("配置nginx之后，重启nginx")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("nginx -s reload\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在浏览器输入服务器IP:port，查看效果\n"),n("img",{attrs:{src:a(454),alt:"avatar"}})]),s._v(" "),n("p",[s._v("至此，完整的Jenkins自动化部署Vue项目就完成了")])])}),[],!1,null,null,null);e.default=t.exports}}]);