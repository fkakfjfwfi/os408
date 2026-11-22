/* 第 3 集《内存的障眼法》分幕数据 */
window.OS_LESSON = {
  title: "第 3 集《内存的障眼法》",
  scenes: [
    {
      dur: 7600,
      caption: "每个进程都以为自己独占一整片从 0 开始的地址空间，真正住在哪里由 MMU 翻译。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">逻辑地址 ≠ 物理地址</text>' +
        '<rect x="40" y="90" width="230" height="230" rx="16" class="ls-box hot ls-fade"/>' +
        '<text x="155" y="120" text-anchor="middle" class="ls-t brand">进程的虚拟地址空间</text>' +
        '<text x="155" y="150" text-anchor="middle" class="ls-t sm">0x00000000 ~ 0xFFFFFFFF</text>' +
        '<rect x="70" y="175" width="170" height="40" rx="8" class="ls-box"/><text x="155" y="201" text-anchor="middle" class="ls-t xs">代码段</text>' +
        '<rect x="70" y="225" width="170" height="40" rx="8" class="ls-box"/><text x="155" y="251" text-anchor="middle" class="ls-t xs">数据段 / 堆</text>' +
        '<rect x="70" y="275" width="170" height="30" rx="8" class="ls-box"/><text x="155" y="296" text-anchor="middle" class="ls-t xs">栈</text>' +
        '<rect x="330" y="150" width="170" height="110" rx="14" class="ls-box accent ls-fade ls-d1"/>' +
        '<text x="415" y="182" text-anchor="middle" class="ls-t">MMU</text>' +
        '<text x="415" y="208" text-anchor="middle" class="ls-t xs">查页表 / TLB</text>' +
        '<text x="415" y="232" text-anchor="middle" class="ls-t xs">越界检查</text>' +
        '<path d="M272 205 H327" class="ls-arrow brand" marker-end="url(#arw)"/>' +
        '<text x="300" y="192" text-anchor="middle" class="ls-t xs">逻辑地址</text>' +
        '<path d="M503 205 H558" class="ls-arrow brand" marker-end="url(#arw)"/>' +
        '<text x="530" y="192" text-anchor="middle" class="ls-t xs">物理地址</text>' +
        '<rect x="562" y="90" width="258" height="230" rx="16" class="ls-box ok ls-fade ls-d3"/>' +
        '<text x="691" y="120" text-anchor="middle" class="ls-t green">物理内存（页框）</text>' +
        '<rect x="585" y="145" width="60" height="34" rx="6" class="ls-box"/><text x="615" y="167" text-anchor="middle" class="ls-t xs">框 0</text>' +
        '<rect x="655" y="145" width="60" height="34" rx="6" class="ls-box"/><text x="685" y="167" text-anchor="middle" class="ls-t xs">框 1</text>' +
        '<rect x="725" y="145" width="60" height="34" rx="6" class="ls-box hot"/><text x="755" y="167" text-anchor="middle" class="ls-t xs">框 2</text>' +
        '<rect x="585" y="190" width="60" height="34" rx="6" class="ls-box"/><text x="615" y="212" text-anchor="middle" class="ls-t xs">框 3</text>' +
        '<rect x="655" y="190" width="60" height="34" rx="6" class="ls-box"/><text x="685" y="212" text-anchor="middle" class="ls-t xs">框 4</text>' +
        '<rect x="725" y="190" width="60" height="34" rx="6" class="ls-box"/><text x="755" y="212" text-anchor="middle" class="ls-t xs">框 5</text>' +
        '<text x="691" y="270" text-anchor="middle" class="ls-t sm">页框 2 里放的可能是</text>' +
        '<text x="691" y="294" text-anchor="middle" class="ls-t sm">任意进程的任意一页</text>' +
        '<text x="430" y="370" text-anchor="middle" class="ls-t xs">进程不需要知道真实位置，MMU 负责把逻辑地址翻译成物理地址</text>' +
        '</svg>'
    },
    {
      dur: 8200,
      caption: "分页把地址空间切成等长的页，把内存切成等长的页框；页可以散落，页表负责登记。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">分页：把地址空间装进标准箱子</text>' +
        '<text x="150" y="84" text-anchor="middle" class="ls-t brand">进程页</text>' +
        '<rect x="60" y="100" width="180" height="44" rx="8" class="ls-box hot"/><text x="150" y="128" text-anchor="middle" class="ls-t sm">页 0（代码）</text>' +
        '<rect x="60" y="150" width="180" height="44" rx="8" class="ls-box hot"/><text x="150" y="178" text-anchor="middle" class="ls-t sm">页 1（数据）</text>' +
        '<rect x="60" y="200" width="180" height="44" rx="8" class="ls-box hot"/><text x="150" y="228" text-anchor="middle" class="ls-t sm">页 2（堆）</text>' +
        '<rect x="60" y="250" width="180" height="44" rx="8" class="ls-box warn"/><text x="150" y="278" text-anchor="middle" class="ls-t sm">页 3（栈，未满）</text>' +
        '<text x="150" y="318" text-anchor="middle" class="ls-t xs">最后一页没装满 → 内部碎片</text>' +
        '<path d="M255 210 H350" class="ls-arrow brand" marker-end="url(#arw)"/>' +
        '<text x="302" y="196" text-anchor="middle" class="ls-t xs">页表</text>' +
        '<rect x="365" y="100" width="170" height="200" rx="12" class="ls-box accent"/>' +
        '<text x="450" y="128" text-anchor="middle" class="ls-t">页表</text>' +
        '<text x="450" y="158" text-anchor="middle" class="ls-t mono">0 → 5</text>' +
        '<text x="450" y="184" text-anchor="middle" class="ls-t mono">1 → 2</text>' +
        '<text x="450" y="210" text-anchor="middle" class="ls-t mono">2 → 8</text>' +
        '<text x="450" y="236" text-anchor="middle" class="ls-t mono">3 → 1</text>' +
        '<text x="450" y="272" text-anchor="middle" class="ls-t xs">页号 → 页框号</text>' +
        '<path d="M550 210 H645" class="ls-arrow brand" marker-end="url(#arw)"/>' +
        '<text x="598" y="196" text-anchor="middle" class="ls-t xs">映射</text>' +
        '<text x="740" y="84" text-anchor="middle" class="ls-t green">物理内存页框</text>' +
        '<rect x="650" y="100" width="180" height="40" rx="8" class="ls-box"/><text x="740" y="126" text-anchor="middle" class="ls-t xs">框 0</text>' +
        '<rect x="650" y="146" width="180" height="40" rx="8" class="ls-box ok"/><text x="740" y="172" text-anchor="middle" class="ls-t xs">框 1 ← 页 3</text>' +
        '<rect x="650" y="192" width="180" height="40" rx="8" class="ls-box ok"/><text x="740" y="218" text-anchor="middle" class="ls-t xs">框 2 ← 页 1</text>' +
        '<rect x="650" y="238" width="180" height="40" rx="8" class="ls-box"/><text x="740" y="264" text-anchor="middle" class="ls-t xs">框 3（空）</text>' +
        '<rect x="650" y="284" width="180" height="40" rx="8" class="ls-box ok"/><text x="740" y="310" text-anchor="middle" class="ls-t xs">框 5 ← 页 0</text>' +
        '<text x="430" y="378" text-anchor="middle" class="ls-t sm">页号连续，页框可以不连续；没有外部碎片，只有最后一页的内部碎片</text>' +
        '</svg>'
    },
    {
      dur: 8600,
      caption: "地址翻译：逻辑地址拆成页号和偏移，查页表得到页框号，再拼出物理地址。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">页号 + 偏移 = 物理地址</text>' +
        '<rect x="40" y="90" width="780" height="60" rx="10" class="ls-box" />' +
        '<rect x="40" y="90" width="430" height="60" rx="10" fill="var(--brand-soft)" stroke="var(--brand)"/>' +
        '<text x="255" y="128" text-anchor="middle" class="ls-t brand">逻辑地址 0x1A2F（32 位）</text>' +
        '<rect x="470" y="90" width="350" height="60" rx="10" fill="var(--bg-soft)"/>' +
        '<text x="645" y="128" text-anchor="middle" class="ls-t">页大小 4KB → 偏移 12 位</text>' +
        '<rect x="60" y="200" width="300" height="60" rx="10" class="ls-box hot"/>' +
        '<text x="210" y="226" text-anchor="middle" class="ls-t">页号 P = 0x1</text>' +
        '<text x="210" y="248" text-anchor="middle" class="ls-t xs">高位部分</text>' +
        '<rect x="380" y="200" width="300" height="60" rx="10" class="ls-box ok"/>' +
        '<text x="530" y="226" text-anchor="middle" class="ls-t">页内偏移 W = 0xA2F</text>' +
        '<text x="530" y="248" text-anchor="middle" class="ls-t xs">低位 12 位不变</text>' +
        '<path d="M210 263 V300" class="ls-arrow brand" marker-end="url(#arw)"/>' +
        '<text x="210" y="285" class="ls-t xs">查页表</text>' +
        '<rect x="60" y="305" width="300" height="55" rx="10" class="ls-box accent"/>' +
        '<text x="210" y="338" text-anchor="middle" class="ls-t">页表[1] = 页框 8</text>' +
        '<path d="M380 330 H520" class="ls-arrow brand" marker-end="url(#arw)"/>' +
        '<rect x="525" y="305" width="260" height="55" rx="10" class="ls-box violet"/>' +
        '<text x="655" y="338" text-anchor="middle" class="ls-t">物理地址 = 8×4KB + 0xA2F</text>' +
        '<text x="430" y="390" text-anchor="middle" class="ls-t brand">= 0x8A2F</text>' +
        '</svg>'
    },
    {
      dur: 8200,
      caption: "TLB 是页表的高速缓存：命中少访存一次，未命中才去内存查页表。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">TLB：地址翻译的缓存</text>' +
        '<rect x="40" y="150" width="130" height="80" rx="12" class="ls-box"/>' +
        '<text x="105" y="183" text-anchor="middle" class="ls-t">CPU</text>' +
        '<text x="105" y="208" text-anchor="middle" class="ls-t xs">逻辑地址</text>' +
        '<rect x="220" y="120" width="180" height="140" rx="12" class="ls-box hot ls-fade"/>' +
        '<text x="310" y="150" text-anchor="middle" class="ls-t brand">TLB</text>' +
        '<text x="310" y="180" text-anchor="middle" class="ls-t xs">相联存储器</text>' +
        '<text x="310" y="206" text-anchor="middle" class="ls-t xs">页号 → 页框号</text>' +
        '<text x="310" y="232" text-anchor="middle" class="ls-t xs">命中率 α</text>' +
        '<path d="M172 190 H217" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<rect x="470" y="230" width="160" height="100" rx="12" class="ls-box accent ls-fade ls-d2"/>' +
        '<text x="550" y="260" text-anchor="middle" class="ls-t">页表（内存）</text>' +
        '<text x="550" y="288" text-anchor="middle" class="ls-t xs">未命中时查这里</text>' +
        '<path d="M402 220 L467 265" class="ls-arrow red" marker-end="url(#arw)"/>' +
        '<text x="430" y="238" class="ls-t xs red">miss</text>' +
        '<rect x="690" y="120" width="130" height="80" rx="12" class="ls-box ok"/>' +
        '<text x="755" y="152" text-anchor="middle" class="ls-t">物理地址</text>' +
        '<text x="755" y="178" text-anchor="middle" class="ls-t xs">访问数据</text>' +
        '<path d="M402 170 H687" class="ls-arrow brand" marker-end="url(#arw)"/>' +
        '<text x="545" y="158" text-anchor="middle" class="ls-t xs green">hit：直接拿页框号</text>' +
        '<path d="M632 280 H755 V203" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<text x="430" y="372" text-anchor="middle" class="ls-t sm">忽略 TLB 访问时间：EAT = α×m + (1−α)×2m = (2−α)×m</text>' +
        '</svg>'
    },
    {
      dur: 8800,
      caption: "虚拟内存：只把正在用的页放进内存，用到不在内存的页就触发缺页，从磁盘调进来。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">缺页：内存里没有，去磁盘拿</text>' +
        '<rect x="40" y="90" width="360" height="240" rx="16" class="ls-box ok ls-fade"/>' +
        '<text x="220" y="120" text-anchor="middle" class="ls-t green">物理内存（只有 3 个页框）</text>' +
        '<rect x="70" y="145" width="100" height="60" rx="8" class="ls-box ok"/><text x="120" y="181" text-anchor="middle" class="ls-t sm">页 1</text>' +
        '<rect x="185" y="145" width="100" height="60" rx="8" class="ls-box ok"/><text x="235" y="181" text-anchor="middle" class="ls-t sm">页 3</text>' +
        '<rect x="300" y="145" width="70" height="60" rx="8" class="ls-box"/><text x="335" y="181" text-anchor="middle" class="ls-t sm">空</text>' +
        '<text x="220" y="250" text-anchor="middle" class="ls-t sm">页表：页 2 的存在位 = 0</text>' +
        '<text x="220" y="278" text-anchor="middle" class="ls-t xs">访问页 2 → 缺页异常</text>' +
        '<path d="M405 210 H520" class="ls-arrow red" marker-end="url(#arw)"/>' +
        '<text x="462" y="196" text-anchor="middle" class="ls-t xs red">调入</text>' +
        '<rect x="525" y="90" width="295" height="240" rx="16" class="ls-box accent ls-fade ls-d2"/>' +
        '<text x="672" y="120" text-anchor="middle" class="ls-t" fill="var(--accent)">外存 / 交换区</text>' +
        '<rect x="555" y="145" width="100" height="45" rx="8" class="ls-box"/><text x="605" y="173" text-anchor="middle" class="ls-t xs">页 0</text>' +
        '<rect x="555" y="200" width="100" height="45" rx="8" class="ls-box hot"/><text x="605" y="228" text-anchor="middle" class="ls-t xs">页 2</text>' +
        '<rect x="555" y="255" width="100" height="45" rx="8" class="ls-box"/><text x="605" y="283" text-anchor="middle" class="ls-t xs">页 4</text>' +
        '<rect x="680" y="145" width="110" height="45" rx="8" class="ls-box"/><text x="735" y="173" text-anchor="middle" class="ls-t xs">…</text>' +
        '<text x="430" y="372" text-anchor="middle" class="ls-t sm">缺页处理完，重新执行刚才那条指令；不是从下一条继续</text>' +
        '</svg>'
    },
    {
      dur: 9000,
      caption: "内存满了要换页：FIFO 看谁来得早，LRU 看谁最久没被用；FIFO 可能出现 Belady 异常。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">换谁？两种经典策略</text>' +
        '<text x="40" y="86" class="ls-t brand">访问序列：1　2　3　4　1　2</text>' +
        '<rect x="40" y="105" width="780" height="100" rx="12" fill="var(--bg-soft)"/>' +
        '<text x="60" y="132" class="ls-t sm">FIFO：先来先走。访问 4 时，淘汰最早进入的 1。</text>' +
        '<rect x="60" y="145" width="70" height="42" rx="7" class="ls-box"/><text x="95" y="172" text-anchor="middle" class="ls-t sm">1</text>' +
        '<rect x="140" y="145" width="70" height="42" rx="7" class="ls-box"/><text x="175" y="172" text-anchor="middle" class="ls-t sm">2</text>' +
        '<rect x="220" y="145" width="70" height="42" rx="7" class="ls-box"/><text x="255" y="172" text-anchor="middle" class="ls-t sm">3</text>' +
        '<path d="M305 166 H370" class="ls-arrow red" marker-end="url(#arw)"/>' +
        '<text x="337" y="152" text-anchor="middle" class="ls-t xs red">4 进来</text>' +
        '<rect x="380" y="145" width="70" height="42" rx="7" class="ls-box warn"/><text x="415" y="172" text-anchor="middle" class="ls-t sm">4</text>' +
        '<text x="470" y="172" class="ls-t sm">淘汰 1（最早进入）</text>' +
        '<text x="40" y="248" class="ls-t brand">LRU：最近最久没用的先走。访问 4 时，1 最久没被用，淘汰 1。</text>' +
        '<rect x="40" y="267" width="780" height="80" rx="12" fill="var(--brand-soft)"/>' +
        '<text x="60" y="294" class="ls-t sm">1（上次访问：第 1 次）　2（第 2 次）　3（第 3 次）</text>' +
        '<text x="60" y="322" class="ls-t sm">→ 4 到来，淘汰最久未使用的 1</text>' +
        '<text x="430" y="378" text-anchor="middle" class="ls-t xs">FIFO 在 3 个页框缺页 9 次，4 个页框反而 10 次 —— Belady 异常</text>' +
        '</svg>'
    },
    {
      dur: 8400,
      caption: "页框太少会抖动：系统忙于换页，CPU 利用率反而下降；工作集描述进程真正需要的页面。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">抖动：越换越慢</text>' +
        '<line x1="90" y1="300" x2="760" y2="300" class="ls-line"/>' +
        '<line x1="90" y1="300" x2="90" y2="100" class="ls-line"/>' +
        '<text x="70" y="200" text-anchor="middle" class="ls-t xs" transform="rotate(-90 70 200)">CPU 利用率</text>' +
        '<text x="425" y="335" text-anchor="middle" class="ls-t xs">分配给进程的页框数 →</text>' +
        '<path d="M90 290 C180 260 250 170 330 145 C420 118 500 140 560 200 C620 260 700 285 760 292" fill="none" stroke="var(--brand)" stroke-width="3"/>' +
        '<line x1="330" y1="120" x2="330" y2="300" stroke="var(--red)" stroke-dasharray="5 4"/>' +
        '<text x="330" y="112" text-anchor="middle" class="ls-t red">抖动区</text>' +
        '<text x="500" y="100" text-anchor="middle" class="ls-t green">工作集足够 → 利用率高</text>' +
        '<rect x="520" y="200" width="270" height="70" rx="10" class="ls-box ok"/>' +
        '<text x="655" y="226" text-anchor="middle" class="ls-t sm">工作集 WSS：窗口 Δ 内</text>' +
        '<text x="655" y="250" text-anchor="middle" class="ls-t sm">实际访问的页面集合</text>' +
        '<text x="430" y="382" text-anchor="middle" class="ls-t xs">分配的页框 &lt; WSS → 频繁缺页 → 抖动；解决办法：加页框或挂起进程</text>' +
        '</svg>'
    }
  ]
};
