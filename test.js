'use strict';

// setup sample data to test

let sampleOpts = {
    path: '/',
    domain: 'http://google.com',
    expires: 'Fri Dec 31 9999 18:59:59 GMT-0500 (EST)'
};

let cookieSample = 'GMAIL_AT=AF6bupNPG-4ljMQAUeL8AkD1aDiZ9IqwEA; GMAIL_IMP=v*2%2Fr-cs*51;' +
 'APISID=__XW-qe1zDwa6_5R/AT55EeVKhj79LwQ8J; SAPISID=cH5p1V9zdxGTB0kl/Ag6PEpI2qzLALxAeo;' +
 'SID=DQAAABoBAAA-uAZxduBZ0muAmhGC3zwVPAtjgwBiW-cq4imjCRI18RLG0yIhYKv7zM6mR7e0Z_Wmm1ylEB' +
 'EuyV18cSa5krjDTW_bifRXZUaaOGBKg5iElOSdF6QtAOPabFRSrqs00atViPG6OHgFVRhtgVgJgRL47Tu_myVM' +
 'j0NTyIOrlUEMpZGS4tXPqdhq_OGv4_tc8HG-My_ZZPBQfcwfDY0-QjOKyvMCeD3HzHp4Fvu4aT19WdIw7HY43c_' + 
 '2RIsWI-AyAZlhuTNG5UzevZJAu3kO_jTs0wdgQUjtwDEWUhk6kXBc9bpniI_4QxamuSLUOhRrt19UMo5XyVolLR' +
 'UzwqA9L1nq3LnXn22a4dAEXCNTvmd9bpAv-GBp2rwujv2PlDy0LM0; PREF=ID=1111111111111111:FF=0:' + 
 'LD=en:TM=1435002203:LM=1440549026:GM=1:SG=1:V=1:S=cUfe3033630QJo-L';