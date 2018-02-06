const powershell = require('./node-powershell');


let ps = new powershell({
    executionPolicy: 'Bypass',
    noProfile: true,
    multiLine: true
    });
    ps.on('output', output => {
        console.log(output);
    })
    ps.addCommand(`$x = @"`);
    ps.addCommand(`foo`);
    ps.addCommand(`bar`);
    ps.addCommand(`"@;`);
    ps.invoke()
    ps.addCommand(`$x | out-host`)
    ps.invoke()

let ps2 = new powershell({
    executionPolicy: 'Bypass',
    noProfile: true
}); 
ps2.addCommand(`$PSVersionTable.PSVersion`);
ps2.addCommand(`$PSVersionTable.PSEdition`);
ps2.invoke()
.then(output =>  {
    ps2.dispose();
    console.log(output);
})
