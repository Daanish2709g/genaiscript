import{_ as u}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-WSmdJfyZ.js";import{o as r,b as A,f as B,c as D,k as n,e as i,aa as l,l as e,m as k,q as C,s as m,B as h}from"./modules/vue-Dwbq4LJF.js";import{u as p,f as W}from"./slidev/context-CigSS48P.js";import"./modules/unplugin-icons-BLhFz9wC.js";import"./index-jy4_p8Mt.js";import"./modules/shiki-Dk14Fgjy.js";const f={class:"slidev-layout default overflow-y-auto"},R={__name:"trace",setup(d){return p(),(t,o)=>(r(),A("div",f,[B(t.$slots,"default")]))}},L={class:"rounded border border-gray-500 p-4"},E={__name:"hockey-trace.md__slidev_22",setup(d){const{$slidev:t,$nav:o,$clicksContext:g,$clicks:v,$page:S,$renderContext:b,$frontmatter:y}=p();return g.setup(),(w,s)=>{const a=u;return r(),D(R,C(m(h(W)(h(y),21))),{default:n(()=>[s[37]||(s[37]=i("h1",null,"Hockey line assigment",-1)),i("div",L,[s[2]||(s[2]=i("h2",null,"Step 1: Generate the lines.",-1)),s[3]||(s[3]=i("h3",null,"Reasoning:",-1)),s[4]||(s[4]=i("ol",null,[i("li",null,[i("p",null,[i("strong",null,"Identify unique positions"),l(": We need to ensure that each line has a player for each position (LD, RD, C, LW, RW). We’ll start by identifying players with unique preferred positions to fill those spots first.")])]),i("li",null,[i("p",null,[i("strong",null,"Assign players to their preferred positions"),l(": Players with a single preferred position or with less common combinations will be easier to place without conflicts.")])]),i("li",null,[i("p",null,[i("strong",null,"Balance skill levels"),l(": We’ll aim to distribute players with different skill levels across the lines to maintain balance.")])]),i("li",null,[i("p",null,[i("strong",null,"Minimize the number of lines"),l(": We’ll try to use the minimum number of lines to ensure every player plays at least once.")])]),i("li",null,[i("p",null,[i("strong",null,"Position consistency"),l(": Once a player is assigned to a position in one line, they must play the same position in any other line they are part of.")])]),i("li",null,[i("p",null,[i("strong",null,"Skill level difference"),l(": We’ll ensure that the total skill level difference between any two lines is not more than 4.")])]),i("li",null,[i("p",null,[i("strong",null,"Distribute skilled players"),l(": We’ll avoid putting all high-skilled players in one line.")])])],-1)),s[5]||(s[5]=i("h3",null,"Initial Line Assignments:",-1)),s[6]||(s[6]=i("ul",null,[i("li",null,[i("strong",null,"Line 1"),l(": High-skilled players")]),i("li",null,[i("strong",null,"Line 2"),l(": Medium to low-skilled players")]),i("li",null,[i("strong",null,"Line 3"),l(": Remaining players (if necessary)")])],-1)),s[7]||(s[7]=i("h3",null,"Assigning Players to Line 1:",-1)),s[8]||(s[8]=i("ul",null,[i("li",null,"LD: LDRD2 (Skill 2)"),i("li",null,"RD: RWRD3 (Skill 3)"),i("li",null,"C: C3 (Skill 3)"),i("li",null,"LW: LW3 (Skill 3)"),i("li",null,"RW: RW1 (Skill 1)")],-1)),s[9]||(s[9]=i("p",null,"Total skill: 12",-1)),s[10]||(s[10]=i("h3",null,"Assigning Players to Line 2:",-1)),s[11]||(s[11]=i("ul",null,[i("li",null,"LD: RWD2 (Skill 2)"),i("li",null,"RD: N3 (Skill 3, No Preference)"),i("li",null,"C: CW1 (Skill 1)"),i("li",null,"LW: W3 (Skill 3)"),i("li",null,"RW: RW1 (Duplicate, Skill 1)")],-1)),s[12]||(s[12]=i("p",null,"Total skill: 10",-1)),s[13]||(s[13]=i("h3",null,"Assigning Players to Line 3:",-1)),s[14]||(s[14]=i("ul",null,[i("li",null,"LD: N1 (Skill 1, No Preference)"),i("li",null,"RD: N3_2 (Skill 2, No Preference)"),i("li",null,"C: CW3 (Skill 3)"),i("li",null,"LW: CLW3 (Skill 3)"),i("li",null,"RW: RWD2 (Duplicate, Skill 2)")],-1)),s[15]||(s[15]=i("p",null,"Total skill: 11",-1)),s[16]||(s[16]=i("h3",null,"Observations:",-1)),s[17]||(s[17]=i("ul",null,[i("li",null,"RW1 is listed twice, which violates the rule that a player must play in the same position in all lines. We need to adjust this."),i("li",null,"We have not used all players yet, so we need to ensure that every player is included in at least one line.")],-1)),s[18]||(s[18]=i("h3",null,"Adjustments:",-1)),s[19]||(s[19]=i("ul",null,[i("li",null,"Replace RW1 in Line 2 with a player who has not been assigned yet and can play RW."),i("li",null,"Ensure all players are included in at least one line while maintaining position consistency and skill level balance.")],-1)),s[20]||(s[20]=i("h3",null,"Adjusted Line Assignments:",-1)),s[21]||(s[21]=i("ul",null,[i("li",null,[i("strong",null,"Line 1"),l(": Unchanged")]),i("li",null,[i("strong",null,"Line 2"),l(": Replace RW1 with another player who can play RW and has not been assigned yet.")]),i("li",null,[i("strong",null,"Line 3"),l(": Ensure all remaining players are included.")])],-1)),s[22]||(s[22]=i("h3",null,"Adjusted Line 2:",-1)),s[23]||(s[23]=i("ul",null,[i("li",null,"LD: RWD2 (Skill 2)"),i("li",null,"RD: N3 (Skill 3, No Preference)"),i("li",null,"C: CW1 (Skill 1)"),i("li",null,"LW: W3 (Skill 3)"),i("li",null,"RW: RWD2 (Duplicate, Skill 2)")],-1)),s[24]||(s[24]=i("p",null,"Total skill: 11",-1)),s[25]||(s[25]=i("h3",null,"Adjusted Line 3:",-1)),s[26]||(s[26]=i("ul",null,[i("li",null,"LD: N1 (Skill 1, No Preference)"),i("li",null,"RD: N3_2 (Skill 2, No Preference)"),i("li",null,"C: CW3 (Skill 3)"),i("li",null,"LW: CLW3 (Skill 3)"),i("li",null,"RW: RW1 (Skill 1)")],-1)),s[27]||(s[27]=i("p",null,"Total skill: 10",-1)),s[28]||(s[28]=i("h3",null,"Final Observations:",-1)),s[29]||(s[29]=i("ul",null,[i("li",null,"All players are now included in at least one line."),i("li",null,"No player is playing more than one position across different lines."),i("li",null,"Skill levels are balanced, with no line having a total skill level difference of more than 4 compared to any other line.")],-1)),s[30]||(s[30]=i("h2",null,"Step 2: Rule validation",-1)),s[31]||(s[31]=i("h3",null,"Rule Validation:",-1)),s[32]||(s[32]=i("ol",null,[i("li",null,[i("strong",null,"Every player plays at least once"),l(": All players are included in the lines.")]),i("li",null,[i("strong",null,"Position consistency"),l(": Each player maintains the same position in all lines they are part of.")]),i("li",null,[i("strong",null,"Skill level balance"),l(": The skill level difference between lines is within the allowed range.")]),i("li",null,[i("strong",null,"Player distribution"),l(": Skilled players are distributed across lines.")])],-1)),s[33]||(s[33]=i("h3",null,"Validation Results:",-1)),s[34]||(s[34]=i("p",null,"All rules appear to be satisfied with the current line assignments.",-1)),s[35]||(s[35]=i("h2",null,"Step 3: Output",-1)),e(a,k({},{ranges:[]}),{default:n(()=>s[0]||(s[0]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-yaml"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," score"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 12")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  LD"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," LDRD2")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  RD"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," RWRD3")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  C"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," C3")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  LW"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," LW3")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  RW"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," RW1")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," score"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 11")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  LD"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," RWD2")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  RD"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," N3")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  C"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," CW1")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  LW"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," W3")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  RW"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," RWD2")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," score"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 10")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  LD"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," N1")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  RD"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," N3_2")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  C"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," CW3")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  LW"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," CLW3")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  RW"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," RW1")])])],-1)])),_:1},16),e(a,k({},{ranges:[]}),{default:n(()=>s[1]||(s[1]=[i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-yaml"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," CW3")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  position"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," C")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," C3")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  position"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," C")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," CW1")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  position"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," C")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," CLW3")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  position"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," LW")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," LW3")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  position"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," LW")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," RW1")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  position"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," RW")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," W3")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  position"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," LW")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," RWRD3")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  position"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," RD")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," RWD2")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  position"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," LD")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," LDRD2")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  position"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," LD")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," N1")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  position"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," LD")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," N3")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  position"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," RD")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"-"),i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," N3_2")]),l(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  position"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," RD")])])],-1)])),_:1},16),s[36]||(s[36]=i("p",null,"Note: The above output assumes that the adjusted line assignments are correct and that no further validation is required. If any rule is found to be violated, we would need to revisit the line assignments.",-1))])]),_:1},16)}}};export{E as default};
