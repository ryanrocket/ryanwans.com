// INGAME by Ryan Wans (revision 4 for React)
// Copyright (C) 2021 Ryan Wans. All Rights Reserved.
// all wrongs are also reserved, too ;)

console.log("%c\nRyan Wans Development (C) 2019-2021 ARR/g (ing)\n", "background-color:white;color:black;padding:0px 5px;")

var ingameObject = {

    version: 'v4.0.3-react',
    s: window.sessionStorage,
    d: Date.now(),
    opts: {
        prefix: 'ingame_store',
        max_time: 3.6e+6,
        max_entry: null
    },
    compile: {
        paint: Date.now(),
        version: 'v4.0.3-react',
        rid: "lkab4uiy7aw3l85vyleukw5by89w3645--ingame",
        customer: {
            id: "32983",
            name: "Project Aeolus",
            applet: "main-site-32983",
        },
        telemetry: 1,
        report: 1,
        analytics: 1
    },
    sensitivity: [
        [0, null],
        [1, "hide"],
        [2, "obfus"],
        [3, "noac"],
        [4, "del"],
        [-1, 0]
    ],
    cookies: {
        read: (name) => (document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '')
    },
    templet: [
        "__data",
        "__path",
        "__stamp",
        "__origin",
        "__expire"
    ],

    str: {
        createName: (name) => (ingameObject.opts.prefix+":"+name)
    },
    io: {
        put: (name, stack, now, path) => {
            ingameObject.s.setItem(ingameObject.str.createName(name), JSON.stringify({
                data: stack,
                now: now,
                path: path,
                id: name
            }));
        },
        pop: (name) => {
            return JSON.parse(ingameObject.s.getItem(ingameObject.opts.prefix+":"+name)) || {};
        },
        del: (key) => {
            return ingameObject.s.removeItem(ingameObject.opts.prefix+":"+key) || false;
        }
    },
    chk: {
        time: (stamp) => ((Date.now() - stamp) > ingameObject.opts.max_time),
        exists: (name) => (!!ingameObject.io.pop(name))
    },
    facade: {
        pushNewStructure: (name, data) => {
            ingameObject.io.put(
                name,
                data,
                Date.now(),
                "com.ingame.facade.structure"
            )
        },
        getStructure: (name) => {return ingameObject.io.pop(name).data || false;},
        isStructureValid: (name) => {
            if(ingameObject.chk.exists(name)){
                var d = ingameObject.io.pop(name);
                if(!ingameObject.chk.time(d.now)) {
                    return true;
                }
            }
            return false;
        },
        ifNotValidCreateNew: (name, data) => {
            if(ingameObject.facade.isStructureValid(name)) {
                return true;
            } else {
                ingameObject.facade.pushNewStructure(name, data);
                return false;
            }
        },
        delete: (key) => {
            return ingameObject.io.del(key);
        }
    },

    valid: (key) => {return ingameObject.facade.isStructureValid(key);},
    push: (key, value) => {return ingameObject.facade.pushNewStructure(key, value);},
    pull: (key) => {return ingameObject.facade.getStructure(key);},
    super: (key, value) => {return ingameObject.facade.ifNotValidCreateNew(key, value);},
    created: (key) => {return ingameObject.io.pop(key).now;},
    delete: (key) => {return ingameObject.facade.delete(key);}

};

window.ingame = window.ingame || ingameObject;