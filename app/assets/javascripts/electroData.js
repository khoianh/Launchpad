var electroData = {
  
    // unique song id
    song_number: 3,
    
    song_name: "SUBFER - Electro Mashup",
    
    bpm:128,
  
    // mappings of sound to key
    mappings:{
        chain1:["c12","c13","b0", "b1", "b2", "b3", "b13","a7", "a0", "a1", "a2", "a3",
                "c14","d15","b8", "b9", "b10","b11","b7", "a8", "a9", "b10","a11","",
                "d10","d14","b15","d7", "b12","d4", "",   "a15","c7", "a12","c4", "c15",
                "d9", "d12","d3", "d11","d0", "d8", "",   "c3", "c11","c0", "c8", ""],
                
        chain2:["c14","c14","a0","",   "d0","",   "b0", "b1", "b2", "b3", "d3", "a1",
                "",   "c14","a2","b6", "d5","d6", "d7", "b4", "b5", "b6", "b7", "a4",
                "c8", "c14","a3","d8", "d9","d10","d11","b8", "b9", "b10","b11","a6",
                "c8", "c3", "a7","d12","c2","d14","d15","b12","b13","b14","b15",""],
        
        chain3:["a4","c14","c1", "c5", "a10","a11","b2", "b3", "d12","d13","d14","d15",
                "a6","c14","c2", "c6", "b4", "b5", "b6", "a1", "d8", "d9", "d10","d11",
                "c8","",   "c3", "c7", "b8", "b9", "b10","b11","d4", "d5", "d6", "d7",
                "c8","",   "c11","c15","b12","a12","b14","b15","d0", "d2", "d3", ""],
                
        chain4:["a0", "",   "",   "","c12","c13","c14","c15","",   "b3", "e0","",
                "a4", "a5", "",   "","",   "",   "",   "",   "b6", "b7", "e1","e2",
                "a8", "a9", "",   "","",   "",   "",   "",   "b10","b11","e3","",
                "a12","a13","a14","","",   "",   "",   "b13","b14","b15","e4",""]
    },
    
    // which keys need to be held to play through
    holdToPlay:{
        chain1:[],
        
        chain2:[],
        
        chain3:[],
        
        chain4:[]
    },
    
    // sets of keys that are linked (only one can be playing at a time)
    linkedAreas:{
        chain1:[[0,1,12,13,24,25]],
        
        chain2:[],
        
        chain3:[],
        
        chain4:[[20,10,22],[20,23,34]]
    },
  
  soundUrls:{
    chain1:{
        a0:"https://www.dropbox.com/s/x9fb3pm0sawe7u1/a0.mp3?dl=0",
        a1:"https://www.dropbox.com/s/vwmebmx4baqvtai/a1.mp3?dl=0",
        a2:"https://www.dropbox.com/s/6u448ndp81k0y18/a2.mp3?dl=0",
        a3:"https://www.dropbox.com/s/2nli0fxvx40lzk8/a3.mp3?dl=0",
        a7:"https://www.dropbox.com/s/q8gr26g4elnr8a5/a7.mp3?dl=0",
        a8:"https://www.dropbox.com/s/i8tt5unq1hhamsu/a8.mp3?dl=0",
        a9:"https://www.dropbox.com/s/c8km21xiri9t68k/a9.mp3?dl=0",
        a10:"https://www.dropbox.com/s/occ6oqrlqovs7cp/a10.mp3?dl=0",
        a11:"https://www.dropbox.com/s/s3ahdbuoy0j5t9m/a11.mp3?dl=0",
        a12:"https://www.dropbox.com/s/72x8op4frgzkbgk/a12.mp3?dl=0",
        a15:"https://www.dropbox.com/s/vrlzsto73xs92hp/a15.mp3?dl=0",
        b0:"https://www.dropbox.com/s/4qm5vczraetzegk/b0.mp3?dl=0",
        b1:"https://www.dropbox.com/s/1d1rcv6eywr47fa/b1.mp3?dl=0",
        b2:"https://www.dropbox.com/s/vor9zvgoizt1fnn/b2.mp3?dl=0",
        b3:"https://www.dropbox.com/s/t7u78nbp2pkv3kp/b3.mp3?dl=0",
        b7:"https://www.dropbox.com/s/nvr0177lkrgx3fo/b7.mp3?dl=0",
        b8:"https://www.dropbox.com/s/2pz0bcqlotjpp6a/b8.mp3?dl=0",
        b9:"https://www.dropbox.com/s/di7b3vgllptde8v/b9.mp3?dl=0",
        b10:"https://www.dropbox.com/s/4zwuhrkdh65hrr1/b10.mp3?dl=0",
        b11:"https://www.dropbox.com/s/4xjgg83ruuo3onx/b11.mp3?dl=0",
        b12:"https://www.dropbox.com/s/frnadcu7yjgfs1p/b12.mp3?dl=0",
        b13:"https://www.dropbox.com/s/8czrhtn4q2j9hd2/b13.mp3?dl=0",
        b15:"https://www.dropbox.com/s/bf4gq9ykd01kmu1/b15.mp3?dl=0",
        c0:"https://www.dropbox.com/s/wct6luhnj2cncq2/c0.mp3?dl=0",
        c3:"https://www.dropbox.com/s/upp0eq7aown8t1r/c3.mp3?dl=0",
        c4:"https://www.dropbox.com/s/wo5axjtfmfb68ao/c4.mp3?dl=0",
        c7:"https://www.dropbox.com/s/2i8a48412ehaonp/c7.mp3?dl=0",
        c8:"https://www.dropbox.com/s/yxkgyaokdhu9wts/c8.mp3?dl=0",
        c11:"https://www.dropbox.com/s/c9jg04xlwnem7rl/c11.mp3?dl=0",
        c12:"https://www.dropbox.com/s/jykpn3p6l60f458/c12.mp3?dl=0",
        c13:"https://www.dropbox.com/s/czfa1m6h7wjkv59/c13.mp3?dl=0",
        c14:"https://www.dropbox.com/s/rg11ihytwgz63lo/c14.mp3?dl=0",
        c15:"https://www.dropbox.com/s/lp61ehsrc25x3k4/c15.mp3?dl=0",
        d0:"https://www.dropbox.com/s/4e4rsc3n4uyqm19/d0.mp3?dl=0",
        d3:"https://www.dropbox.com/s/bs54df70qtpmx51/d3.mp3?dl=0",
        d4:"https://www.dropbox.com/s/hgip7pbhm96z2q0/d4.mp3?dl=0",
        d7:"https://www.dropbox.com/s/4ta8zgper6873l4/d7.mp3?dl=0",
        d8:"https://www.dropbox.com/s/fnzwbwl7eiq7m7v/d8.mp3?dl=0",
        d9:"https://www.dropbox.com/s/p265o0qal121fpk/d9.mp3?dl=0",
        d10:"https://www.dropbox.com/s/xde3qt7qekb2v0k/d10.mp3?dl=0",
        d11:"https://www.dropbox.com/s/naopl36d1aeb2z9/d11.mp3?dl=0",
        d12:"https://www.dropbox.com/s/jq0igt2tiicbmj9/d12.mp3?dl=0",
        d14:"https://www.dropbox.com/s/vl2mglpos6cizzs/d14.mp3?dl=0",
        d15:"https://www.dropbox.com/s/heghjm9bmys7gza/d15.mp3?dl=0"
    },
    chain2:{
        a0:"https://www.dropbox.com/s/pb25zscpzkxa68r/a0.mp3?dl=0",
        a1:"https://www.dropbox.com/s/i0eewntu72qjdfx/a1.mp3?dl=0",
        a2:"https://www.dropbox.com/s/xbcmcqk0qwzx9lx/a2.mp3?dl=0",
        a3:"https://www.dropbox.com/s/cipj0o98k1tvrmc/a3.mp3?dl=0",
        a4:"https://www.dropbox.com/s/2sznlieducv8y43/a4.mp3?dl=0",
        a6:"https://www.dropbox.com/s/ohiz17646xouzh7/a6.mp3?dl=0",
        a7:"https://www.dropbox.com/s/l6wmcc8ht1aktwb/a7.mp3?dl=0",
        b0:"https://www.dropbox.com/s/dr8gckadi3fo4mm/b0.mp3?dl=0",
        b1:"https://www.dropbox.com/s/i6fetww0p41qvv5/b1.mp3?dl=0",
        b2:"https://www.dropbox.com/s/de0cpx34jq7khaj/b2.mp3?dl=0",
        b3:"https://www.dropbox.com/s/c60wdvyt9yk3sil/b3.mp3?dl=0",
        b4:"https://www.dropbox.com/s/kuh6rl969qz5w8j/b4.mp3?dl=0",
        b5:"https://www.dropbox.com/s/ld2u6lpiebonn5r/b5.mp3?dl=0",
        b6:"https://www.dropbox.com/s/6oe3zijypxvh0bv/b6.mp3?dl=0",
        b7:"https://www.dropbox.com/s/xhm7yq07hz08bho/b7.mp3?dl=0",
        b8:"https://www.dropbox.com/s/m306amm6gw36dqj/b8.mp3?dl=0",
        b9:"https://www.dropbox.com/s/e77dzlbvh281n7c/b9.mp3?dl=0",
        b10:"https://www.dropbox.com/s/tskx94fxuj2uql6/b10.mp3?dl=0",
        b11:"https://www.dropbox.com/s/0v9znewd03srcxx/b11.mp3?dl=0",
        b12:"https://www.dropbox.com/s/1v5qleqfqfuq9t5/b12.mp3?dl=0",
        b13:"https://www.dropbox.com/s/g61ej1qn4tq25ho/b13.mp3?dl=0",
        b14:"https://www.dropbox.com/s/i81cjcyc9mwoddl/b14.mp3?dl=0",
        b15:"https://www.dropbox.com/s/2rui9eumr3ouy1j/b15.mp3?dl=0",
        c2:"https://www.dropbox.com/s/r7hfdygyz9pu7e6/c2.mp3?dl=0",
        c3:"https://www.dropbox.com/s/khlbmnvjpuhkeqv/c3.mp3?dl=0",
        c8:"https://www.dropbox.com/s/hxwqu432kjifbll/c8.mp3?dl=0",
        c14:"https://www.dropbox.com/s/pzh8uec5brjq3hf/c14.mp3?dl=0",
        d0:"https://www.dropbox.com/s/gdvztxpxyejn6wu/d0.mp3?dl=0",
        d3:"https://www.dropbox.com/s/zig41v1kfq4js6i/d3.mp3?dl=0",
        d5:"https://www.dropbox.com/s/ohcf4xa2ql5vurx/d5.mp3?dl=0",
        d6:"https://www.dropbox.com/s/2ur9rpszv7ms9hg/d6.mp3?dl=0",
        d7:"https://www.dropbox.com/s/aalhhs49km953kq/d7.mp3?dl=0",
        d8:"https://www.dropbox.com/s/9kpnw6okxttq45k/d8.mp3?dl=0",
        d9:"https://www.dropbox.com/s/n7oahwsbedbwomm/d9.mp3?dl=0",
        d10:"https://www.dropbox.com/s/nj6q72qjsks2z15/d10.mp3?dl=0",
        d11:"https://www.dropbox.com/s/kf4f9a1wwm6ps0a/d11.mp3?dl=0",
        d12:"https://www.dropbox.com/s/lawq0ooy3wa7amd/d12.mp3?dl=0",
        d14:"https://www.dropbox.com/s/71kisxvumwvao4a/d14.mp3?dl=0",
        d15:"https://www.dropbox.com/s/6i9sij7jwrmbdio/d15.mp3?dl=0"
    },
    chain3:{
        a1:"https://www.dropbox.com/s/mlmm049p208169e/a1.mp3?dl=0",
        a4:"https://www.dropbox.com/s/n25rjketnu8mxnw/a4.mp3?dl=0",
        a6:"https://www.dropbox.com/s/phbagvnomcg11fo/a6.mp3?dl=0",
        a10:"https://www.dropbox.com/s/stogxffnbe0k7y6/a10.mp3?dl=0",
        a11:"https://www.dropbox.com/s/b5okqno5fue6aim/a11.mp3?dl=0",
        a12:"https://www.dropbox.com/s/2igu6rou4two1rp/a12.mp3?dl=0",
        b2:"https://www.dropbox.com/s/jc0vi2ns220drnj/b2.mp3?dl=0",
        b3:"https://www.dropbox.com/s/rn4kahzb13qwwsp/b3.mp3?dl=0",
        b4:"https://www.dropbox.com/s/9m3sflb4acy4n3a/b4.mp3?dl=0",
        b5:"https://www.dropbox.com/s/sexlo44hheqdnh3/b5.mp3?dl=0",
        b6:"https://www.dropbox.com/s/fplqupb0cqmy129/b6.mp3?dl=0",
        b8:"https://www.dropbox.com/s/g7s2s0q3y10vnzb/b8.mp3?dl=0",
        // b9:"https://www.dropbox.com/s/ancpocypjvp9nte/b9.mp3?dl=0",
        // b10:"https://www.dropbox.com/s/b2vozghgdohev71/b10.mp3?dl=0",
        // b11:"https://www.dropbox.com/s/jy2phj4b7qqvz94/b11.mp3?dl=0",
        b9:"https://www.dropbox.com/s/e77dzlbvh281n7c/b9.mp3?dl=0",
        b10:"https://www.dropbox.com/s/tskx94fxuj2uql6/b10.mp3?dl=0",
        b11:"https://www.dropbox.com/s/0v9znewd03srcxx/b11.mp3?dl=0",
        b12:"https://www.dropbox.com/s/n54fvj6lam8anfs/b12.mp3?dl=0",
        b14:"https://www.dropbox.com/s/qghiy2rudwbgpbc/b14.mp3?dl=0",
        b15:"https://www.dropbox.com/s/a0kdsasd9ur9lw4/b15.mp3?dl=0",
        c1:"https://www.dropbox.com/s/6hwywn0fbz9tb9v/c1.mp3?dl=0",
        c2:"https://www.dropbox.com/s/qydw3nsb1v4jva5/c2.mp3?dl=0",
        c3:"https://www.dropbox.com/s/q9pbfyzpx9w9st8/c3.mp3?dl=0",
        c5:"https://www.dropbox.com/s/wkrgl1eifuigwip/c5.mp3?dl=0",
        c6:"https://www.dropbox.com/s/qhu2szps563auzo/c6.mp3?dl=0",
        c7:"https://www.dropbox.com/s/548eefhewzhyasi/c7.mp3?dl=0",
        c8:"https://www.dropbox.com/s/j6n69s59s1h9v8b/c8.mp3?dl=0",
        c11:"https://www.dropbox.com/s/44jpj1xam6ige6j/c11.mp3?dl=0",
        c14:"https://www.dropbox.com/s/swv43p4uy8gztk3/c14.mp3?dl=0",
        c15:"https://www.dropbox.com/s/r8w8zd15ri1qlv1/c15.mp3?dl=0",
        d0:"https://www.dropbox.com/s/a5mny8po1b5krhm/d0.mp3?dl=0",
        d2:"https://www.dropbox.com/s/eanfjfq9lt32h8l/d2.mp3?dl=0",
        d3:"https://www.dropbox.com/s/mopfvavnad7vf14/d3.mp3?dl=0",
        d4:"https://www.dropbox.com/s/h6irem5h0c1juwo/d4.mp3?dl=0",
        d5:"https://www.dropbox.com/s/vvn3s2mr12lv643/d5.mp3?dl=0",
        d6:"https://www.dropbox.com/s/w9fpzj2oux7yl7u/d6.mp3?dl=0",
        d7:"https://www.dropbox.com/s/n8ot1tuq4u23sda/d7.mp3?dl=0",
        d8:"https://www.dropbox.com/s/wxhatluxr5xfiru/d8.mp3?dl=0",
        d9:"https://www.dropbox.com/s/ctigs2k7ydtkpzq/d9.mp3?dl=0",
        d10:"https://www.dropbox.com/s/rsryza26ihsslxt/d10.mp3?dl=0",
        d11:"https://www.dropbox.com/s/8erg1ajwfisrzfq/d11.mp3?dl=0",
        d12:"https://www.dropbox.com/s/plxdra9e59g2r2r/d12.mp3?dl=0",
        d13:"https://www.dropbox.com/s/mp96enaytn7frd0/d13.mp3?dl=0",
        d14:"https://www.dropbox.com/s/re2z5ieq402ycc2/d14.mp3?dl=0",
        d15:"https://www.dropbox.com/s/641u7ckca5si9aa/d15.mp3?dl=0"
    },
    chain4:{
      a0:"https://www.dropbox.com/s/nc077r4azuqj06o/a0.mp3?dl=0",
      a4:"https://www.dropbox.com/s/hap4e4vih8cap4f/a4.mp3?dl=0",
      a5:"https://www.dropbox.com/s/yxmygnu7es1y02d/a5.mp3?dl=0",
      a8:"https://www.dropbox.com/s/tt3axy0li37g9sn/a8.mp3?dl=0",
      a9:"https://www.dropbox.com/s/22pn7mvjsa0yss6/a9.mp3?dl=0",
      a12:"https://www.dropbox.com/s/avnktgcgcpyqrab/a12.mp3?dl=0",
      a13:"https://www.dropbox.com/s/hr0c2f1u4q8660x/a13.mp3?dl=0",
      a14:"https://www.dropbox.com/s/i766tt7p66cq9qc/a14.mp3?dl=0",
      b3:"https://www.dropbox.com/s/9ozns5ychf8mzud/b3.mp3?dl=0",
      b6:"https://www.dropbox.com/s/ijnya9atsvlnbcx/b6.mp3?dl=0",
      b7:"https://www.dropbox.com/s/8ljar4ea5ge2vpv/b7.mp3?dl=0",
      b10:"https://www.dropbox.com/s/81l1iz5wac0wbbh/b10.mp3?dl=0",
      b11:"https://www.dropbox.com/s/8usaye0awxgzgmk/b11.mp3?dl=0",
      b13:"https://www.dropbox.com/s/wa5ryto1zrrisl9/b13.mp3?dl=0",
      b14:"https://www.dropbox.com/s/6omw1ovu9uitxx0/b14.mp3?dl=0",
      b15:"https://www.dropbox.com/s/6tftzspatmtgwmi/b15.mp3?dl=0",
      c12:"https://www.dropbox.com/s/38ez1evw954st2d/c12.mp3?dl=0",
      c13:"https://www.dropbox.com/s/4lhff8dfacqah5x/c13.mp3?dl=0",
      c14:"https://www.dropbox.com/s/n67c6hnx9wndhxr/c14.mp3?dl=0",
      c15:"https://www.dropbox.com/s/qbcazl98px4feny/c15.mp3?dl=0",
      e0:"https://www.dropbox.com/s/nfxpyt2rgba4ahx/e0.mp3?dl=0",
      e1:"https://www.dropbox.com/s/2ac2jne9ow1k3lf/e1.mp3?dl=0",
      e2:"https://www.dropbox.com/s/2fqxdjgq45p51ek/e2.mp3?dl=0",
      e3:"https://www.dropbox.com/s/b63yyvtk1vqg73o/e3.mp3?dl=0",
      e4:"https://www.dropbox.com/s/9lc1k46l8khdl17/e4.mp3?dl=0"
    }
  }
}