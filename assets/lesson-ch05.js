/* 第 5 集《一次读盘的接力》分幕数据 */
window.OS_LESSON = {
  title: "第 5 集《一次读盘的接力》",
  scenes: [
    {
      dur: 7600,
      caption: "CPU 不直接碰设备，它把命令写给 I/O 控制器，控制器再指挥设备干活。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">CPU → 控制器 → 设备</text>' +
        '<rect x="50" y="130" width="170" height="110" rx="14" class="ls-box hot ls-fade"/>' +
        '<text x="135" y="165" text-anchor="middle" class="ls-t">CPU</text>' +
        '<text x="135" y="192" text-anchor="middle" class="ls-t xs">执行指令</text>' +
        '<text x="135" y="216" text-anchor="middle" class="ls-t xs">发起 I/O 请求</text>' +
        '<rect x="300" y="105" width="250" height="160" rx="14" class="ls-box accent ls-fade ls-d1"/>' +
        '<text x="425" y="137" text-anchor="middle" class="ls-t">I/O 控制器</text>' +
        '<text x="425" y="168" text-anchor="middle" class="ls-t sm">数据寄存器</text>' +
        '<text x="425" y="194" text-anchor="middle" class="ls-t sm">控制寄存器</text>' +
        '<text x="425" y="220" text-anchor="middle" class="ls-t sm">状态寄存器</text>' +
        '<text x="425" y="246" text-anchor="middle" class="ls-t xs">地址寄存器（DMA）</text>' +
        '<rect x="630" y="130" width="180" height="110" rx="14" class="ls-box ok ls-fade ls-d3"/>' +
        '<text x="720" y="165" text-anchor="middle" class="ls-t">设备</text>' +
        '<text x="720" y="192" text-anchor="middle" class="ls-t xs">磁盘 / 键盘 / 网卡</text>' +
        '<text x="720" y="216" text-anchor="middle" class="ls-t xs">真正干活</text>' +
        '<path d="M222 185 H297" class="ls-arrow brand" marker-end="url(#arw)"/>' +
        '<text x="260" y="172" text-anchor="middle" class="ls-t xs">写寄存器</text>' +
        '<path d="M552 185 H627" class="ls-arrow brand" marker-end="url(#arw)"/>' +
        '<text x="590" y="172" text-anchor="middle" class="ls-t xs">控制信号</text>' +
        '<path d="M627 215 H555" class="ls-arrow red" marker-end="url(#arw)"/>' +
        '<text x="590" y="235" text-anchor="middle" class="ls-t xs red">状态 / 中断</text>' +
        '<text x="430" y="330" text-anchor="middle" class="ls-t sm">控制器是 CPU 与设备之间的翻译官，设备寄存器组成 I/O 端口</text>' +
        '<text x="430" y="360" text-anchor="middle" class="ls-t xs">端口映射 I/O 用 IN/OUT；内存映射 I/O 用普通 load/store</text>' +
        '</svg>'
    },
    {
      dur: 8000,
      caption: "程序查询：CPU 反复读状态寄存器，设备没好就一直等，CPU 时间被浪费。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">程序查询：忙等的代价</text>' +
        '<rect x="70" y="100" width="190" height="90" rx="14" class="ls-box hot"/>' +
        '<text x="165" y="135" text-anchor="middle" class="ls-t">CPU</text>' +
        '<text x="165" y="162" text-anchor="middle" class="ls-t xs">循环读状态</text>' +
        '<rect x="340" y="100" width="170" height="90" rx="14" class="ls-box accent"/>' +
        '<text x="425" y="135" text-anchor="middle" class="ls-t">状态寄存器</text>' +
        '<text x="425" y="162" text-anchor="middle" class="ls-t xs">忙？就绪？</text>' +
        '<rect x="590" y="100" width="190" height="90" rx="14" class="ls-box"/>' +
        '<text x="685" y="135" text-anchor="middle" class="ls-t">设备</text>' +
        '<text x="685" y="162" text-anchor="middle" class="ls-t xs">慢慢传输</text>' +
        '<path d="M262 130 H337" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M510 130 H587" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M337 165 H265" class="ls-arrow red" marker-end="url(#arw)"/>' +
        '<text x="300" y="188" class="ls-t xs red">读到「忙」→ 继续循环</text>' +
        '<rect x="70" y="235" width="710" height="105" rx="14" class="ls-box warn"/>' +
        '<text x="90" y="265" class="ls-t red">CPU 时间线</text>' +
        '<rect x="90" y="280" width="180" height="34" rx="6" fill="var(--red)"/><text x="180" y="303" text-anchor="middle" fill="#fff" class="ls-t xs">查询</text>' +
        '<rect x="272" y="280" width="180" height="34" rx="6" fill="var(--red)"/><text x="362" y="303" text-anchor="middle" fill="#fff" class="ls-t xs">查询</text>' +
        '<rect x="454" y="280" width="180" height="34" rx="6" fill="var(--red)"/><text x="544" y="303" text-anchor="middle" fill="#fff" class="ls-t xs">查询</text>' +
        '<rect x="636" y="280" width="120" height="34" rx="6" fill="var(--green)"/><text x="696" y="303" text-anchor="middle" fill="#fff" class="ls-t xs">搬数据</text>' +
        '<text x="430" y="378" text-anchor="middle" class="ls-t xs">设备就绪前，CPU 一直在空转；适合简单、低速设备</text>' +
        '</svg>'
    },
    {
      dur: 8200,
      caption: "中断驱动：CPU 启动设备后去做别的，设备每完成一个字节/字就发一次中断。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">中断驱动：干完一件小事按一次铃</text>' +
        '<rect x="60" y="95" width="210" height="90" rx="14" class="ls-box hot"/>' +
        '<text x="165" y="130" text-anchor="middle" class="ls-t">CPU</text>' +
        '<text x="165" y="157" text-anchor="middle" class="ls-t xs">启动设备后去干别的</text>' +
        '<rect x="360" y="95" width="170" height="90" rx="14" class="ls-box accent"/>' +
        '<text x="445" y="130" text-anchor="middle" class="ls-t">中断控制器</text>' +
        '<text x="445" y="157" text-anchor="middle" class="ls-t xs">中断请求 IRQ</text>' +
        '<rect x="620" y="95" width="180" height="90" rx="14" class="ls-box ok"/>' +
        '<text x="710" y="130" text-anchor="middle" class="ls-t">设备</text>' +
        '<text x="710" y="157" text-anchor="middle" class="ls-t xs">每字节/字完成</text>' +
        '<path d="M272 125 H357" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<text x="315" y="112" text-anchor="middle" class="ls-t xs">启动</text>' +
        '<path d="M617 140 H532" class="ls-arrow red" marker-end="url(#arw)"/>' +
        '<text x="575" y="128" text-anchor="middle" class="ls-t xs red">中断</text>' +
        '<path d="M360 165 H270" class="ls-arrow red" marker-end="url(#arw)"/>' +
        '<text x="315" y="188" text-anchor="middle" class="ls-t xs red">CPU 处理中断</text>' +
        '<rect x="60" y="235" width="740" height="105" rx="14" class="ls-box"/>' +
        '<text x="80" y="263" class="ls-t">CPU 时间线</text>' +
        '<rect x="80" y="280" width="90" height="34" rx="6" fill="var(--green)"/><text x="125" y="303" text-anchor="middle" fill="#fff" class="ls-t xs">其他工作</text>' +
        '<rect x="172" y="280" width="44" height="34" rx="6" fill="var(--red)"/><text x="194" y="303" text-anchor="middle" fill="#fff" class="ls-t xs">中断</text>' +
        '<rect x="218" y="280" width="150" height="34" rx="6" fill="var(--green)"/><text x="293" y="303" text-anchor="middle" fill="#fff" class="ls-t xs">其他工作</text>' +
        '<rect x="370" y="280" width="44" height="34" rx="6" fill="var(--red)"/><text x="392" y="303" text-anchor="middle" fill="#fff" class="ls-t xs">中断</text>' +
        '<rect x="416" y="280" width="150" height="34" rx="6" fill="var(--green)"/><text x="491" y="303" text-anchor="middle" fill="#fff" class="ls-t xs">其他工作</text>' +
        '<rect x="568" y="280" width="44" height="34" rx="6" fill="var(--red)"/><text x="590" y="303" text-anchor="middle" fill="#fff" class="ls-t xs">中断</text>' +
        '<text x="430" y="378" text-anchor="middle" class="ls-t xs">不必忙等，但每字节一次中断，频率仍然很高</text>' +
        '</svg>'
    },
    {
      dur: 8400,
      caption: "DMA：控制器直接和内存搬一整块，CPU 只在整块完成后被中断一次。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">DMA：整块搬完再按铃</text>' +
        '<rect x="50" y="150" width="150" height="90" rx="14" class="ls-box hot"/>' +
        '<text x="125" y="185" text-anchor="middle" class="ls-t">CPU</text>' +
        '<text x="125" y="212" text-anchor="middle" class="ls-t xs">设置参数后去干别的</text>' +
        '<rect x="250" y="130" width="190" height="130" rx="14" class="ls-box accent ls-fade ls-d1"/>' +
        '<text x="345" y="162" text-anchor="middle" class="ls-t">DMA 控制器</text>' +
        '<text x="345" y="190" text-anchor="middle" class="ls-t sm">地址 / 计数</text>' +
        '<text x="345" y="216" text-anchor="middle" class="ls-t sm">直接搬块</text>' +
        '<text x="345" y="242" text-anchor="middle" class="ls-t xs">结束后中断</text>' +
        '<rect x="490" y="150" width="150" height="90" rx="14" class="ls-box ok"/>' +
        '<text x="565" y="185" text-anchor="middle" class="ls-t">内存</text>' +
        '<text x="565" y="212" text-anchor="middle" class="ls-t xs">一整块数据</text>' +
        '<rect x="690" y="150" width="130" height="90" rx="14" class="ls-box"/>' +
        '<text x="755" y="185" text-anchor="middle" class="ls-t">设备</text>' +
        '<text x="755" y="212" text-anchor="middle" class="ls-t xs">磁盘</text>' +
        '<path d="M202 195 H247" class="ls-arrow brand" marker-end="url(#arw)"/>' +
        '<path d="M442 195 H487" class="ls-arrow brand" marker-end="url(#arw)"/>' +
        '<text x="465" y="182" text-anchor="middle" class="ls-t xs">DMA</text>' +
        '<path d="M687 195 H445" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<text x="565" y="235" text-anchor="middle" class="ls-t xs">设备 → 内存，不经过 CPU</text>' +
        '<rect x="150" y="300" width="560" height="55" rx="10" fill="var(--brand-soft)"/>' +
        '<text x="430" y="325" text-anchor="middle" class="ls-t brand">CPU 只在整块传输完成后处理一次中断</text>' +
        '<text x="430" y="345" text-anchor="middle" class="ls-t xs">DMA 与 CPU 会争用内存总线：停止 CPU / 周期挪用 / 交替访问</text>' +
        '</svg>'
    },
    {
      dur: 8400,
      caption: "通道更进一步：它执行通道程序，独立控制多台设备，完成一组 I/O 才通知 CPU。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">通道：一个专门管 I/O 的小处理器</text>' +
        '<rect x="50" y="150" width="140" height="90" rx="14" class="ls-box hot"/>' +
        '<text x="120" y="185" text-anchor="middle" class="ls-t">CPU</text>' +
        '<text x="120" y="212" text-anchor="middle" class="ls-t xs">启动通道</text>' +
        '<rect x="240" y="130" width="190" height="130" rx="14" class="ls-box accent ls-fade ls-d1"/>' +
        '<text x="335" y="162" text-anchor="middle" class="ls-t">通道</text>' +
        '<text x="335" y="190" text-anchor="middle" class="ls-t sm">执行通道程序</text>' +
        '<text x="335" y="216" text-anchor="middle" class="ls-t sm">控制多台设备</text>' +
        '<text x="335" y="242" text-anchor="middle" class="ls-t xs">完成后一次中断</text>' +
        '<rect x="500" y="105" width="280" height="60" rx="10" class="ls-box ok"/><text x="640" y="141" text-anchor="middle" class="ls-t sm">设备 1（磁盘）</text>' +
        '<rect x="500" y="180" width="280" height="60" rx="10" class="ls-box ok"/><text x="640" y="216" text-anchor="middle" class="ls-t sm">设备 2（打印机）</text>' +
        '<rect x="500" y="255" width="280" height="60" rx="10" class="ls-box ok"/><text x="640" y="291" text-anchor="middle" class="ls-t sm">设备 3（网卡）</text>' +
        '<path d="M192 195 H237" class="ls-arrow brand" marker-end="url(#arw)"/>' +
        '<path d="M432 170 L497 140" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M432 195 H497" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M432 220 L497 275" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<text x="430" y="372" text-anchor="middle" class="ls-t sm">CPU 干预频率：程序查询 &gt; 中断 &gt; DMA &gt; 通道</text>' +
        '</svg>'
    },
    {
      dur: 8600,
      caption: "I/O 软件分四层：用户层、设备独立性、设备驱动、中断处理；越往下越贴近硬件。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">I/O 软件的千层饼</text>' +
        '<rect x="120" y="70" width="620" height="58" rx="10" class="ls-box ok ls-fade"/><text x="430" y="96" text-anchor="middle" class="ls-t">用户层 I/O 软件</text><text x="430" y="117" text-anchor="middle" class="ls-t xs">库函数 / SPOOLing 用户接口</text>' +
        '<rect x="120" y="138" width="620" height="58" rx="10" class="ls-box accent ls-fade ls-d1"/><text x="430" y="164" text-anchor="middle" class="ls-t">设备独立性软件</text><text x="430" y="185" text-anchor="middle" class="ls-t xs">逻辑设备名映射 / 缓冲 / 缓存 / SPOOLing / 保护</text>' +
        '<rect x="120" y="206" width="620" height="58" rx="10" class="ls-box hot ls-fade ls-d2"/><text x="430" y="232" text-anchor="middle" class="ls-t">设备驱动程序</text><text x="430" y="253" text-anchor="middle" class="ls-t xs">读写控制器寄存器 / 启动设备 / 设备特有</text>' +
        '<rect x="120" y="274" width="620" height="58" rx="10" class="ls-box violet ls-fade ls-d3"/><text x="430" y="300" text-anchor="middle" class="ls-t">中断处理程序</text><text x="430" y="321" text-anchor="middle" class="ls-t xs">保存现场 / 处理完成 / 唤醒进程</text>' +
        '<rect x="120" y="342" width="620" height="40" rx="10" class="ls-box ls-fade ls-d4"/><text x="430" y="367" text-anchor="middle" class="ls-t sm">硬件：控制器 + 设备</text>' +
        '</svg>'
    },
    {
      dur: 9000,
      caption: "缓冲抹平速度差：单缓冲一块一块来，双缓冲让设备与 CPU 更好重叠；SPOOLing 把打印机变成共享设备。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="40" text-anchor="middle" class="ls-t big">缓冲与 SPOOLing</text>' +
        '<text x="60" y="82" class="ls-t brand">单缓冲：设备 → 缓冲 → 用户区</text>' +
        '<rect x="60" y="100" width="100" height="46" rx="8" class="ls-box"/><text x="110" y="128" text-anchor="middle" class="ls-t sm">设备</text>' +
        '<path d="M162 123 H210" class="ls-arrow" marker-end="url(#arw)"/><text x="186" y="112" text-anchor="middle" class="ls-t xs">T</text>' +
        '<rect x="212" y="100" width="100" height="46" rx="8" class="ls-box hot"/><text x="262" y="128" text-anchor="middle" class="ls-t sm">缓冲</text>' +
        '<path d="M314 123 H362" class="ls-arrow" marker-end="url(#arw)"/><text x="338" y="112" text-anchor="middle" class="ls-t xs">M</text>' +
        '<rect x="364" y="100" width="100" height="46" rx="8" class="ls-box ok"/><text x="414" y="128" text-anchor="middle" class="ls-t sm">用户区</text>' +
        '<path d="M466 123 H514" class="ls-arrow" marker-end="url(#arw)"/><text x="490" y="112" text-anchor="middle" class="ls-t xs">C</text>' +
        '<rect x="516" y="100" width="100" height="46" rx="8" class="ls-box violet"/><text x="566" y="128" text-anchor="middle" class="ls-t sm">CPU</text>' +
        '<text x="680" y="128" class="ls-t sm">max(C,T)+M</text>' +
        '<text x="60" y="202" class="ls-t brand">双缓冲：设备填一块，CPU 处理另一块</text>' +
        '<rect x="60" y="220" width="100" height="46" rx="8" class="ls-box"/>' +
        '<rect x="212" y="220" width="100" height="46" rx="8" class="ls-box hot"/><text x="262" y="248" text-anchor="middle" class="ls-t sm">缓冲 1</text>' +
        '<rect x="322" y="220" width="100" height="46" rx="8" class="ls-box hot"/><text x="372" y="248" text-anchor="middle" class="ls-t sm">缓冲 2</text>' +
        '<text x="680" y="248" class="ls-t sm">max(C+M,T)</text>' +
        '<rect x="60" y="300" width="740" height="76" rx="12" class="ls-box accent"/>' +
        '<text x="80" y="328" class="ls-t">SPOOLing：多个进程 → 输出井（磁盘）→ 缓输出程序 → 打印机</text>' +
        '<text x="80" y="354" class="ls-t xs">独占设备被虚拟成共享设备；用户进程提交后立即返回，不必等打印机</text>' +
        '<text x="430" y="392" text-anchor="middle" class="ls-t xs">缓冲解决速度差，SPOOLing 解决独占设备的共享问题</text>' +
        '</svg>'
    }
  ]
};
