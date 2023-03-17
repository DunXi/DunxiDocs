import{_ as e,c as a,o as i,e as t}from"./app.bfb58980.js";const b=JSON.parse('{"title":"IPV6技术","description":"","frontmatter":{},"headers":[{"level":2,"title":"IPv6地址","slug":"ipv6地址","link":"#ipv6地址","children":[{"level":3,"title":"地址转换","slug":"地址转换","link":"#地址转换","children":[]}]},{"level":2,"title":"IPv6地址缩写规范","slug":"ipv6地址缩写规范","link":"#ipv6地址缩写规范","children":[]},{"level":2,"title":"IPv6地址分类","slug":"ipv6地址分类","link":"#ipv6地址分类","children":[{"level":3,"title":"组播地址","slug":"组播地址","link":"#组播地址","children":[]},{"level":3,"title":"单播地址","slug":"单播地址","link":"#单播地址","children":[]},{"level":3,"title":"任博地址","slug":"任博地址","link":"#任博地址","children":[]}]},{"level":2,"title":"IPv6单播地址结构","slug":"ipv6单播地址结构","link":"#ipv6单播地址结构","children":[{"level":3,"title":"IPv6单播地址接口标识","slug":"ipv6单播地址接口标识","link":"#ipv6单播地址接口标识","children":[]}]},{"level":2,"title":"IPv6组播地址","slug":"ipv6组播地址","link":"#ipv6组播地址","children":[{"level":3,"title":"被请求节点的组播地址","slug":"被请求节点的组播地址","link":"#被请求节点的组播地址","children":[]},{"level":3,"title":"IPv6组播Mac","slug":"ipv6组播mac","link":"#ipv6组播mac","children":[]}]},{"level":2,"title":"IPv6任播地址","slug":"ipv6任播地址","link":"#ipv6任播地址","children":[]},{"level":2,"title":"IPv6单播地址的业务流程（重点）","slug":"ipv6单播地址的业务流程-重点","link":"#ipv6单播地址的业务流程-重点","children":[{"level":3,"title":"地址解析","slug":"地址解析","link":"#地址解析","children":[]},{"level":3,"title":"地址配置","slug":"地址配置","link":"#地址配置","children":[]},{"level":3,"title":"DAD","slug":"dad","link":"#dad","children":[]}]},{"level":2,"title":"IPv6过渡技术","slug":"ipv6过渡技术","link":"#ipv6过渡技术","children":[]},{"level":2,"title":"路由","slug":"路由","link":"#路由","children":[]},{"level":2,"title":"OSPF","slug":"ospf","link":"#ospf","children":[{"level":3,"title":"Router ID：","slug":"router-id","link":"#router-id","children":[]},{"level":3,"title":"Hello字段","slug":"hello字段","link":"#hello字段","children":[]},{"level":3,"title":"网络类型","slug":"网络类型","link":"#网络类型","children":[]}]}],"relativePath":"network/IPV6.md","lastUpdated":1679025754000}'),d={name:"network/IPV6.md"},l=t('<h1 id="ipv6技术" tabindex="-1">IPV6技术 <a class="header-anchor" href="#ipv6技术" aria-hidden="true">#</a></h1><p>为了解决ipv4地址不够用的问题</p><p><img src="https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20230209114838446.png" alt="image-20230209114838446"></p><h2 id="ipv6地址" tabindex="-1">IPv6地址 <a class="header-anchor" href="#ipv6地址" aria-hidden="true">#</a></h2><p>ipv6地址的长度为128bit。<strong>一般用冒号分割为8段</strong>，每一段16bit，每一段内用十六进制表示，一个16进制数可以转换为4位二进制数。</p><p>IPv6地址中的字母大小写不敏感，A等同于a</p><p>ipv6也用IPv6/子网号</p><h3 id="地址转换" tabindex="-1">地址转换 <a class="header-anchor" href="#地址转换" aria-hidden="true">#</a></h3><p>05AD</p><p>0000 0101 1010 1101</p><p>CDEF</p><p>1100 1101 1110 1111</p><p>0DB8</p><p>0000 1101 1011 1000</p><table><thead><tr><th>十六进制</th><th>二进制</th></tr></thead><tbody><tr><td>0</td><td>0000</td></tr><tr><td>1</td><td>0001</td></tr><tr><td>2</td><td>0010</td></tr><tr><td>3</td><td>0011</td></tr><tr><td>4</td><td>0100</td></tr><tr><td>5</td><td>0101</td></tr><tr><td>6</td><td>0110</td></tr><tr><td>7</td><td>0111</td></tr><tr><td>8</td><td>1000</td></tr><tr><td>9</td><td>1001</td></tr><tr><td>A</td><td>1010</td></tr><tr><td>B</td><td>1011</td></tr><tr><td>C</td><td>1100</td></tr><tr><td>D</td><td>1101</td></tr><tr><td>E</td><td>1110</td></tr><tr><td>F</td><td>1111</td></tr></tbody></table><h2 id="ipv6地址缩写规范" tabindex="-1">IPv6地址缩写规范 <a class="header-anchor" href="#ipv6地址缩写规范" aria-hidden="true">#</a></h2><p>​ 为了书写方便，IPv6技术可以采用以下规则进行缩写。</p><ul><li><p>每组16bit的单元的前导0可以省略，但是如果16bit单元的所有bit都为0，那么至少要保留一个0字符，拖尾的0不能被省略。</p></li><li><p>一个或多个连续的16bit字符为0时，可用&quot;::&quot;表示，但整个IPv6地址缩写中只允许有一个&quot;::&quot;。</p><p>注意：如果整个IPv6地址中写了多个&quot;::&quot;则可能出现不确定每个符号缩减了几个0，只能表知道这几个符号一共缩减了几个0.</p></li></ul><h2 id="ipv6地址分类" tabindex="-1">IPv6地址分类 <a class="header-anchor" href="#ipv6地址分类" aria-hidden="true">#</a></h2><p>​ ipv6地址里面没有广播地址</p><h3 id="组播地址" tabindex="-1">组播地址 <a class="header-anchor" href="#组播地址" aria-hidden="true">#</a></h3><h3 id="单播地址" tabindex="-1">单播地址 <a class="header-anchor" href="#单播地址" aria-hidden="true">#</a></h3><h4 id="全球单播地址" tabindex="-1">全球单播地址 <a class="header-anchor" href="#全球单播地址" aria-hidden="true">#</a></h4><p>​ 2000::/3</p><h4 id="唯一本地地址" tabindex="-1">唯一本地地址 <a class="header-anchor" href="#唯一本地地址" aria-hidden="true">#</a></h4><p>​ FD00::/8</p><h4 id="链路本地地址" tabindex="-1">链路本地地址 <a class="header-anchor" href="#链路本地地址" aria-hidden="true">#</a></h4><p>​ FE80::/10</p><h4 id="特殊地址" tabindex="-1">特殊地址 <a class="header-anchor" href="#特殊地址" aria-hidden="true">#</a></h4><h4 id="其他单播地址" tabindex="-1">其他单播地址 <a class="header-anchor" href="#其他单播地址" aria-hidden="true">#</a></h4><h3 id="任博地址" tabindex="-1">任博地址 <a class="header-anchor" href="#任博地址" aria-hidden="true">#</a></h3><h2 id="ipv6单播地址结构" tabindex="-1">IPv6单播地址结构 <a class="header-anchor" href="#ipv6单播地址结构" aria-hidden="true">#</a></h2><p>​ 一个IPv6单播地址可以分为两种结构</p><ul><li><p>网络前缀：相当于IPv4中的网络位</p><ul><li>n bit</li></ul></li><li><p>接口标识：相当于主机位</p><ul><li>128 - n bit</li></ul></li></ul><h3 id="ipv6单播地址接口标识" tabindex="-1">IPv6单播地址接口标识 <a class="header-anchor" href="#ipv6单播地址接口标识" aria-hidden="true">#</a></h3><ul><li>接口标识可以通过三种方法生成 <ul><li>手工配置</li><li>系统自动生成</li><li>通过IEEE EUI-64规范生成</li></ul></li><li>其中EUI-64规范最为常用，此规范将接口的Mac地址转换为IPv6接口标识。 <ul><li>EUI-64 <ul><li>将Mac地址第7bit取反</li><li>在Mac地址中间加入FFFE,然后转成16进制</li></ul></li></ul></li></ul><h4 id="eui-64练习" tabindex="-1">EUI-64练习 <a class="header-anchor" href="#eui-64练习" aria-hidden="true">#</a></h4><p>72DE-9862-2A3F</p><p>0111 0010 1101 1110 1001 1000 1111 1111 1111 1110 0110 0010 0010 1010 0011 11111</p><p>70 DE 98 FF FE 62 2a 3f</p><p>DB 86 9c FFFE 88 ef aa</p><p>1101 1001 - 1000 0110 - 1001 1100 -11111111-11111110- 1000 1000- 1110 1111 - 1010 1010</p><p>D9 86 9c ff fe 88 ef aa</p><p>冒号分十六进制</p><p>D986:9CFF:FE88:EFAA</p><h2 id="ipv6组播地址" tabindex="-1">IPv6组播地址 <a class="header-anchor" href="#ipv6组播地址" aria-hidden="true">#</a></h2><p>​ ipv6组播地址表示多个接口，一般用于一对多的通信场景。</p><p>​ ipv6组播地址只可以作为ipv6报文的目的地址。组播</p><h3 id="被请求节点的组播地址" tabindex="-1">被请求节点的组播地址 <a class="header-anchor" href="#被请求节点的组播地址" aria-hidden="true">#</a></h3><p>​ 当一个节点有了单播或任播地址，就会对应生成一个被请求节点组播地址，并且两端设备会加入加入到同一个组播组。该地址主要用于<strong>邻居发现</strong>（相当于ipv4中的arp）和<strong>地址重复检测</strong>（相当于ipv4中的免费arp）功能。被请求节点组播地址的有效范围为本地链路范围。</p><h4 id="生成方法" tabindex="-1">生成方法 <a class="header-anchor" href="#生成方法" aria-hidden="true">#</a></h4><p>​ 前104bit固定（<strong>FF02开头</strong>），后24bit由单播地址的后24bit拷贝而来。</p><h3 id="ipv6组播mac" tabindex="-1">IPv6组播Mac <a class="header-anchor" href="#ipv6组播mac" aria-hidden="true">#</a></h3><p>组播Mac的前16bit为“33:33”，是专门为ipv6组播预留的Mac地址前缀。后32bit从组播ipv6地址的后32bit直接映射而来。</p><h2 id="ipv6任播地址" tabindex="-1">IPv6任播地址 <a class="header-anchor" href="#ipv6任播地址" aria-hidden="true">#</a></h2><p>​ 任播地址标识一组网络，不常用</p><h2 id="ipv6单播地址的业务流程-重点" tabindex="-1">IPv6单播地址的业务流程（重点） <a class="header-anchor" href="#ipv6单播地址的业务流程-重点" aria-hidden="true">#</a></h2><p>​ 一个接口在发送IPv6报文之前要经历地址配置、DAD、地址解析这三个阶段，NDP</p><ol><li>配置地址 <ol><li>全球单播地址 <ol><li>手工配置</li><li>无状态</li><li>有状态</li></ol></li><li>链路本地地址 <ol><li>手工配置</li><li>自动生成</li></ol></li></ol></li><li>DAD检测重复（检测是否存在重复IP）</li><li>地址解析（相当于ARP求Mac地址）来获取对方的Mac地址</li></ol><p>开启ipv6</p><p><img src="https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20230216113552117.png" alt="image-20230216113552117"></p><p>接口开启ipv6功能</p><p><img src="https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20230216113922788.png" alt="image-20230216113922788"></p><p>查看ipv6路由表</p><p><img src="https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20230216113825396.png" alt="image-20230216113825396"></p><h3 id="地址解析" tabindex="-1">地址解析 <a class="header-anchor" href="#地址解析" aria-hidden="true">#</a></h3><h4 id="检测是否通信-ping-ipv6" tabindex="-1">检测是否通信 ping ipv6 <a class="header-anchor" href="#检测是否通信-ping-ipv6" aria-hidden="true">#</a></h4><p>ping+ipv6地址</p><p>ping 2000::1</p><h3 id="地址配置" tabindex="-1">地址配置 <a class="header-anchor" href="#地址配置" aria-hidden="true">#</a></h3><h4 id="有状态地址配置" tabindex="-1">有状态地址配置 <a class="header-anchor" href="#有状态地址配置" aria-hidden="true">#</a></h4><p>通过DHCPv6报文交互，DHCPv6服务器端自动</p><h4 id="无状态地址配置" tabindex="-1">无状态地址配置 <a class="header-anchor" href="#无状态地址配置" aria-hidden="true">#</a></h4><p>NDP使用的IPv6报文</p><table><thead><tr><th>ICMPv6 Type</th><th>报文名称</th></tr></thead><tbody><tr><td>133</td><td>路由器请求（RS）</td></tr><tr><td>134</td><td>路由器通告（RA）</td></tr><tr><td>135</td><td>邻居请求（NS）</td></tr><tr><td>136</td><td>邻居通告（NA）</td></tr></tbody></table><p>​ PC在没有IP地址的时候会向路由器发送RS请求，路由器在收到RS请求之后会回复给PC一份RA报文，携带网络前缀，PC在收到网络前缀之后会通过EUI-64自动生成接口标识</p><p>服务器</p><blockquote><p>Undo ipv6 nd ra halt 允许接受RA报文</p></blockquote><p>客户端</p><blockquote><p>ipv6 address auto link-local 自动生成链路本地地址</p><p>ipv6 address auto global 自动生成全球单播地址</p></blockquote><h4 id="有状态-dhcpv6" tabindex="-1">有状态（DHCPv6） <a class="header-anchor" href="#有状态-dhcpv6" aria-hidden="true">#</a></h4><h4 id="dhcp-v4" tabindex="-1">DHCP（V4） <a class="header-anchor" href="#dhcp-v4" aria-hidden="true">#</a></h4><ol><li>路由器开启DHCP功能</li></ol><blockquote><p>dhcp enable</p></blockquote><ol start="2"><li>创建地址池</li></ol><blockquote><p>ip pool 1</p></blockquote><ol start="3"><li>设置地址池IP地址范围</li></ol><p>​ mask 表示掩码长度</p><blockquote><p>network 192.169.1.0 mask 24</p></blockquote><ol start="4"><li>设置网关地址</li></ol><blockquote><p>Gateway-list 192.168.1.254</p></blockquote><ol start="5"><li>设置接口IP地址（网关）</li></ol><blockquote><p>ip address 192.168.1.254</p></blockquote><ol start="6"><li>使能全局地址池</li></ol><blockquote><p>dhcp select global</p></blockquote><h4 id="dhcpv6" tabindex="-1">DHCPV6 <a class="header-anchor" href="#dhcpv6" aria-hidden="true">#</a></h4><h5 id="服务器" tabindex="-1">服务器： <a class="header-anchor" href="#服务器" aria-hidden="true">#</a></h5><h6 id="开启dhcp功能" tabindex="-1">开启DHCP功能 <a class="header-anchor" href="#开启dhcp功能" aria-hidden="true">#</a></h6><blockquote><p>dhcp enable</p></blockquote><h6 id="创建一个dhcpv6地址池" tabindex="-1">创建一个DHCPv6地址池 <a class="header-anchor" href="#创建一个dhcpv6地址池" aria-hidden="true">#</a></h6><blockquote><p>dhcpv6 pool 1</p></blockquote><h6 id="规定地址池ipv6的范围" tabindex="-1">规定地址池ipv6的范围 <a class="header-anchor" href="#规定地址池ipv6的范围" aria-hidden="true">#</a></h6><blockquote><p>address prefix 2002::/64</p></blockquote><h6 id="将网关地址排除" tabindex="-1">将网关地址排除 <a class="header-anchor" href="#将网关地址排除" aria-hidden="true">#</a></h6><blockquote><p>[]excluded-address 2002::2</p></blockquote><h6 id="调用dhcpv6地址池" tabindex="-1">调用DHCPv6地址池 <a class="header-anchor" href="#调用dhcpv6地址池" aria-hidden="true">#</a></h6><blockquote><p>[huawei-GigabitEthernet0/0/0]dhcpv6 server 1</p></blockquote><h5 id="客户端" tabindex="-1">客户端： <a class="header-anchor" href="#客户端" aria-hidden="true">#</a></h5><h6 id="开启dhcp功能-1" tabindex="-1">开启dhcp功能 <a class="header-anchor" href="#开启dhcp功能-1" aria-hidden="true">#</a></h6><blockquote><p>[Huawei]dhcp enable</p></blockquote><h6 id="配置自动获取dhcp" tabindex="-1">配置自动获取dhcp <a class="header-anchor" href="#配置自动获取dhcp" aria-hidden="true">#</a></h6><blockquote><p>ipv6 address auto dhcp</p></blockquote><h3 id="dad" tabindex="-1">DAD <a class="header-anchor" href="#dad" aria-hidden="true">#</a></h3><p><img src="https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/f6780957c755995fd17b1b72c630d3a3.jpeg" alt="f6780957c755995fd17b1b72c630d3a3"></p><ol><li>PC配置IP地址之后，会发送NS报文检测IP地址是否重复</li><li>NS报文中携带着源IP地址::,目的IP地址为 自己配置的全球单播地址所对应的被请求节点组播地址，并且携带上自己配置的全球单播地址（需要检测的IP地址）</li><li>由于R1的IP地址和PC相同，因此被请求节点的组播地址相同，并且和PC会加入到同一个组播组，所以R1能收到这个NS报文，并且发现NS报文中需要检测的IP地址与自己的IP地址想通</li><li>R1回复NA报文给，源IP地址为自己的地址，目的IP地址由于不知道，因此目的地址为FF02::1（所有节点组播地址），整个组播组中的设备都能收到该报文。</li><li>PC收到之后发现NA中的IP地址与自己的重复，因此会将2001::FFFF标识为重复，使用其他IP地址。</li></ol><h2 id="ipv6过渡技术" tabindex="-1">IPv6过渡技术 <a class="header-anchor" href="#ipv6过渡技术" aria-hidden="true">#</a></h2><ul><li>双栈技术</li><li>隧道技术</li><li>转换技术</li></ul><p><img src="https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20230302113428273.png" alt="image-20230302113428273"></p><table><thead><tr><th>IPv6地址或前缀</th><th>含义</th></tr></thead><tbody><tr><td>2001::/16</td><td>用于IPv6 Internet,类似于IPv4公网地址</td></tr><tr><td>2002::/16</td><td>用于6to4隧道</td></tr><tr><td>FE80::/10</td><td>链路本地地址前缀，用于本地链路地址范围内的通信</td></tr><tr><td>FF00::/8</td><td>组播地址前缀，用于ipv6组播</td></tr><tr><td>::/128</td><td>未指定地址，类似于ipv4中的0.0.0.0</td></tr><tr><td>::1/128</td><td>环回地址，类似于ipv4中的127.0.0.1</td></tr></tbody></table><h2 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-hidden="true">#</a></h2><p>Ipv6 route-static 目的网段（最终去的地方）</p><p>对方掩码 出接口（接口名称） 下一跳（ip地址）</p><h2 id="ospf" tabindex="-1">OSPF <a class="header-anchor" href="#ospf" aria-hidden="true">#</a></h2><p>距离矢量：只知道距离和方向，不知道网络的具体细节，RIP（容易产生环路）、BGP增强型距离矢量（水平分割）</p><p>链路状态：知道网络的细节 OSPF、ISIS</p><ul><li>Hello :建立邻居关系</li><li>DD 数据库描述报文</li><li>LSR 链路状态请求报文</li><li>LSU：链路状态更新报文</li><li>LSACK：确认报文</li></ul><h3 id="router-id" tabindex="-1">Router ID： <a class="header-anchor" href="#router-id" aria-hidden="true">#</a></h3><h4 id="生成方法-1" tabindex="-1">生成方法： <a class="header-anchor" href="#生成方法-1" aria-hidden="true">#</a></h4><p>​ 手动配置</p><p>​ 自动生成</p><p>​ Loopback：IP地址最大的作为Router ID</p><p>​ 物理接口：IP地址最大的作为Router ID</p><h3 id="hello字段" tabindex="-1">Hello字段 <a class="header-anchor" href="#hello字段" aria-hidden="true">#</a></h3><p>​ Network mask： 发送Hello的接口掩码</p><p>​ Hello Interval： Hello 报文发送时间间隔：默认10s</p><p>​ Router Dead Interval： 死亡时间：4倍于Hello间隔，默认40s</p><p>​ Designated Router： DR 指定路由器</p><p>​ Backup Designated Router： BDR 备份指定路由器</p><p>​ Router Priority: DR优先级（0-255）</p><h3 id="网络类型" tabindex="-1">网络类型 <a class="header-anchor" href="#网络类型" aria-hidden="true">#</a></h3><p>以太网（只要有MAC地址）</p><p>广域网协议PPP、HDLC</p><p>ATM、帧中继</p><p>网络层（OSPF）：广播网络类型（BMA） P2P（点对点） NBMA P2MP</p><p>数据链路层： 以太网 PPP、HDLC ATM、帧中继</p><p>特殊：P2MP 没有任何一种数据链路层协议对应</p><p>DR、BDR、DR other</p><p>DR other 只能与DR、BDR建立邻接关系</p><p>DR other 与 DR other 之间建立邻居关系</p><p>BDR 与 DR 之间建立邻接关系</p><p>选举DR、BDR</p>',151),r=[l];function h(p,n,c,o,s,u){return i(),a("div",null,r)}const P=e(d,[["render",h]]);export{b as __pageData,P as default};
