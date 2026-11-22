/* 第 2 集《一个进程的一生》分幕数据 */
window.OS_LESSON = {
  title: "第 2 集《一个进程的一生》",
  scenes: [
    {
      dur: 7600,
      caption: "程序是菜谱，进程是厨师拿着菜谱真正开火；同一份程序可以跑出多个进程。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">程序 ≠ 进程</text>' +
        '<rect x="50" y="130" width="180" height="150" rx="14" class="ls-box accent ls-fade"/>' +
        '<text x="140" y="165" text-anchor="middle" class="ls-t">程序（菜谱）</text>' +
        '<text x="140" y="195" text-anchor="middle" class="ls-t sm">指令 + 数据</text>' +
        '<text x="140" y="220" text-anchor="middle" class="ls-t xs">静态，存在磁盘</text>' +
        '<text x="140" y="245" text-anchor="middle" class="ls-t xs">不会自己运行</text>' +
        '<path d="M240 205 H330" class="ls-arrow brand" marker-end="url(#arw)"/>' +
        '<text x="285" y="190" text-anchor="middle" class="ls-t xs">fork / exec</text>' +
        '<rect x="345" y="80" width="460" height="240" rx="16" class="ls-box" />' +
        '<text x="575" y="108" text-anchor="middle" class="ls-t brand">三个进程，各有一份 PCB 与地址空间</text>' +
        '<g class="ls-fade ls-d1"><rect x="370" y="130" width="130" height="150" rx="12" class="ls-box hot"/><text x="435" y="158" text-anchor="middle" class="ls-t">P1</text><text x="435" y="185" text-anchor="middle" class="ls-t xs">代码段</text><text x="435" y="208" text-anchor="middle" class="ls-t xs">数据段</text><text x="435" y="231" text-anchor="middle" class="ls-t xs">PCB</text><text x="435" y="258" text-anchor="middle" class="ls-t xs">寄存器现场</text></g>' +
        '<g class="ls-fade ls-d2"><rect x="515" y="130" width="130" height="150" rx="12" class="ls-box hot"/><text x="580" y="158" text-anchor="middle" class="ls-t">P2</text><text x="580" y="185" text-anchor="middle" class="ls-t xs">代码段</text><text x="580" y="208" text-anchor="middle" class="ls-t xs">数据段</text><text x="580" y="231" text-anchor="middle" class="ls-t xs">PCB</text><text x="580" y="258" text-anchor="middle" class="ls-t xs">寄存器现场</text></g>' +
        '<g class="ls-fade ls-d3"><rect x="660" y="130" width="120" height="150" rx="12" class="ls-box hot"/><text x="720" y="158" text-anchor="middle" class="ls-t">P3</text><text x="720" y="185" text-anchor="middle" class="ls-t xs">代码段</text><text x="720" y="208" text-anchor="middle" class="ls-t xs">数据段</text><text x="720" y="231" text-anchor="middle" class="ls-t xs">PCB</text><text x="720" y="258" text-anchor="middle" class="ls-t xs">寄存器现场</text></g>' +
        '<text x="430" y="360" text-anchor="middle" class="ls-t sm">程序只有一个，进程可以有很多个；PCB 是 OS 认出进程的唯一档案</text>' +
        '</svg>'
    },
    {
      dur: 8200,
      caption: "PCB 记录进程的身份证、状态、现场、资源和统计信息；没有 PCB 就没有进程。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">PCB：进程的档案卡</text>' +
        '<rect x="110" y="75" width="640" height="285" rx="18" class="ls-box hot ls-fade"/>' +
        '<rect x="110" y="75" width="640" height="46" rx="18" fill="var(--brand)"/>' +
        '<text x="430" y="105" text-anchor="middle" fill="#fff" class="ls-t">Process Control Block · 常驻内存</text>' +
        '<text x="145" y="156" class="ls-t sm">标识：PID、UID、父进程 PID</text>' +
        '<text x="145" y="190" class="ls-t sm">状态：就绪 / 运行 / 阻塞、优先级、等待事件</text>' +
        '<text x="145" y="224" class="ls-t sm">现场：PC、通用寄存器、PSW、栈指针</text>' +
        '<text x="145" y="258" class="ls-t sm">资源：页表基址、打开文件表、I/O 设备</text>' +
        '<text x="145" y="292" class="ls-t sm">统计：CPU 时间、开始时间、记账信息</text>' +
        '<text x="145" y="326" class="ls-t sm">同步通信：信号量、消息队列指针</text>' +
        '<text x="430" y="386" text-anchor="middle" class="ls-t brand">进程切换的本质：保存旧 PCB 现场，恢复新 PCB 现场</text>' +
        '</svg>'
    },
    {
      dur: 9000,
      caption: "五状态：创建、就绪、运行、阻塞、终止。运行到阻塞是主动，阻塞到就绪是被动。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="40" text-anchor="middle" class="ls-t big">进程的五种人生</text>' +
        '<rect x="40" y="165" width="120" height="70" rx="14" class="ls-box ls-fade"/><text x="100" y="195" text-anchor="middle" class="ls-t">创建</text><text x="100" y="218" text-anchor="middle" class="ls-t xs">new</text>' +
        '<rect x="230" y="165" width="120" height="70" rx="14" class="ls-box hot ls-fade ls-d1"/><text x="290" y="195" text-anchor="middle" class="ls-t">就绪</text><text x="290" y="218" text-anchor="middle" class="ls-t xs">ready</text>' +
        '<rect x="420" y="165" width="120" height="70" rx="14" class="ls-box ok ls-fade ls-d2"/><text x="480" y="195" text-anchor="middle" class="ls-t">运行</text><text x="480" y="218" text-anchor="middle" class="ls-t xs">running</text>' +
        '<rect x="610" y="165" width="120" height="70" rx="14" class="ls-box ls-fade ls-d3"/><text x="670" y="195" text-anchor="middle" class="ls-t">终止</text><text x="670" y="218" text-anchor="middle" class="ls-t xs">terminated</text>' +
        '<rect x="420" y="300" width="120" height="70" rx="14" class="ls-box warn ls-fade ls-d3"/><text x="480" y="330" text-anchor="middle" class="ls-t">阻塞</text><text x="480" y="353" text-anchor="middle" class="ls-t xs">blocked</text>' +
        '<path d="M162 200 H227" class="ls-arrow" marker-end="url(#arw)"/><text x="194" y="188" text-anchor="middle" class="ls-t xs">创建完成</text>' +
        '<path d="M352 200 H417" class="ls-arrow" marker-end="url(#arw)"/><text x="384" y="188" text-anchor="middle" class="ls-t xs">调度</text>' +
        '<path d="M417 232 H352" class="ls-arrow" marker-end="url(#arw)"/><text x="384" y="255" text-anchor="middle" class="ls-t xs">时间片到</text>' +
        '<path d="M542 200 H607" class="ls-arrow" marker-end="url(#arw)"/><text x="574" y="188" text-anchor="middle" class="ls-t xs">退出</text>' +
        '<path d="M480 237 V297" class="ls-arrow red" marker-end="url(#arw)"/><text x="497" y="270" class="ls-t xs red">主动等待 I/O</text>' +
        '<path d="M417 335 H355 V240" class="ls-arrow" marker-end="url(#arw)"/><text x="320" y="350" class="ls-t xs green">I/O 完成 / 唤醒</text>' +
        '<text x="430" y="130" text-anchor="middle" class="ls-t sm">阻塞不能直接变运行；就绪不能直接变阻塞</text>' +
        '</svg>'
    },
    {
      dur: 8800,
      caption: "调度算法决定谁先上 CPU：SJF 让短作业先走，平均周转更短；RR 让每个人都有机会。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="430" y="40" text-anchor="middle" class="ls-t big">同一组进程，两种排队方式</text>' +
        '<text x="40" y="88" class="ls-t brand">FCFS：P1 0~7 → P2 7~11 → P3 11~12 → P4 12~16</text>' +
        '<rect x="40" y="105" width="780" height="34" rx="8" fill="var(--bg-soft)"/>' +
        '<rect x="40" y="105" width="341" height="34" fill="#0f766e"/><text x="210" y="128" text-anchor="middle" fill="#fff" class="ls-t sm">P1 (7)</text>' +
        '<rect x="381" y="105" width="195" height="34" fill="#d97706"/><text x="478" y="128" text-anchor="middle" fill="#fff" class="ls-t sm">P2 (4)</text>' +
        '<rect x="576" y="105" width="49" height="34" fill="#6d28d9"/><text x="600" y="128" text-anchor="middle" fill="#fff" class="ls-t xs">P3</text>' +
        '<rect x="625" y="105" width="195" height="34" fill="#dc2626"/><text x="722" y="128" text-anchor="middle" fill="#fff" class="ls-t sm">P4 (4)</text>' +
        '<text x="40" y="190" class="ls-t brand">SJF（非抢占）：P1 0~7 → P3 7~8 → P2 8~12 → P4 12~16</text>' +
        '<rect x="40" y="207" width="780" height="34" rx="8" fill="var(--bg-soft)"/>' +
        '<rect x="40" y="207" width="341" height="34" fill="#0f766e"/><text x="210" y="230" text-anchor="middle" fill="#fff" class="ls-t sm">P1 (7)</text>' +
        '<rect x="381" y="207" width="49" height="34" fill="#6d28d9"/><text x="405" y="230" text-anchor="middle" fill="#fff" class="ls-t xs">P3</text>' +
        '<rect x="430" y="207" width="195" height="34" fill="#d97706"/><text x="527" y="230" text-anchor="middle" fill="#fff" class="ls-t sm">P2 (4)</text>' +
        '<rect x="625" y="207" width="195" height="34" fill="#dc2626"/><text x="722" y="230" text-anchor="middle" fill="#fff" class="ls-t sm">P4 (4)</text>' +
        '<rect x="40" y="280" width="780" height="86" rx="12" class="ls-box" />' +
        '<text x="60" y="308" class="ls-t">平均周转：FCFS = 8.75 ms　　SJF = 8.00 ms</text>' +
        '<text x="60" y="336" class="ls-t sm">SJF 把短作业 P3 提前，但它需要预知运行时间，长作业可能饥饿</text>' +
        '<text x="60" y="358" class="ls-t xs">RR 时间片：轮流执行，响应快；时间片太大退化成 FCFS，太小切换开销大</text>' +
        '</svg>'
    },
    {
      dur: 8200,
      caption: "线程共享进程的地址空间和文件，但各有自己的栈、寄存器和程序计数器。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="430" y="40" text-anchor="middle" class="ls-t big">线程：同一屋檐下的分身</text>' +
        '<rect x="50" y="80" width="760" height="270" rx="18" class="ls-box ls-fade"/>' +
        '<text x="80" y="112" class="ls-t brand">进程地址空间（共享）</text>' +
        '<rect x="80" y="130" width="700" height="50" rx="10" class="ls-box ok"/><text x="430" y="161" text-anchor="middle" class="ls-t">代码段 · 全局变量 · 堆 · 打开文件表</text>' +
        '<rect x="80" y="205" width="210" height="120" rx="12" class="ls-box hot ls-fade ls-d1"/><text x="185" y="235" text-anchor="middle" class="ls-t">线程 T1</text><text x="185" y="262" text-anchor="middle" class="ls-t xs">PC / 寄存器</text><text x="185" y="286" text-anchor="middle" class="ls-t xs">栈 / 局部变量</text><text x="185" y="310" text-anchor="middle" class="ls-t xs">线程 ID</text>' +
        '<rect x="325" y="205" width="210" height="120" rx="12" class="ls-box hot ls-fade ls-d2"/><text x="430" y="235" text-anchor="middle" class="ls-t">线程 T2</text><text x="430" y="262" text-anchor="middle" class="ls-t xs">PC / 寄存器</text><text x="430" y="286" text-anchor="middle" class="ls-t xs">栈 / 局部变量</text><text x="430" y="310" text-anchor="middle" class="ls-t xs">线程 ID</text>' +
        '<rect x="570" y="205" width="210" height="120" rx="12" class="ls-box hot ls-fade ls-d3"/><text x="675" y="235" text-anchor="middle" class="ls-t">线程 T3</text><text x="675" y="262" text-anchor="middle" class="ls-t xs">PC / 寄存器</text><text x="675" y="286" text-anchor="middle" class="ls-t xs">栈 / 局部变量</text><text x="675" y="310" text-anchor="middle" class="ls-t xs">线程 ID</text>' +
        '<text x="430" y="380" text-anchor="middle" class="ls-t sm">线程切换只换私有现场，不换页表，所以比进程切换便宜</text>' +
        '</svg>'
    },
    {
      dur: 9000,
      caption: "PV 操作：生产者先申请空位再进临界区，消费者先申请数据再进临界区。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="40" text-anchor="middle" class="ls-t big">生产者-消费者：三个信号量</text>' +
        '<rect x="40" y="90" width="170" height="90" rx="14" class="ls-box hot ls-fade"/><text x="125" y="125" text-anchor="middle" class="ls-t">生产者</text><text x="125" y="152" text-anchor="middle" class="ls-t xs">P(empty) → P(mutex)</text>' +
        '<rect x="645" y="90" width="170" height="90" rx="14" class="ls-box hot ls-fade ls-d4"/><text x="730" y="125" text-anchor="middle" class="ls-t">消费者</text><text x="730" y="152" text-anchor="middle" class="ls-t xs">P(full) → P(mutex)</text>' +
        '<rect x="270" y="90" width="320" height="150" rx="14" class="ls-box" />' +
        '<text x="430" y="118" text-anchor="middle" class="ls-t brand">缓冲区（n 个槽）</text>' +
        '<rect x="292" y="138" width="42" height="42" rx="7" class="ls-box ok"/><text x="313" y="165" text-anchor="middle" class="ls-t sm">1</text>' +
        '<rect x="344" y="138" width="42" height="42" rx="7" class="ls-box ok"/><text x="365" y="165" text-anchor="middle" class="ls-t sm">2</text>' +
        '<rect x="396" y="138" width="42" height="42" rx="7" class="ls-box"/><text x="417" y="165" text-anchor="middle" class="ls-t sm">3</text>' +
        '<rect x="448" y="138" width="42" height="42" rx="7" class="ls-box"/><text x="469" y="165" text-anchor="middle" class="ls-t sm">4</text>' +
        '<rect x="500" y="138" width="42" height="42" rx="7" class="ls-box"/><text x="521" y="165" text-anchor="middle" class="ls-t sm">5</text>' +
        '<text x="430" y="216" text-anchor="middle" class="ls-t xs">mutex=1 保护缓冲区；empty=n；full=0</text>' +
        '<path d="M212 135 H265" class="ls-arrow" marker-end="url(#arw)"/><text x="238" y="123" text-anchor="middle" class="ls-t xs">put</text>' +
        '<path d="M595 135 H640" class="ls-arrow" marker-end="url(#arw)"/><text x="618" y="123" text-anchor="middle" class="ls-t xs">get</text>' +
        '<rect x="270" y="275" width="320" height="76" rx="12" class="ls-box warn" />' +
        '<text x="430" y="302" text-anchor="middle" class="ls-t red">先 P 资源，后 P 互斥</text>' +
        '<text x="430" y="328" text-anchor="middle" class="ls-t xs">反过来：持有 mutex 等 empty → 消费者进不来 → 死锁</text>' +
        '<text x="430" y="382" text-anchor="middle" class="ls-t sm">信号量 value &lt; 0 时，绝对值 = 等待进程数</text>' +
        '</svg>'
    },
    {
      dur: 8600,
      caption: "死锁四个必要条件：互斥、不可剥夺、请求并保持、循环等待。四个同时成立才可能死锁。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="40" text-anchor="middle" class="ls-t big">死锁：谁也走不了</text>' +
        '<rect x="40" y="80" width="300" height="70" rx="12" class="ls-box hot ls-fade"/><text x="190" y="108" text-anchor="middle" class="ls-t">① 互斥</text><text x="190" y="132" text-anchor="middle" class="ls-t xs">资源一次只给一个进程</text>' +
        '<rect x="520" y="80" width="300" height="70" rx="12" class="ls-box hot ls-fade ls-d1"/><text x="670" y="108" text-anchor="middle" class="ls-t">② 不可剥夺</text><text x="670" y="132" text-anchor="middle" class="ls-t xs">拿到的资源不能被抢走</text>' +
        '<rect x="40" y="170" width="300" height="70" rx="12" class="ls-box hot ls-fade ls-d2"/><text x="190" y="198" text-anchor="middle" class="ls-t">③ 请求并保持</text><text x="190" y="222" text-anchor="middle" class="ls-t xs">占着旧的，又要新的</text>' +
        '<rect x="520" y="170" width="300" height="70" rx="12" class="ls-box hot ls-fade ls-d3"/><text x="670" y="198" text-anchor="middle" class="ls-t">④ 循环等待</text><text x="670" y="222" text-anchor="middle" class="ls-t xs">存在环形等待链</text>' +
        '<text x="430" y="300" text-anchor="middle" class="ls-t brand">P1 持有 R1，等 R2；P2 持有 R2，等 R1</text>' +
        '<circle cx="330" cy="350" r="26" class="ls-box hot"/><text x="330" y="356" text-anchor="middle" class="ls-t sm">P1</text>' +
        '<circle cx="530" cy="350" r="26" class="ls-box hot"/><text x="530" y="356" text-anchor="middle" class="ls-t sm">P2</text>' +
        '<rect x="390" y="330" width="34" height="40" rx="4" class="ls-box accent"/><text x="407" y="356" text-anchor="middle" class="ls-t xs">R1</text>' +
        '<rect x="444" y="330" width="34" height="40" rx="4" class="ls-box accent"/><text x="461" y="356" text-anchor="middle" class="ls-t xs">R2</text>' +
        '<path d="M356 344 H388" class="ls-arrow red" marker-end="url(#arw)"/>' +
        '<path d="M424 344 H442" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M478 344 H504" class="ls-arrow red" marker-end="url(#arw)"/>' +
        '<path d="M504 360 H426 V374 H356" class="ls-arrow dash" marker-end="url(#arw)"/>' +
        '</svg>'
    }
  ]
};
