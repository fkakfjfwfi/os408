/* 第 1 集《从按下电源到 hello world》分幕数据 */
window.OS_LESSON = {
  title: "第 1 集《从按下电源到 hello world》",
  scenes: [
    {
      dur: 7200,
      caption: "一台刚通电的计算机，只有 CPU、内存、磁盘和键盘这些硬件，还没有操作系统。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="46" text-anchor="middle" class="ls-t big">裸机：一堆互不相识的硬件</text>' +
        '<rect x="30" y="80" width="800" height="270" rx="18" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="8 6"/>' +
        '<rect x="60" y="150" width="160" height="80" rx="14" class="ls-box ls-fade"/>' +
        '<text x="140" y="183" text-anchor="middle" class="ls-t">CPU</text>' +
        '<text x="140" y="207" text-anchor="middle" class="ls-t xs">只会取指、译码、执行</text>' +
        '<rect x="245" y="150" width="160" height="80" rx="14" class="ls-box ls-fade ls-d1"/>' +
        '<text x="325" y="183" text-anchor="middle" class="ls-t">内存</text>' +
        '<text x="325" y="207" text-anchor="middle" class="ls-t xs">只能存 0/1，断电即失</text>' +
        '<rect x="430" y="150" width="160" height="80" rx="14" class="ls-box ls-fade ls-d2"/>' +
        '<text x="510" y="183" text-anchor="middle" class="ls-t">磁盘</text>' +
        '<text x="510" y="207" text-anchor="middle" class="ls-t xs">存着程序，但 CPU 不认识</text>' +
        '<rect x="615" y="150" width="160" height="80" rx="14" class="ls-box ls-fade ls-d3"/>' +
        '<text x="695" y="183" text-anchor="middle" class="ls-t">键盘 / 显示器</text>' +
        '<text x="695" y="207" text-anchor="middle" class="ls-t xs">只能收发信号</text>' +
        '<text x="430" y="300" text-anchor="middle" class="ls-t sm">没有 OS：谁来安排谁先运行？谁来保护内存？谁来读写文件？</text>' +
        '<text x="430" y="328" text-anchor="middle" class="ls-t brand">答案：需要一个「总管」——操作系统</text>' +
        '</svg>'
    },
    {
      dur: 8200,
      caption: "加电后先运行固件：加电自检，然后读取磁盘 0 号扇区的 MBR，找到引导程序。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="44" text-anchor="middle" class="ls-t big">第一步：固件把机器「叫醒」</text>' +
        '<rect x="30" y="120" width="150" height="76" rx="13" class="ls-box ls-fade"/>' +
        '<text x="105" y="150" text-anchor="middle" class="ls-t">BIOS / UEFI</text>' +
        '<text x="105" y="174" text-anchor="middle" class="ls-t xs">固化在主板 ROM</text>' +
        '<rect x="215" y="120" width="140" height="76" rx="13" class="ls-box hot ls-fade ls-d1"/>' +
        '<text x="285" y="150" text-anchor="middle" class="ls-t">加电自检</text>' +
        '<text x="285" y="174" text-anchor="middle" class="ls-t xs">POST：内存/显卡/键盘</text>' +
        '<rect x="390" y="120" width="150" height="76" rx="13" class="ls-box accent ls-fade ls-d2"/>' +
        '<text x="465" y="150" text-anchor="middle" class="ls-t">读 MBR</text>' +
        '<text x="465" y="174" text-anchor="middle" class="ls-t xs">磁盘 0 号扇区</text>' +
        '<rect x="575" y="120" width="150" height="76" rx="13" class="ls-box ok ls-fade ls-d3"/>' +
        '<text x="650" y="150" text-anchor="middle" class="ls-t">引导程序</text>' +
        '<text x="650" y="174" text-anchor="middle" class="ls-t xs">找活动分区</text>' +
        '<rect x="755" y="120" width="75" height="76" rx="13" class="ls-box violet ls-fade ls-d4"/>' +
        '<text x="792" y="150" text-anchor="middle" class="ls-t">内核</text>' +
        '<text x="792" y="174" text-anchor="middle" class="ls-t xs">待加载</text>' +
        '<path d="M180 158 H213" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M355 158 H388" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M540 158 H573" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M725 158 H753" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<rect x="120" y="245" width="620" height="96" rx="14" class="ls-box" />' +
        '<text x="430" y="274" text-anchor="middle" class="ls-t brand">MBR = 512 字节</text>' +
        '<text x="430" y="300" text-anchor="middle" class="ls-t sm">446B 引导代码 + 64B 分区表（4 项 × 16B）+ 2B 结束标志 55AA</text>' +
        '<text x="430" y="326" text-anchor="middle" class="ls-t xs">它不属于任何分区，先于操作系统运行</text>' +
        '</svg>'
    },
    {
      dur: 8200,
      caption: "引导程序把内核映像装入内存，内核开始初始化进程调度、内存管理、文件系统和设备驱动。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="44" text-anchor="middle" class="ls-t big">第二步：内核接管整台机器</text>' +
        '<rect x="40" y="140" width="170" height="120" rx="14" class="ls-box accent ls-fade"/>' +
        '<text x="125" y="174" text-anchor="middle" class="ls-t">磁盘上的内核映像</text>' +
        '<text x="125" y="200" text-anchor="middle" class="ls-t xs">vmlinuz / ntoskrnl</text>' +
        '<text x="125" y="226" text-anchor="middle" class="ls-t xs">压缩的二进制</text>' +
        '<rect x="285" y="140" width="170" height="120" rx="14" class="ls-box hot ls-fade ls-d1"/>' +
        '<text x="370" y="174" text-anchor="middle" class="ls-t">装入内存</text>' +
        '<text x="370" y="200" text-anchor="middle" class="ls-t xs">解压、重定位</text>' +
        '<text x="370" y="226" text-anchor="middle" class="ls-t xs">跳到内核入口</text>' +
        '<rect x="530" y="100" width="290" height="200" rx="16" class="ls-box ok ls-fade ls-d2"/>' +
        '<text x="675" y="132" text-anchor="middle" class="ls-t brand">内核初始化</text>' +
        '<text x="675" y="162" text-anchor="middle" class="ls-t sm">① 建立页表与内存管理</text>' +
        '<text x="675" y="188" text-anchor="middle" class="ls-t sm">② 初始化中断控制器与时钟</text>' +
        '<text x="675" y="214" text-anchor="middle" class="ls-t sm">③ 加载设备驱动</text>' +
        '<text x="675" y="240" text-anchor="middle" class="ls-t sm">④ 挂载根文件系统</text>' +
        '<text x="675" y="266" text-anchor="middle" class="ls-t sm">⑤ 创建 1 号进程 / init</text>' +
        '<path d="M212 200 H282" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M457 200 H527" class="ls-arrow brand" marker-end="url(#arw)"/>' +
        '<text x="430" y="345" text-anchor="middle" class="ls-t sm">内核跑起来后，才轮到用户程序登场</text>' +
        '</svg>'
    },
    {
      dur: 8600,
      caption: "CPU 有两种状态：用户态只能执行普通指令；内核态才能执行特权指令、操作硬件。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="40" text-anchor="middle" class="ls-t big">两种状态，一道保护墙</text>' +
        '<rect x="40" y="65" width="780" height="120" rx="16" class="ls-box ok ls-fade"/>' +
        '<text x="60" y="92" class="ls-t green">用户态（目态）</text>' +
        '<text x="60" y="122" class="ls-t sm">hello 程序、浏览器、你的代码</text>' +
        '<text x="60" y="148" class="ls-t xs">只能执行非特权指令：算术、取数、跳转、受限访存</text>' +
        '<text x="740" y="148" class="ls-t xs">不能直接碰硬件</text>' +
        '<rect x="40" y="235" width="780" height="120" rx="16" class="ls-box hot ls-fade ls-d2"/>' +
        '<text x="60" y="262" class="ls-t brand">内核态（管态）</text>' +
        '<text x="60" y="292" class="ls-t sm">进程调度、内存管理、文件系统、设备驱动</text>' +
        '<text x="60" y="318" class="ls-t xs">可执行特权指令：关中断、改 PSW、切换页表、I/O、停机</text>' +
        '<rect x="235" y="192" width="120" height="36" rx="18" class="ls-box accent"/>' +
        '<text x="295" y="215" text-anchor="middle" class="ls-t xs">trap / 中断 / 异常 ↓</text>' +
        '<rect x="520" y="192" width="120" height="36" rx="18" class="ls-box violet"/>' +
        '<text x="580" y="215" text-anchor="middle" class="ls-t xs">特权指令改 PSW ↑</text>' +
        '<path d="M295 192 V188" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M580 228 V232" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<text x="430" y="385" text-anchor="middle" class="ls-t sm">用户态 → 内核态：只能靠入口；内核态 → 用户态：OS 主动返回</text>' +
        '</svg>'
    },
    {
      dur: 8800,
      caption: "系统调用五步走：传参、执行 trap、查系统调用表、内核服务、返回用户态。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">一次 read() 的完整路径</text>' +
        '<g class="ls-fade"><circle cx="100" cy="115" r="20" fill="var(--brand)"/><text x="100" y="121" text-anchor="middle" fill="#fff" class="ls-t">1</text>' +
        '<rect x="40" y="150" width="120" height="70" rx="12" class="ls-box"/><text x="100" y="179" text-anchor="middle" class="ls-t">传参</text><text x="100" y="201" text-anchor="middle" class="ls-t xs">fd / buf / len</text></g>' +
        '<g class="ls-fade ls-d1"><circle cx="245" cy="115" r="20" fill="var(--brand)"/><text x="245" y="121" text-anchor="middle" fill="#fff" class="ls-t">2</text>' +
        '<rect x="185" y="150" width="120" height="70" rx="12" class="ls-box hot"/><text x="245" y="179" text-anchor="middle" class="ls-t">trap</text><text x="245" y="201" text-anchor="middle" class="ls-t xs">陷入指令</text></g>' +
        '<g class="ls-fade ls-d2"><circle cx="390" cy="115" r="20" fill="var(--brand)"/><text x="390" y="121" text-anchor="middle" fill="#fff" class="ls-t">3</text>' +
        '<rect x="330" y="150" width="120" height="70" rx="12" class="ls-box accent"/><text x="390" y="179" text-anchor="middle" class="ls-t">查表</text><text x="390" y="201" text-anchor="middle" class="ls-t xs">系统调用号</text></g>' +
        '<g class="ls-fade ls-d3"><circle cx="535" cy="115" r="20" fill="var(--brand)"/><text x="535" y="121" text-anchor="middle" fill="#fff" class="ls-t">4</text>' +
        '<rect x="475" y="150" width="120" height="70" rx="12" class="ls-box ok"/><text x="535" y="179" text-anchor="middle" class="ls-t">内核服务</text><text x="535" y="201" text-anchor="middle" class="ls-t xs">读设备 / 阻塞</text></g>' +
        '<g class="ls-fade ls-d4"><circle cx="680" cy="115" r="20" fill="var(--brand)"/><text x="680" y="121" text-anchor="middle" fill="#fff" class="ls-t">5</text>' +
        '<rect x="620" y="150" width="120" height="70" rx="12" class="ls-box violet"/><text x="680" y="179" text-anchor="middle" class="ls-t">返回</text><text x="680" y="201" text-anchor="middle" class="ls-t xs">恢复现场</text></g>' +
        '<g class="ls-fade ls-d5"><circle cx="790" cy="115" r="20" fill="var(--ink-3)"/><text x="790" y="121" text-anchor="middle" fill="#fff" class="ls-t">6</text>' +
        '<rect x="730" y="150" width="90" height="70" rx="12" class="ls-box"/><text x="775" y="179" text-anchor="middle" class="ls-t">继续</text><text x="775" y="201" text-anchor="middle" class="ls-t xs">下一条</text></g>' +
        '<path d="M162 185 H183" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M307 185 H328" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M452 185 H473" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M597 185 H618" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M742 185 H728" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<rect x="40" y="275" width="780" height="54" rx="10" fill="var(--green-soft)"/>' +
        '<text x="430" y="298" text-anchor="middle" class="ls-t sm">第 1~2 步：用户态</text>' +
        '<text x="430" y="318" text-anchor="middle" class="ls-t xs">执行 trap 后，硬件切换栈与 PSW，进入内核</text>' +
        '<rect x="40" y="340" width="780" height="40" rx="10" fill="var(--brand-soft)"/>' +
        '<text x="430" y="365" text-anchor="middle" class="ls-t sm">第 3~5 步：内核态</text>' +
        '</svg>'
    },
    {
      dur: 8800,
      caption: "中断来自 CPU 外部，异常来自指令执行内部；缺页处理完要重新执行原指令。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">中断与异常：进入内核的两扇门</text>' +
        '<rect x="40" y="75" width="370" height="270" rx="16" class="ls-box accent ls-fade"/>' +
        '<text x="225" y="108" text-anchor="middle" class="ls-t" fill="var(--accent)">外中断（异步）</text>' +
        '<text x="225" y="136" text-anchor="middle" class="ls-t xs">来自 CPU 外部，与当前指令无关</text>' +
        '<text x="225" y="176" text-anchor="middle" class="ls-t sm">• I/O 完成</text>' +
        '<text x="225" y="204" text-anchor="middle" class="ls-t sm">• 时钟中断</text>' +
        '<text x="225" y="232" text-anchor="middle" class="ls-t sm">• 键盘 / 网卡</text>' +
        '<text x="225" y="274" text-anchor="middle" class="ls-t xs">返回：被中断指令的下一条</text>' +
        '<text x="225" y="312" text-anchor="middle" class="ls-t brand">可屏蔽 / 不可屏蔽</text>' +
        '<rect x="450" y="75" width="370" height="270" rx="16" class="ls-box hot ls-fade ls-d2"/>' +
        '<text x="635" y="108" text-anchor="middle" class="ls-t brand">内中断（异常，同步）</text>' +
        '<text x="635" y="136" text-anchor="middle" class="ls-t xs">CPU 执行指令时内部产生</text>' +
        '<text x="635" y="176" text-anchor="middle" class="ls-t sm">故障 fault：缺页、除零</text>' +
        '<text x="635" y="204" text-anchor="middle" class="ls-t sm">自陷 trap：系统调用、断点</text>' +
        '<text x="635" y="232" text-anchor="middle" class="ls-t sm">终止 abort：非法指令、硬件故障</text>' +
        '<text x="635" y="274" text-anchor="middle" class="ls-t xs">故障处理完：重新执行原指令</text>' +
        '<text x="635" y="312" text-anchor="middle" class="ls-t red">自陷返回：下一条指令</text>' +
        '<text x="430" y="378" text-anchor="middle" class="ls-t sm">两者都会让 CPU 切换到内核态，但「返回哪里」不同</text>' +
        '</svg>'
    },
    {
      dur: 8000,
      caption: "总结：加电、引导、内核、用户程序；之后每一次求内核办事，都走系统调用或中断。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="46" text-anchor="middle" class="ls-t big">一张图记住本章</text>' +
        '<rect x="35" y="120" width="118" height="66" rx="12" class="ls-box ls-fade"/>' +
        '<text x="94" y="148" text-anchor="middle" class="ls-t">加电</text><text x="94" y="170" text-anchor="middle" class="ls-t xs">POST</text>' +
        '<rect x="173" y="120" width="118" height="66" rx="12" class="ls-box accent ls-fade ls-d1"/>' +
        '<text x="232" y="148" text-anchor="middle" class="ls-t">BIOS/UEFI</text><text x="232" y="170" text-anchor="middle" class="ls-t xs">固件</text>' +
        '<rect x="311" y="120" width="118" height="66" rx="12" class="ls-box accent ls-fade ls-d2"/>' +
        '<text x="370" y="148" text-anchor="middle" class="ls-t">MBR</text><text x="370" y="170" text-anchor="middle" class="ls-t xs">0 号扇区</text>' +
        '<rect x="449" y="120" width="118" height="66" rx="12" class="ls-box ok ls-fade ls-d3"/>' +
        '<text x="508" y="148" text-anchor="middle" class="ls-t">内核</text><text x="508" y="170" text-anchor="middle" class="ls-t xs">初始化</text>' +
        '<rect x="587" y="120" width="118" height="66" rx="12" class="ls-box hot ls-fade ls-d4"/>' +
        '<text x="646" y="148" text-anchor="middle" class="ls-t">用户程序</text><text x="646" y="170" text-anchor="middle" class="ls-t xs">用户态</text>' +
        '<rect x="725" y="120" width="105" height="66" rx="12" class="ls-box violet ls-fade ls-d5"/>' +
        '<text x="777" y="148" text-anchor="middle" class="ls-t">系统调用</text><text x="777" y="170" text-anchor="middle" class="ls-t xs">/ 中断</text>' +
        '<path d="M155 153 H171" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M293 153 H309" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M431 153 H447" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M569 153 H585" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M707 153 H723" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<rect x="120" y="245" width="620" height="80" rx="14" class="ls-box" />' +
        '<text x="430" y="274" text-anchor="middle" class="ls-t brand">记住三条主线</text>' +
        '<text x="430" y="300" text-anchor="middle" class="ls-t sm">资源管理（四章） · 状态切换（用户态/内核态） · 入口（中断/异常/系统调用）</text>' +
        '<text x="430" y="368" text-anchor="middle" class="ls-t xs">下一集：程序怎样变成一个进程，又怎样走完一生</text>' +
        '</svg>'
    }
  ]
};
