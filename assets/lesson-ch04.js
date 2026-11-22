/* 第 4 集《文件的旅程》分幕数据 */
window.OS_LESSON = {
  title: "第 4 集《文件的旅程》",
  scenes: [
    {
      dur: 7800,
      caption: "你只记得文件名，文件系统却要一路找到目录项、inode，最后定位到磁盘块。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">一个名字，四层跳转</text>' +
        '<rect x="40" y="130" width="150" height="80" rx="12" class="ls-box hot ls-fade"/><text x="115" y="162" text-anchor="middle" class="ls-t">report.pdf</text><text x="115" y="188" text-anchor="middle" class="ls-t xs">用户看到的文件名</text>' +
        '<rect x="230" y="130" width="150" height="80" rx="12" class="ls-box ls-fade ls-d1"/><text x="305" y="162" text-anchor="middle" class="ls-t">目录项</text><text x="305" y="188" text-anchor="middle" class="ls-t xs">名字 → inode 42</text>' +
        '<rect x="420" y="130" width="150" height="80" rx="12" class="ls-box accent ls-fade ls-d2"/><text x="495" y="162" text-anchor="middle" class="ls-t">inode 42</text><text x="495" y="188" text-anchor="middle" class="ls-t xs">权限/大小/块指针</text>' +
        '<rect x="610" y="130" width="210" height="80" rx="12" class="ls-box ok ls-fade ls-d3"/><text x="715" y="162" text-anchor="middle" class="ls-t">数据块</text><text x="715" y="188" text-anchor="middle" class="ls-t xs">5, 8, 12 …</text>' +
        '<path d="M192 170 H227" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M382 170 H417" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M572 170 H607" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<text x="430" y="280" text-anchor="middle" class="ls-t sm">目录项只存「名字 + inode 号」，文件属性在 inode 里</text>' +
        '<text x="430" y="312" text-anchor="middle" class="ls-t xs">打开文件后，fd 直接指向 inode，不必每次重新解析路径</text>' +
        '<text x="430" y="370" text-anchor="middle" class="ls-t brand">文件名 → 目录 → inode → 数据块</text>' +
        '</svg>'
    },
    {
      dur: 7800,
      caption: "目录是一棵树，路径解析就是逐级查目录项；共享文件会让目录变成无环图。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="42" text-anchor="middle" class="ls-t big">目录树与路径解析</text>' +
        '<rect x="380" y="75" width="100" height="50" rx="10" class="ls-box hot"/><text x="430" y="106" text-anchor="middle" class="ls-t">/ 根目录</text>' +
        '<rect x="200" y="165" width="100" height="50" rx="10" class="ls-box"/><text x="250" y="196" text-anchor="middle" class="ls-t">home</text>' +
        '<rect x="380" y="165" width="100" height="50" rx="10" class="ls-box"/><text x="430" y="196" text-anchor="middle" class="ls-t">etc</text>' +
        '<rect x="560" y="165" width="100" height="50" rx="10" class="ls-box"/><text x="610" y="196" text-anchor="middle" class="ls-t">usr</text>' +
        '<rect x="130" y="260" width="100" height="50" rx="10" class="ls-box"/><text x="180" y="291" text-anchor="middle" class="ls-t">alice</text>' +
        '<rect x="270" y="260" width="110" height="50" rx="10" class="ls-box ok"/><text x="325" y="291" text-anchor="middle" class="ls-t">a.txt</text>' +
        '<rect x="380" y="260" width="100" height="50" rx="10" class="ls-box"/><text x="430" y="291" text-anchor="middle" class="ls-t">b.txt</text>' +
        '<path d="M430 127 V162" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M390 127 L260 162" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M470 127 L600 162" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M250 217 L195 257" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M250 217 L320 257" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<path d="M430 217 L430 257" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<text x="430" y="350" text-anchor="middle" class="ls-t sm">绝对路径 /home/alice/a.txt：从根开始逐级查找</text>' +
        '<text x="430" y="378" text-anchor="middle" class="ls-t xs">相对路径从当前工作目录开始；硬链接让多个目录项指向同一 inode</text>' +
        '</svg>'
    },
    {
      dur: 9000,
      caption: "连续分配最快但有碎片；链接分配灵活但只能顺序读；索引分配支持随机访问。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="38" text-anchor="middle" class="ls-t big">文件在磁盘上的三种放法</text>' +
        '<text x="40" y="82" class="ls-t brand">连续分配</text>' +
        '<rect x="150" y="62" width="60" height="34" rx="6" class="ls-box ok"/><text x="180" y="84" text-anchor="middle" class="ls-t sm">5</text>' +
        '<rect x="212" y="62" width="60" height="34" rx="6" class="ls-box ok"/><text x="242" y="84" text-anchor="middle" class="ls-t sm">6</text>' +
        '<rect x="274" y="62" width="60" height="34" rx="6" class="ls-box ok"/><text x="304" y="84" text-anchor="middle" class="ls-t sm">7</text>' +
        '<rect x="336" y="62" width="60" height="34" rx="6" class="ls-box ok"/><text x="366" y="84" text-anchor="middle" class="ls-t sm">8</text>' +
        '<text x="430" y="84" class="ls-t xs">连续、寻道少，但扩展难、有外部碎片</text>' +
        '<text x="40" y="152" class="ls-t brand">链接分配</text>' +
        '<rect x="150" y="132" width="60" height="34" rx="6" class="ls-box hot"/><text x="180" y="154" text-anchor="middle" class="ls-t sm">5</text>' +
        '<path d="M212 149 H260" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<rect x="262" y="132" width="60" height="34" rx="6" class="ls-box hot"/><text x="292" y="154" text-anchor="middle" class="ls-t sm">12</text>' +
        '<path d="M324 149 H372" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<rect x="374" y="132" width="60" height="34" rx="6" class="ls-box hot"/><text x="404" y="154" text-anchor="middle" class="ls-t sm">3</text>' +
        '<path d="M436 149 H484" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<rect x="486" y="132" width="60" height="34" rx="6" class="ls-box hot"/><text x="516" y="154" text-anchor="middle" class="ls-t sm">9</text>' +
        '<text x="570" y="154" class="ls-t xs">每块存下一块指针，只能顺序读</text>' +
        '<text x="40" y="222" class="ls-t brand">索引分配</text>' +
        '<rect x="150" y="202" width="80" height="60" rx="8" class="ls-box accent"/><text x="190" y="226" text-anchor="middle" class="ls-t sm">索引块</text><text x="190" y="248" text-anchor="middle" class="ls-t xs">12,3,9,20</text>' +
        '<path d="M232 232 H280" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<rect x="282" y="202" width="55" height="34" rx="6" class="ls-box"/><text x="309" y="224" text-anchor="middle" class="ls-t sm">12</text>' +
        '<rect x="342" y="202" width="55" height="34" rx="6" class="ls-box"/><text x="369" y="224" text-anchor="middle" class="ls-t sm">3</text>' +
        '<rect x="402" y="202" width="55" height="34" rx="6" class="ls-box"/><text x="429" y="224" text-anchor="middle" class="ls-t sm">9</text>' +
        '<rect x="462" y="202" width="55" height="34" rx="6" class="ls-box"/><text x="489" y="224" text-anchor="middle" class="ls-t sm">20</text>' +
        '<text x="540" y="224" class="ls-t xs">索引块登记所有块号，可随机访问</text>' +
        '<rect x="40" y="300" width="780" height="70" rx="12" fill="var(--brand-soft)"/>' +
        '<text x="430" y="330" text-anchor="middle" class="ls-t brand">没有银弹：连续快但僵化，链接灵活但慢，索引兼顾但多占空间</text>' +
        '<text x="430" y="354" text-anchor="middle" class="ls-t xs">大文件用「混合索引」：直接项 + 一级/二级/三级间接</text>' +
        '</svg>'
    },
    {
      dur: 8800,
      caption: "inode 用 12 个直接项加三级间接，能寻址到 TB 级；每级能放多少指针由块大小除以地址大小决定。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<defs><marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>' +
        '<text x="430" y="40" text-anchor="middle" class="ls-t big">inode 的混合索引</text>' +
        '<rect x="40" y="100" width="190" height="220" rx="14" class="ls-box hot ls-fade"/>' +
        '<text x="135" y="130" text-anchor="middle" class="ls-t brand">inode</text>' +
        '<text x="60" y="162" class="ls-t sm">直接项 ×12</text>' +
        '<text x="60" y="192" class="ls-t sm">一级间接 ×1</text>' +
        '<text x="60" y="222" class="ls-t sm">二级间接 ×1</text>' +
        '<text x="60" y="252" class="ls-t sm">三级间接 ×1</text>' +
        '<text x="60" y="292" class="ls-t xs">权限 / 大小 / 链接计数</text>' +
        '<path d="M232 150 H300" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<rect x="305" y="125" width="130" height="50" rx="8" class="ls-box ok"/><text x="370" y="155" text-anchor="middle" class="ls-t sm">12 个数据块</text>' +
        '<path d="M232 205 H300" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<rect x="305" y="185" width="130" height="50" rx="8" class="ls-box accent"/><text x="370" y="208" text-anchor="middle" class="ls-t sm">索引块 → 数据块</text><text x="370" y="226" text-anchor="middle" class="ls-t xs">P 个指针</text>' +
        '<path d="M232 260 H300" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<rect x="305" y="245" width="130" height="50" rx="8" class="ls-box violet"/><text x="370" y="268" text-anchor="middle" class="ls-t sm">索引块 → 索引块</text><text x="370" y="286" text-anchor="middle" class="ls-t xs">P² 个数据块</text>' +
        '<path d="M232 315 H300" class="ls-arrow" marker-end="url(#arw)"/>' +
        '<rect x="305" y="305" width="130" height="50" rx="8" class="ls-box warn"/><text x="370" y="328" text-anchor="middle" class="ls-t sm">三级间接</text><text x="370" y="346" text-anchor="middle" class="ls-t xs">P³ 个数据块</text>' +
        '<rect x="480" y="105" width="340" height="210" rx="14" class="ls-box" />' +
        '<text x="650" y="136" text-anchor="middle" class="ls-t brand">以 4KB 块、4B 地址为例</text>' +
        '<text x="505" y="170" class="ls-t sm">P = 4096 / 4 = 1024</text>' +
        '<text x="505" y="200" class="ls-t sm">直接：48KB</text>' +
        '<text x="505" y="230" class="ls-t sm">一级：4MB</text>' +
        '<text x="505" y="260" class="ls-t sm">二级：4GB</text>' +
        '<text x="505" y="290" class="ls-t sm">三级：4TB</text>' +
        '<text x="430" y="380" text-anchor="middle" class="ls-t brand">最大文件 ≈ 4.004TB：由最高级间接项主导</text>' +
        '</svg>'
    },
    {
      dur: 8200,
      caption: "位示图用一位表示一个磁盘块：字号 = 块号 ÷ 字长，位号 = 块号 mod 字长。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="430" y="40" text-anchor="middle" class="ls-t big">位示图：一位一个块</text>' +
        '<text x="60" y="86" class="ls-t sm">字长 32 位，块号 100 → 字号 3，位号 4</text>' +
        '<g class="ls-fade">' +
        '<text x="50" y="130" class="ls-t xs">字 0</text><text x="50" y="170" class="ls-t xs">字 1</text><text x="50" y="210" class="ls-t xs">字 2</text><text x="50" y="250" class="ls-t xs">字 3</text>' +
        '<text x="50" y="290" class="ls-t xs">字 4</text>' +
        '</g>' +
        '<g class="ls-fade ls-d1">' +
        '<rect x="100" y="108" width="34" height="30" rx="4" class="ls-box"/><rect x="140" y="108" width="34" height="30" rx="4" class="ls-box"/><rect x="180" y="108" width="34" height="30" rx="4" class="ls-box"/><rect x="220" y="108" width="34" height="30" rx="4" class="ls-box"/><rect x="260" y="108" width="34" height="30" rx="4" class="ls-box"/><rect x="300" y="108" width="34" height="30" rx="4" class="ls-box"/><rect x="340" y="108" width="34" height="30" rx="4" class="ls-box"/><rect x="380" y="108" width="34" height="30" rx="4" class="ls-box"/><rect x="420" y="108" width="34" height="30" rx="4" class="ls-box"/><rect x="460" y="108" width="34" height="30" rx="4" class="ls-box"/><rect x="500" y="108" width="34" height="30" rx="4" class="ls-box"/><rect x="540" y="108" width="34" height="30" rx="4" class="ls-box"/><rect x="580" y="108" width="34" height="30" rx="4" class="ls-box"/><rect x="620" y="108" width="34" height="30" rx="4" class="ls-box"/><rect x="660" y="108" width="34" height="30" rx="4" class="ls-box"/><rect x="700" y="108" width="34" height="30" rx="4" class="ls-box"/>' +
        '</g>' +
        '<g class="ls-fade ls-d2">' +
        '<rect x="100" y="148" width="34" height="30" rx="4" class="ls-box"/><rect x="140" y="148" width="34" height="30" rx="4" class="ls-box"/><rect x="180" y="148" width="34" height="30" rx="4" class="ls-box"/><rect x="220" y="148" width="34" height="30" rx="4" class="ls-box"/><rect x="260" y="148" width="34" height="30" rx="4" class="ls-box"/><rect x="300" y="148" width="34" height="30" rx="4" class="ls-box"/><rect x="340" y="148" width="34" height="30" rx="4" class="ls-box"/><rect x="380" y="148" width="34" height="30" rx="4" class="ls-box"/><rect x="420" y="148" width="34" height="30" rx="4" class="ls-box"/><rect x="460" y="148" width="34" height="30" rx="4" class="ls-box"/><rect x="500" y="148" width="34" height="30" rx="4" class="ls-box"/><rect x="540" y="148" width="34" height="30" rx="4" class="ls-box"/><rect x="580" y="148" width="34" height="30" rx="4" class="ls-box"/><rect x="620" y="148" width="34" height="30" rx="4" class="ls-box"/><rect x="660" y="148" width="34" height="30" rx="4" class="ls-box"/><rect x="700" y="148" width="34" height="30" rx="4" class="ls-box"/>' +
        '</g>' +
        '<g class="ls-fade ls-d3">' +
        '<rect x="100" y="188" width="34" height="30" rx="4" class="ls-box"/><rect x="140" y="188" width="34" height="30" rx="4" class="ls-box"/><rect x="180" y="188" width="34" height="30" rx="4" class="ls-box"/><rect x="220" y="188" width="34" height="30" rx="4" class="ls-box"/><rect x="260" y="188" width="34" height="30" rx="4" class="ls-box"/><rect x="300" y="188" width="34" height="30" rx="4" class="ls-box"/><rect x="340" y="188" width="34" height="30" rx="4" class="ls-box"/><rect x="380" y="188" width="34" height="30" rx="4" class="ls-box"/><rect x="420" y="188" width="34" height="30" rx="4" class="ls-box"/><rect x="460" y="188" width="34" height="30" rx="4" class="ls-box"/><rect x="500" y="188" width="34" height="30" rx="4" class="ls-box"/><rect x="540" y="188" width="34" height="30" rx="4" class="ls-box"/><rect x="580" y="188" width="34" height="30" rx="4" class="ls-box"/><rect x="620" y="188" width="34" height="30" rx="4" class="ls-box"/><rect x="660" y="188" width="34" height="30" rx="4" class="ls-box"/><rect x="700" y="188" width="34" height="30" rx="4" class="ls-box"/>' +
        '</g>' +
        '<g class="ls-fade ls-d4">' +
        '<rect x="100" y="228" width="34" height="30" rx="4" class="ls-box"/><rect x="140" y="228" width="34" height="30" rx="4" class="ls-box"/><rect x="180" y="228" width="34" height="30" rx="4" class="ls-box"/><rect x="220" y="228" width="34" height="30" rx="4" class="ls-box"/><rect x="260" y="228" width="34" height="30" rx="4" class="ls-box warn"/><text x="277" y="249" text-anchor="middle" class="ls-t xs red">100</text><rect x="300" y="228" width="34" height="30" rx="4" class="ls-box"/><rect x="340" y="228" width="34" height="30" rx="4" class="ls-box"/><rect x="380" y="228" width="34" height="30" rx="4" class="ls-box"/>' +
        '<rect x="420" y="228" width="34" height="30" rx="4" class="ls-box"/><rect x="460" y="228" width="34" height="30" rx="4" class="ls-box"/><rect x="500" y="228" width="34" height="30" rx="4" class="ls-box"/><rect x="540" y="228" width="34" height="30" rx="4" class="ls-box"/><rect x="580" y="228" width="34" height="30" rx="4" class="ls-box"/><rect x="620" y="228" width="34" height="30" rx="4" class="ls-box"/><rect x="660" y="228" width="34" height="30" rx="4" class="ls-box"/><rect x="700" y="228" width="34" height="30" rx="4" class="ls-box"/>' +
        '</g>' +
        '<text x="430" y="340" text-anchor="middle" class="ls-t sm">100 ÷ 32 = 3 → 字号 3；100 mod 32 = 4 → 位号 4</text>' +
        '<text x="430" y="370" text-anchor="middle" class="ls-t xs">位示图大小 = 磁盘块数 ÷ 8 字节，适合找连续空闲块</text>' +
        '</svg>'
    },
    {
      dur: 8400,
      caption: "磁盘由盘面、磁道、扇区组成；读写要先寻道，再等旋转，最后传输。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="430" y="40" text-anchor="middle" class="ls-t big">磁盘的物理结构</text>' +
        '<rect x="50" y="80" width="330" height="270" rx="16" class="ls-box" />' +
        '<circle cx="215" cy="215" r="120" fill="none" stroke="var(--line)" stroke-width="2"/>' +
        '<circle cx="215" cy="215" r="90" fill="none" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>' +
        '<circle cx="215" cy="215" r="60" fill="none" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>' +
        '<circle cx="215" cy="215" r="18" fill="var(--brand-soft)" stroke="var(--brand)"/>' +
        '<line x1="215" y1="215" x2="330" y2="125" stroke="var(--red)" stroke-width="2"/>' +
        '<text x="285" y="160" class="ls-t xs red">磁头</text>' +
        '<text x="215" y="110" text-anchor="middle" class="ls-t xs">磁道</text>' +
        '<text x="330" y="215" class="ls-t xs">扇区</text>' +
        '<text x="215" y="376" text-anchor="middle" class="ls-t sm">盘面（platter）</text>' +
        '<rect x="430" y="95" width="380" height="80" rx="12" class="ls-box hot"/>' +
        '<text x="620" y="126" text-anchor="middle" class="ls-t">柱面 = 所有盘面上半径相同的磁道</text>' +
        '<text x="620" y="152" text-anchor="middle" class="ls-t xs">按柱面组织可减少寻道</text>' +
        '<rect x="430" y="195" width="380" height="130" rx="12" class="ls-box ok"/>' +
        '<text x="450" y="225" class="ls-t brand">存取时间三件套</text>' +
        '<text x="450" y="255" class="ls-t sm">① 寻道时间：移动磁头到目标磁道</text>' +
        '<text x="450" y="281" class="ls-t sm">② 旋转延迟：等目标扇区转过来（平均半圈）</text>' +
        '<text x="450" y="307" class="ls-t sm">③ 传输时间：读/写数据</text>' +
        '<text x="430" y="370" text-anchor="middle" class="ls-t xs">磁盘地址 =（柱面号，盘面号，扇区号）</text>' +
        '</svg>'
    },
    {
      dur: 9000,
      caption: "磁盘调度就是决定磁头先去哪：FCFS 公平但绕路，SSTF 最近优先，SCAN 像电梯一样折返。",
      svg: '<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="430" y="38" text-anchor="middle" class="ls-t big">磁头轨迹：从 53 出发</text>' +
        '<line x1="60" y1="300" x2="800" y2="300" class="ls-line"/>' +
        '<text x="60" y="326" text-anchor="middle" class="ls-t xs">0</text>' +
        '<text x="245" y="326" text-anchor="middle" class="ls-t xs">50</text>' +
        '<text x="430" y="326" text-anchor="middle" class="ls-t xs">100</text>' +
        '<text x="615" y="326" text-anchor="middle" class="ls-t xs">150</text>' +
        '<text x="800" y="326" text-anchor="middle" class="ls-t xs">199</text>' +
        '<polyline points="253,90 310,115 320,140 444,165 537,190 545,215 721,240 800,265 200,290" fill="none" stroke="var(--brand)" stroke-width="2.5"/>' +
        '<circle cx="253" cy="90" r="6" fill="var(--accent)"/><text x="253" y="78" text-anchor="middle" class="ls-t xs">53</text>' +
        '<circle cx="310" cy="115" r="4" fill="var(--brand)"/><text x="318" y="108" class="ls-t xs">65</text>' +
        '<circle cx="320" cy="140" r="4" fill="var(--brand)"/><text x="328" y="136" class="ls-t xs">67</text>' +
        '<circle cx="444" cy="165" r="4" fill="var(--brand)"/><text x="452" y="160" class="ls-t xs">98</text>' +
        '<circle cx="537" cy="190" r="4" fill="var(--brand)"/><text x="545" y="186" class="ls-t xs">122</text>' +
        '<circle cx="545" cy="215" r="4" fill="var(--brand)"/><text x="553" y="212" class="ls-t xs">124</text>' +
        '<circle cx="721" cy="240" r="4" fill="var(--brand)"/><text x="729" y="236" class="ls-t xs">183</text>' +
        '<circle cx="800" cy="265" r="4" fill="var(--red)"/><text x="780" y="258" class="ls-t xs red">199</text>' +
        '<circle cx="200" cy="290" r="4" fill="var(--brand)"/><text x="200" y="282" text-anchor="middle" class="ls-t xs">37</text>' +
        '<text x="430" y="366" text-anchor="middle" class="ls-t sm">SCAN：先向大扫到端点，再反向；C-SCAN 到端点后快速回到 0 再同向扫</text>' +
        '<text x="430" y="390" text-anchor="middle" class="ls-t xs">SSTF 总移动 236 道；SCAN 331 道；FCFS 640 道</text>' +
        '</svg>'
    }
  ]
};
