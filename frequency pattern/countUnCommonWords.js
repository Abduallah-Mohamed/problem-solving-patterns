var countWords = function (words1, words2) {
  const fc1 = {};
  const fc2 = {};

  let counter = 0;

  for (let word of words1) {
    fc1[word] = fc1[word] + 1 || 1;
  }

  for (let word of words2) {
    fc2[word] = fc2[word] + 1 || 1;
  }

  for (let key in fc1) {
    if (fc2[key] && fc2[key] === 1 && fc1[key] === 1) counter += 1;
  }

  return counter;
};

console.log(countWords(["a", "b", "c"], ["a", "b", "z"]));
console.log(
  countWords(
    ["leetcode", "is", "amazing", "as", "is"],
    ["amazing", "leetcode", "is"]
  )
);

console.log(
  countWords(
    [
      "bjxzvssdoq",
      "oom",
      "lxrrvf",
      "aoeselhvrnw",
      "awnornqyztqlza",
      "bjxqkapuvaw",
      "wibxruerngdzgjd",
      "rezrwdzvllpbjpnikhzraz",
      "pswmnrsepudx",
      "nlicjldpeia",
      "glg",
      "nllxfcjjitmsuugmr",
      "cl",
      "pysmpgjakkjnusfopphb",
      "zxlwcdjpn",
      "xktsfnchwrdesnf",
      "qptnoxxgrjmvr",
      "exlfwjfsbsirbbkyqjtinrrwuhh",
      "rqbnghajxygilgdjejopyuwyjqrx",
      "vrjkqsicuqoalqyaxkaaogxbf",
      "ixnlltqbpygmpjuspom",
      "izajsxotcbhzdnkujwgdzo",
      "b",
      "lighabre",
      "i",
      "ljqqbfddipvcooh",
      "hboedpepeeunx",
      "bkhzhiefammwqkhvampokd",
      "ptlozguwmyyp",
      "loeshsjgazzwvs",
      "kyrltbdzlymjxtvwiiq",
      "fk",
      "mbjpgwsahkgkehlcoqbhunqchxj",
      "nfyuvlrmiturheb",
      "cyqwsiysmoirurj",
      "sciqruywy",
      "podsrhmsozan",
      "nlyadkrxhdbup",
      "gdugldwghzt",
      "wpjm",
      "gjobdekmjisjgadkwwemnmco",
      "dkjdtimdghvlhuetxyaklk",
      "iwqylhdwqbwaqdouowoodhs",
      "mn",
    ],
    [
      "eeormvovhzslwsqgzthlgntgzc",
      "zfwownznh",
      "suxrkdbjdjjtbkjucsbyk",
      "u",
      "y",
      "lbjooktoctgwbbptiffytquha",
      "dcsxrghgpultkatbecjadbespvww",
      "vwduylshcpaiu",
      "rtcxwctvquaiuwkgvdx",
      "a",
      "szearxmdqcismljmihbtkcirztdnrc",
      "htgmuxtxdunsvfizb",
      "hybe",
      "nsegkgwcvopncmfpaahhhjeuqjosv",
      "jtarnnpppxtzmopixeijqqahkd",
      "hazcgrrnpourkyoeanodejiptne",
      "kurhokvhixihe",
      "ljwycewmecfqdhtxiokjn",
      "qgjzzvpyvwetlsvcsw",
      "aunns",
      "nwcnfrzzvxafkfjfnczummtubikji",
      "nipiygnvlfntgpxfedj",
      "mgnt",
      "xvjehufvaqouhztnmts",
      "sjtbrfjwtqxakqktxjaljrbwfoxvz",
      "dfeujeikfrtrpiafrgxvjlkpxtog",
      "u",
      "ggbcxoasodaqaazulrxjleecexey",
      "inedrgssajhpygfvozigohis",
      "pevxwgfzxebybfe",
      "cgy",
      "fnhvlx",
      "vxfybaebkoq",
      "xvhx",
      "mxbqjtanctljewwjjlbpkgbtsm",
      "mlwagamcikbcpuexhikmizp",
      "qeiomipvsoqlsnhylulirrcwtqga",
      "bwemqcgyusuauwlpbjjru",
      "iimcbidtndh",
      "lpjejlkmxtlbyvnscy",
      "dlspriicnyykdsyvswlgktavwloq",
      "dib",
      "qoptbduulgqwquvhdvmwdz",
      "xrtxghrbfrhpzduxeljnctgg",
      "schmbsaupayqnpchn",
      "kah",
      "itotymryqufqpozrwmvsl",
      "gurb",
      "xsyocxcmwvqmnmxthfemmu",
      "pkfdutm",
      "hkbwxwjxyuld",
      "ukdqszfjckdunnhpevw",
      "kqfwytdvnvjrchiwprcqkfntqticsc",
      "zjmsfwjddgjiypsmagdrujb",
      "gn",
      "ebncbjvhpbjecbrizdpv",
      "nbfehcktwswih",
      "sttmqcdmobdgtgkyxydyovahknjbsn",
      "sryyufrtocf",
      "eiicpwknxrzqylqpybhfd",
      "pey",
      "njimttradeoa",
      "wcogjdfr",
      "prva",
      "tyxdmxgw",
      "wluzocppg",
      "kzm",
      "wbyyperlkflaoxyxftzwxvmemof",
      "snzpclbulddnmmjmpdurcybo",
      "mowxgpmzojtmympmt",
      "uvtnojjahrovzmlukf",
      "sykhtgejlmbzshhneoyqr",
      "ib",
      "haqkkizidifykwijm",
      "csjtexnr",
      "yvgr",
      "vzcxbtlthrynnawxnkxdptp",
      "yvxrmscsckv",
    ]
  )
);
